const Hero = () => {
    return (
      <section className="container-fluid" id="supportHero">
        <div className="py-5" id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>
        <div className="row" id="supportWrapper">
          <div className="col-7 mb-5 px-0">
            <h4 className="pb-3">Search for an answer or browse help topics to create a ticket</h4>
            <input placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."/> <br/>
            <a href="">Track account opening</a> 
            <a href="">Track segment activation</a> 
            <a href="">Intraday margins</a> <br/>
            <a href="">Kite user manual</a>
          </div>
          <div className="col-5 ps-5 pt-5">
            <h4>Featured</h4>
            <ol>
              <li><a href="" style={{fontSize: "16px"}}>MCX Crude option contract expiry - May 2025</a></li>
              <li><a href="" style={{fontSize: "16px"}}>Offer for sale (OFS) - May 2025</a></li>
            </ol>
          </div>
        </div>
        
      </section>
    )
  };
  
  export default Hero;
  