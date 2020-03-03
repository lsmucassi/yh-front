import React from 'react'

const Trip = () => {
    return (
         <section id="spo" className="special-offer">
         {/* <!--special-offer start--> */}
         <div className="container">
           <div className="special-offer-content">
             <div className="row">
               <div className="col-sm-8">
                 <div className="single-special-offer">
                   <div className="single-special-offer-txt">
                     <h2>thailand</h2>
                     <div className="packages-review special-offer-review">
                       <p>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <i className="fa fa-star"></i>
                         <span>2544 review</span>
                       </p>
                     </div>
                     {/* <!--/.packages-review--> */}
                     <div className="packages-para special-offer-para">
                       <p>
                         <span>
                           <i className="fa fa-angle-right"></i> 9 Nights/ 10 Days
                         </span>
                         <span>
                           <i className="fa fa-angle-right"></i> PHUKET, KOH PHIPHI &amp; KRABI
                         </span>
                         <span>
                           <i className="fa fa-angle-right"></i>  Island Hopping from Krabi
                         </span>
                       </p>
                       <p>
                         <span>
                           <i className="fa fa-angle-right"></i>  Phang Nga Bay & Maya Bay tour
                         </span>
                         <span>
                           <i className="fa fa-angle-right"></i>  food facilities
                         </span>
                       </p>
                       <p className="offer-para">
                         Known for tropical beaches, opulent royal palaces,
                         ancient ruins and ornate temples displaying figures
                         of Buddha. In Bangkok, the capital, an ultramodern
                         cityscape rises next to quiet canalside communities
                         and the iconic temples of Wat Arun, Wat Pho and the
                         Emerald Buddha Temple (Wat Phra Kaew). Nearby beach
                         resorts include bustling Pattaya and fashionable Hua Hin.
                       </p>
                     </div>
                     {/* <!--/.packages-para--> */}
                     <div className="offer-btn-group">
                       {/* <!-- <div className="about-btn">
                         <button  className="about-view packages-btn offfer-btn">
                           make tour
                         </button>
                       </div> -->
                       <!--/.about-btn--> */}
                       <div className="about-btn">
                         <button onclick="window.location.href='./special/phuket.html'" 
                                 className="about-view packages-btn">
                           book now
                         </button>
                       </div>
                       {/* <!--/.about-btn--> */}
                     </div>
                     {/* <!--/.offer-btn-group--> */}
                   </div>
                   {/* <!--/.single-special-offer-txt--> */}
                 </div>
                 {/* <!--/.single-special-offer--> */}
               </div>
               {/* <!--/.col--> */}
               <div className="col-sm-4">
                 <div className="single-special-offer">
                   <div className="single-special-offer-bg">
                     <img src="assets/images/offer/offer-shape.png" 
                           alt="offer-shape"/>
                   </div>
                   {/* <!--/.single-special-offer-bg--> */}
                   <div className="single-special-shape-txt">
                     <h3>special offer</h3>
                     <h4><span>R35 760</span><br/></h4>
                     <p><span>R2 500</span><br/>deposit</p>
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
         {/* <!--/.special-offer end--> */}
         {/* <!--special-offer end--> */}
       </section>
    )
}

export default Trip
