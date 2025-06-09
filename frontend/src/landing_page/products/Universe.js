const Universe = () => {
  return (
    <div className="container text-center mt-5 p-3">
      <h1>The Zerodha Universe.</h1>
      <p className="fs-5 mb-5">
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>

      <div className="row product">
        {/* Row 1 */}
        <div className="col-md-4 p-4">
          <img src="media/zerodhaFundhouse.png" style={{ width: "45%" }} alt="Zerodha Fund House" />
          <p className="text-muted" style={{fontSize: "14px"}}>
            Our asset management venture creating simple and transparent index funds.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="media/sensibullLogo.svg" style={{ width: "65%" }} alt="Sensibull" />
          <p className="text-muted" style={{fontSize: "14px"}}>
            Options trading platform for creating strategies and analyzing data points.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="media/tijoriLogo.png" style={{ width: "40%" }} alt="Tijori" />
          <p className="text-muted">
            Investment research platform with detailed insights on stocks and sectors.
          </p>
        </div>

        {/* Row 2 */}
        <div className="col-md-4 p-4">
          <img src="media/streakLogo.png" style={{ width: "40%" }} alt="Streak" />
          <p className="text-muted" style={{fontSize: "14px"}}>
            Systematic trading platform for creating and backtesting strategies.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="media/smallcaseLogo.png" style={{ width: "50%" }} alt="smallcase" />
          <p className="text-muted" style={{fontSize: "14px"}}>
            Invest in diversified baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 p-4">
          <img src="media/dittoLogo.png" style={{ width: "35%" }} alt="Ditto" />
          <p className="text-muted" style={{fontSize: "14px"}}>
            Personalized advice on insurance — no spam, no mis-selling.
          </p>
        </div>
        <div className="align-items-center mb-5">
          <button className='btn btn-primary p-2 fs-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
        </div>
        
      </div>
    </div>

  );
};

export default Universe;
