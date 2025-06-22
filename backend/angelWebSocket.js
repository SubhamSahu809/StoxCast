require('dotenv').config();

const { SmartAPI, WebSocketV2 } = require('smartapi-javascript');
const { totp } = require('otplib');
const base32Decode = require('base32-decode');

const CLIENT_CODE = process.env.CLIENT_CODE;
const PASSWORD = process.env.PASSWORD;
const API_KEY = process.env.API_KEY;
const base32Secret = process.env.TOTP_SECRET;


const decodedSecret = Buffer.from(base32Decode(base32Secret, 'RFC4648')).toString('hex');

// Configure otplib to match Google Authenticator settings
totp.options = {
  digits: 6,
  step: 30,
  algorithm: 'sha1',
  encoding: 'hex', // hex format
};

const TOTP = totp.generate(decodedSecret);
console.log('🔐 Generated TOTP:', TOTP);

// Initialize the SmartAPI
const smart_api = new SmartAPI({
  api_key: API_KEY,
});

(async () => {
  try {
    const sessionData = await smart_api.generateSession(CLIENT_CODE, PASSWORD, TOTP);
    console.log('Logged in successfully');
    console.log('sessionData:', sessionData);

    if (!sessionData.status) {
      console.error("Login failed:", sessionData.message);
      return;
    }

    // console.log("Passed to WebSocket =>", {
    //   // For the WebSocket, we pass:
    //   //   - Authorization header should use jwtToken (for Bearer authentication)
    //   //   - x-feed-token header is set with feed token if required by your SDK
    //   jwttoken: sessionData.data.jwtToken,
    //   apikey: API_KEY,
    //   clientcode: CLIENT_CODE,
    //   feedtype: sessionData.data.feedToken,
    // });

    // Create the WebSocketV2
    const web_socket = new WebSocketV2({
      clientcode: CLIENT_CODE,
      jwttoken: sessionData.data.jwtToken, // Used in the Authorization header
      apikey: API_KEY,
      feedtype: sessionData.data.feedToken, // Goes to x-feed-token header
    });

    web_socket.customError();
    web_socket.reconnection('linear', 3000, 1.5);

    // Connect to the WebSocket
    await web_socket.connect();
    console.log('📡 WebSocket connected');

    // Fetch market data for a given token (example: "3045")
    web_socket.fetchData({
      correlationID: "demo123",
      action: 1,         // 1 = subscribe
      mode: 2,           // Mode 2 (for full market depth or quote)
      exchangeType: 1,   // 1 = NSE, 2 = BSE
      tokens: ["3045"],
    });

    // Listen to incoming tick data and log it
    web_socket.on("tick", (data) => {
      console.log('Tick Data:', data);
    });

  } catch (err) {
    console.error('Error:', err.message || err);
  }
})();
