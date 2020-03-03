import React from 'react'

const CountOffer = () => {
    return (
        <section className="discount-offer">
        {/* <!--discount-offer start--> */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="dicount-offer-content text-center">
                  <h2>Book A trip for November or December, 2019 and get upto 40% Discount</h2>
                  <div className="campaign-timer">
                    <div id="timer">
                      <div className="time time-after" id="days">
                        <span></span>
                      </div>
                      {/* <!--/.time--> */}
                      <div className="time time-after" id="hours">

                      </div>
                      {/* <!--/.time--> */}
                      <div className="time time-after" id="minutes">

                      </div>
                      {/* <!--/.time--> */}
                      <div className="time" id="seconds">

                      </div>
                      {/* <!--/.time--> */}
                    </div>
                    {/* <!--/.timer--> */}
                  </div>
                  {/* <!--/.campaign-timer--> */}
                   <div className="about-btn">
                    <button onclick="window.location.href='./contact.html';" 
                            className="about-view discount-offer-btn">
                      Book now
                    </button>
                  </div> 
                  {/* <!--/.about-btn--> */}

               </div>
                {/* <!-- /.dicount-offer-content--> */}
              </div>
              {/* <!-- /.col--> */}
            </div>
            {/* <!-- /.row--> */}
           </div>
          {/* <!-- /.container--> */}

        {/* <!-- /.discount-offer--> */}
        {/* {/* <!--discount-offer end-->  */}
        </section>
    )
}

export default CountOffer
