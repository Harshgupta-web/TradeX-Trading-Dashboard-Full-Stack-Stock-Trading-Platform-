import React from 'react'
function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className=" p-5 mt-5 " id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href="">Track Ticket</a>
            </div>

            <div className="row mb-5 mx-5 px-5">
                <div className="col p-5 ">
                    <h1 className='fs-3'>Search for an answer or Browse help topics to create a ticket</h1>
                    <div><input type="text" placeholder='Eg. how do i activate F&O ' /></div>
                    
                   <a href="" > Track account opening  </a>
                   <a href="" > Track segment activation </a>
                   <a href="" > Intraday margins </a>
                   <a href="" > Kite user manual </a>
                </div>
                <div className="col-1"></div>
                <div className="col p-5 ">
                    <h1>Features</h1>
                    <ol>
                        <li><a href="" > Current Takeovers and Delisting - January 2025  </a></li>
                        <li><a href="" > Latest Intraday leverages - MIS & CO </a></li>
                    </ol>
                    
                   
                </div>
            </div>
        </section>
     );
}

export default Hero;