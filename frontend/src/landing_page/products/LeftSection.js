function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-6 p-5">
          <img src={imageURL} style={{marginLeft: "60px"}}/>
        </div>
        <div className="col-1"></div>
        <div className="col-4 p-5 ">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div >
            <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo →</a>
            <a href={learnMore} style={{marginLeft: "50px", textDecoration: "none"}}>Learn More →</a>
          </div>
          
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\googlePlayBadge.svg"/>
            </a>
            <a href={appStore} style={{marginLeft: "25px"}}>
              <img src="media\appstoreBadge.svg"/>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
