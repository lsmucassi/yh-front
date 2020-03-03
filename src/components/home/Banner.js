import React from 'react'

const Banner = () => {
    return (
        <section id="home" className="about-us">
            {/* <!--about-us start --> */}
          <div className="container">
            <div className="about-us-content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="single-about-us">
                    <div className="about-us-txt">
                      <h2>
                        Explore.
                        {/* <br/> */}
                        Dream.
                        {/* <br/> */}
                        Discover. 
                        <div className="about-btn">
                        <button onclick="window.location.href='#gallery';" 
                            className="about-view smooth-menu">
                          explore now
                        </button>
                      </div>
                      </h2>
                      
                      {/* <!--/.about-btn--> */}
                    </div>
                    {/* <!--/.about-us-txt--> */}
                  </div>
                  {/* <!--/.single-about-us--> */}
                </div>
                {/* <!--/.col--> */}
                <div className="col-sm-0">
                  <div className="single-about-us">
                    
                  </div>
                  {/* <!--/.single-about-us--> */}
                </div>
                {/* <!--/.col--> */}
              </div>
              {/* <!--/.row--> */}
            </div>
            {/* <!--/.about-us-content--> */}
          </div>
          {/* <!--/.container--> */}
          {/* <!--/.about-us-->
        <!--about-us end --> */}
        </section>
    )
}

export default Banner
