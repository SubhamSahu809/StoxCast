const CreateTicket = () => {
  return (
    <div className="container" id="support">
      <div className="row p-5 mt-5">
        <p className="fs-4 text-muted mb-5">
          To create a ticket, select a relevant topic
        </p>

        {/* First Row */}
        <div className="col-md-4">
          <p className="mb-3 fs-5">
            <i className="fa-regular fa-circle-plus me-2"></i> Account Opening
          </p>
          <ul className="list-unstyled ps-4">
            <li><a href="#" className="text-decoration-none d-block mb-2">Resident individual</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Minor</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Non Resident Indian (NRI)</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Company, Partnership, HUF and LLP</a></li>
            <li><a href="#" className="text-decoration-none d-block">Glossary</a></li>
          </ul>
        </div>

        <div className="col-md-4">
          <p className="mb-3 fs-5">Your Zerodha Account</p>
          <ul className="list-unstyled ps-4">
            <li><a href="#" className="text-decoration-none d-block mb-2">Your Profile</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Account modification</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Client Master Report (CMR) and Depository Participant (DP)</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Nomination</a></li>
            <li><a href="#" className="text-decoration-none d-block">Transfer and conversion of securities</a></li>
          </ul>
        </div>

        <div className="col-md-4 ">
          <p className="mb-3 fs-5">Kite</p>
          <ul className="list-unstyled ps-4">
            <li><a href="#" className="text-decoration-none d-block mb-2">IPO</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Trading FAQs</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Margin Trading Facility (MTF) and Margins</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Charts and orders</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Alerts and Nudges</a></li>
            <li><a href="#" className="text-decoration-none d-block">General</a></li><br/>
          </ul>
        </div>
      </div>

      {/* Second Row */}
      <div className="row px-5 mb-5">
        <div className="col-md-4 mb-4">
          <p className="mb-3 fs-5">
            <i className="fa-regular fa-circle-plus me-2"></i> Funds
          </p>
          <ul className="list-unstyled ps-4">
            <li><a href="#" className="text-decoration-none d-block mb-2">Add money</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Withdraw money</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Add bank accounts</a></li>
            <li><a href="#" className="text-decoration-none d-block">eMandates</a></li>
          </ul>
        </div>

        <div className="col-md-4 mb-4">
          <p className="mb-3 fs-5">Console</p>
          <ul className="list-unstyled ps-4">
            <li><a href="#" className="text-decoration-none d-block mb-2">Portfolio</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Corporate actions</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Reports</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Profile</a></li>
            <li><a href="#" className="text-decoration-none d-block">Segments</a></li>
          </ul>
        </div>

        <div className="col-md-4 mb-4">
          <p className="mb-3 fs-5">Coin</p>
          <ul className="list-unstyled ps-4">
            <li><a href="#" className="text-decoration-none d-block mb-2">Understanding mutual funds and Coin</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Coin app</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Coin web</a></li>
            <li><a href="#" className="text-decoration-none d-block mb-2">Transactions and reports</a></li>
            <li><a href="#" className="text-decoration-none d-block">National Pension Scheme (NPS)</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
