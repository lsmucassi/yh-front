import React from 'react';

const ContactUs = () => {
    return (
		<section id="spo" class="special-offer-one">
        {/* <!--special-offer start--></section> */}
        <div class="container">
            <div class="special-offer-content-one">
                <div class="row">
                    <div class="col-sm-8">
                        <div class="single-special-offer-one">
                            <div class="single-special-offer-txt-one">
                                {/* <!--/.packages-review--> */}
                                <div class="packages-para special-offer-para-one">
                                        <div class="row">
                                                <h1>contact us</h1>
                                        </div>
                                        <div class="row">
                                                <h4 style="text-align:center">
                                                We'd love to hear from you!</h4>
                                        </div>
                                        <form action="https://formspree.io/yellowhattravels@gmail.com" method="POST">
                                            <div class="row input-container">
                                                    <div class="col-xs-12">
                                                        <div class="styled-input wide">
                                                            <input type="text" name="name" class="name" required />
                                                            <label>Name</label> 
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="styled-input">
                                                            <input type="email" name="email" class="email" required />
                                                            <label>Email</label> 
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-sm-12">
                                                        <div class="styled-input" style="float:right;">
                                                            <input type="text" name="phone" class="phone" required />
                                                            <label>Phone Number</label> 
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <div class="styled-input wide">
                                                            <input type="text" name="subject" class="subject" required />
                                                            <label>Subject</label> 
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12">
                                                        <div class="styled-input wide">
                                                            <textarea name="message" class="message" required></textarea>
                                                            <label>Message</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-xs-12 offer-btn-group-one">
                                                        <div class="about-btn">
                                                            <button onclick="window.location.href = '../index.html#pack';" class="about-view packages-btn offfer-btn-one">
                                                                go back
                                                            </button>
                                                        </div>
                                                        {/* <!--/.about-btn--> */}
                                                        <div class="about-btn">
                                                            <button onclick="window.location.href = '#';" class="about-view packages-btn contsubmit">
                                                                send
                                                            </button>
                                                        </div>
                                                        {/* <!--/.about-btn--> */}
                                                    </div>
                                                    {/* <!--/.offer-btn-group--> */}
                                            </div>
                                        </form>
                                    {/* <!-- </div> --> */}
                                </div>
                                {/* <!--/.packages-para--> */}
                                
                            </div>
                            {/* <!--/.single-special-offer-txt--> */}
                        </div>
                        {/* <!--/.single-special-offer--> */}
                    </div>
                    {/* <!--/.col--> */}
                    <div class="col-sm-4">
                        <div class="single-special-offer-one">
                            <div class="single-special-offer-bg-one">
                                <img src="./assets/images/offer/offer-shape.png" alt="offer-shape">
                            </div>
                            {/* <!--/.single-special-offer-bg--> */}
                            <div class="single-special-shape-txt-one">
                                <h3>Get In Touch</h3>
                                <h6 class="status"></h6>
                                {/* <!-- <p><span class="status"></span><br>reguler R 14 050</p> --> */}
                            </div>
                            {/* <!--/.single-special-shape-txt--> */}
                        </div>
                        {/* <!--/.single-special-offer--> */}
                    </div>
                    {/* <!--/.col--> */}
                </div>
                {/* <!--/.row--> */}
            </div>
            {/* <!--/.special-offer-content--> */}
        </div>
        {/* <!--/.container--> */}
        {/* <!--/.special-offer end-->
    <!--special-offer end--> */}
    </section>
    )
}