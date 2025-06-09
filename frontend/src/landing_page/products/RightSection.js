function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-4 offset-md-1 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href="#" className="text-primary text-decoration-none">Learn More →</a>
        </div>
        <div className="col-md-6 text-center">
          <img src={imageURL} className="img-fluid" alt="Product Dashboard" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
