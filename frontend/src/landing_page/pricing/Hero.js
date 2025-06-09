const Hero = () => {
    return (
      <div className="container">
        <div className="row p-5 mt-5 border-bottom text-center">
          <h1>Pricing</h1>
          <p className="text-muted mt-3 fs-5">
            Free equity investments and flat ₹20 traday and F&O trades
          </p>
        </div>
        <div className="row p-5 text-center">
          <div className="col-4 p-4">
            <img src="media/pricing0.svg"/>
            <h3>Free equity delivery</h3>
            <p >All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>

          <div className="col-4 p-4">
            <img src="media/intradayTrades.svg"/>
            <h3>Intraday and F&O trades</h3>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>

          <div className="col-4 p-4">
            <img src="media/pricing0.svg"/>
            <h3>Free direct MF</h3>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>        
      </div>
    );
  };
  
  export default Hero;
  