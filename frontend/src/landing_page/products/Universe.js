import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className=" mt-5">The Zerodha Universe</h1>
        <p className=" mt-3" style={{fontSize:"1.1em" }}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="row">
          <div className="col-4 p-3 mt-5">
            <img src="media/images/zerodhaFundhouse.png" alt=""  style={{width:"50%", aspectRatio:"3/2" ,objectFit:"contain"}}/>
            <p className="text-small text-muted mt-2">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/sensibullLogo.svg" alt="" style={{width:"50%", aspectRatio:"3/2" ,objectFit:"contain"}}/>
            <p className="text-small text-muted mt-2">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/tijori.svg" alt="" style={{width:"50%", aspectRatio:"3/2" ,objectFit:"contain"}} />
            <p className="text-small text-muted mt-2">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
                  </div>
                      
          <div className="col-4 p-3 mt-5 ">
            <img src="media/images/streakLogo.png" alt="" style={{width:"50%", aspectRatio:"3/2" ,objectFit:"contain"}}/>
            <p className="text-small text-muted mt-2">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3 mt-5 ">
            <img src="media/images/smallcaseLogo.png" alt="" style={{width:"50%", aspectRatio:"3/2" ,objectFit:"contain"}}/>
            <p className="text-small text-muted mt-2">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3 mt-5 ">
            <img src="media/images/dittoLogo.png" alt="" style={{width:"50%", aspectRatio:"3/2" ,objectFit:"contain"}}/>
            <p className="text-small text-muted mt-2">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free
            </p>
          </div>
          <button
            className="p-2 btn btn-primary fs-5 mb-5 mt-4"
            style={{ width: "20%", margin: "0 auto" }}
          >
            SignUp for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
