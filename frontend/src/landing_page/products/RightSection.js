import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-5 pt-5 mt-5">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "1.8", fontSize: "1em" }}>
            {productDescription}
          </p>
          <div className="mb-3">
            <a
              href={learnMore}
              style={{textDecoration: "none" }}
            >
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="col-1"></div>

        <div className="col-6 ">
          <img src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
