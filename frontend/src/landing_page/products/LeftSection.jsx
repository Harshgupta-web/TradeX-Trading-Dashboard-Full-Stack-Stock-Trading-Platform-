import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
          <div className="row p-5">
        <div className="col-6 p-5">
          <img src={imageURL} alt="" />
              </div>
              <div className="col-1"></div>
              
        <div className="col-5 p-5 mt-5">
          <h1 >{productName}</h1>
          <p style={{lineHeight:"1.8", fontSize:"1em"}}>{productDescription}</p>
          <div className="mb-3">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "60px", textDecoration: "none" }}
            >
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appStoreBadge.svg"
                alt=""
                style={{ marginLeft: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
