import React from 'react'

const World = () => {
    return (
        <section id="gallery" className="gallery">
          {/* <!--galley start--> */}
          <div className="container">
            <div className="gallery-details">
              <div className="gallary-header text-center">
                <h2>
                  world destination
                </h2>
                <p>
                  Yellow Hat Travels offers travel information on a 
                  wide range of destinations. Learn about your 
                  destination today and contact us for more information.
                </p>
              </div>
              {/* <!--/.gallery-header--> */}
              <div className="gallery-box">
                <div className="gallery-content">
                    <div className="filtr-container">
                      <div className="row">

                        <div className="col-md-6">
                          <div className="filtr-item">
                          <img src="assets/images/yellhat-img/europe/alex-vasey-3lxrM5yvkcI-unsplash.jpg" 
                                alt="portfolio image"/>
                          <div className="item-title">
                            <a href="#">
                              Europe
                            </a>
                            <p><span>20 tours</span><span>15 places</span></p>
                          </div>
                          {/* <!-- /.item-title --> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        <div className="col-md-6">
                          <div className="filtr-item">
                          <img src="assets/images/yellhat-img/africa/harshil-gudka-kfxEUCTUeyg-unsplash.jpg" alt="portfolio image"/>
                          <div className="item-title">
                            <a href="#">
                              Africa
                            </a>
                            <p><span>12 tours</span><span>9 places</span></p>
                          </div> 
                          {/* <!-- /.item-title--> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        <div className="col-md-7">
                          <div className="filtr-item">
                          <img src="assets/images/yellhat-img/asia/jason-cooper-iEJVyyevw-U-unsplash.jpg" alt="portfolio image"/>
                          <div className="item-title">
                            <a href="#">
                              Asia
                            </a>
                            <p><span>25 tours</span><span>10 places</span></p>
                          </div>
                          {/* <!-- /.item-title --> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        <div className="col-md-4">
                          <div className="filtr-item">
                          <img src="assets/images/yellhat-img/north-america/touann-gatouillat-vergos-dSBJv66Yjlk-unsplash.jpg" 
                                alt="portfolio image"/>
                          <div className="item-title">
                            <a href="#">
                              North America
                            </a>
                            <p><span>18 tours</span><span>9 places</span></p>
                          </div> 
                          {/* <!-- /.item-title--> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        <div className="col-md-5">
                          <div className="filtr-item">
                          <img src="assets/images/yellhat-img/south-america/arto-marttinen-6Wt0kG2zK4A-unsplash.jpg" 
                                alt="portfolio image"/>
                          <div className="item-title">
                            <a href="#">
                              South America
                            </a>
                            <p><span>14 tours</span><span>12 places</span></p>
                          </div> 
                          {/* <!-- /.item-title--> */}
                        </div>
                        {/* <!-- /.filtr-item --> */}
                        </div>
                        {/* <!-- /.col --> */}

                        {/* <!-- <div className="col-md-8">
                          <div className="filtr-item">
                          <img src="assets/images/gallary/g6.jpg" alt="portfolio image"/>
                          <div className="item-title">
                            <a href="#">
                              turkey
                            </a>
                            <p><span>14 tours</span><span>6 places</span></p> -->
                          <!-- </div>  -->
                          <!-- /.item-title-->
                        <!-- </div> -->
                        <!-- /.filtr-item -->
                        <!-- </div> -->
                        <!-- /.col --> */}

                      </div>
                      {/* <!-- /.row --> */}

                    </div>
                    {/* <!-- /.filtr-container--> */}
                </div>
                {/* <!-- /.gallery-content --> */}
              </div>
              {/* <!--/.galley-box--> */}
            </div>
            {/* <!--/.gallery-details--> */}
          </div>
            {/* <!--/.container--> */}
            {/* <!--/.gallery--> */}
            {/* <!--gallery end--> */}
        </section>
    )
}

export default World
