"use client"
import { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";



export default function PremiumCollection() {


   const [toggle, setToggles] = useState(1);

  function updateToggler(id) {
    setToggles(id);
  }

    
  return (
      <div>

            <div className="category-section">
                <div className="category-content" data-aos="fade-up">
                    <div className="category-left">
                      <h1>Our Premium Services</h1>
                    </div>
          <div className="category-below">
            <div>
               <p>Looking for Open Job Opportunities? <span><Link href="/jobs">Find Jobs </Link></span></p>
            </div>
            <div><Link href="/booking"><h4 className="bookings">Book Now</h4></Link></div>
          </div>
                </div>
          </div>     
          <div className="premiumsides" data-aos="fade-up">
        <div className="premium-tabs">
          <div className="tabset" onClick={() => updateToggler(7)}><Image src="/assets/images/car.png" width={30} height={30} alt="Plus" priority className="imageplus" />Automobile Warranty Protection Plan </div>
          <div className="tabset" onClick={()=>updateToggler(11)}><Image src="/assets/images/bank.png" width={30} height={30} alt="Plus" priority className="imageplus" />Bank and Financial Institutions Warranty Protection Plan</div>
          <div className="tabset" onClick={()=>updateToggler(2)}><Image src="/assets/images/motorcycle.png" width={30} height={30} alt="Plus" priority className="imageplus" />BodaBoda Warranty Protection Plan</div>
          <div className="tabset" onClick={()=>updateToggler(9)}><Image src="/assets/images/building-two.png" width={30} height={30} alt="Plus" priority className="imageplus" />Commercial Property Warranty Protection Plan </div>
          <div className="tabset" onClick={() => updateToggler(8)}><Image src="/assets/images/government.png" width={30} height={30} alt="Plus" priority className="imageplus" />Government Agency’s Property Warranty Protection Plan </div>
          <div className="tabset" onClick={() => updateToggler(6)}><Image src="/assets/images/health.png" width={30} height={30} alt="Plus" priority className="imageplus" />Healthcare Property Warranty Protection Plan</div>
          <div className="tabset" onClick={() => updateToggler(3)}><Image src="/assets/images/house.png" width={30} height={30} alt="Plus" priority className="imageplus" />Home Warranty Protection Plan</div>
          <div className="tabset" onClick={()=>updateToggler(10)}><Image src="/assets/images/hotel.png" width={30} height={30} alt="Plus" priority className="imageplus" />Hotels and Hospitality Warranty Protection Plan</div>
          <div className="tabset" onClick={() => updateToggler(5)}><Image src="/assets/images/building.png" width={30} height={30} alt="Plus" priority className="imageplus" />Landlord Warranty Protection Plan  </div>
          <div className="tabset" onClick={() => updateToggler(13)}><Image src="/assets/images/manufacturing.png" width={30} height={30} alt="Plus" priority className="imageplus" />Manufacturing Plants and Warehousing Warranty Protection Plan </div>
          <div className="tabset" onClick={() => updateToggler(12)}><Image src="/assets/images/church.png" width={30} height={30} alt="Plus" priority className="imageplus" />Places of Worship Warranty Protection Plan  </div>
          <div className="tabset" onClick={() => updateToggler(14)}><Image src="/assets/images/restaurant.png" width={30} height={30} alt="Plus" priority className="imageplus" />Restaurants and Food Services Facility Warranty Protection Plan</div>
          <div className="tabset" onClick={() => updateToggler(15)}><Image src="/assets/images/shop.png" width={30} height={30} alt="Plus" priority className="imageplus" />Retail Shops and Shopping Mall Warranty Protection Plan  </div>
          <div className="tabset" onClick={() => updateToggler(16)}><Image src="/assets/images/schools.png" width={30} height={30} alt="Plus" priority className="imageplus" />Schools and Learning Institutions Warranty Protection Plan </div>
          <div className="tabset" onClick={() => updateToggler(4)}><Image src="/assets/images/apartment.png" width={30} height={30} alt="Plus" priority className="imageplus" />Tenant Warranty Protection Plan </div>
          <div className="tabset" onClick={()=>updateToggler(1)}><Image src="/assets/images/tuktuk.png" width={30} height={30} alt="Plus" priority className="imageplus" />TukTuk Warranty Protection Plan</div>
          
        </div>
        
            <div className="premium-content">
              <div className={toggle === 1 ? "show-content" : "tabscontentspremium"}>tuktuk</div>
              <div className={toggle === 2 ? "show-content" : "tabscontentspremium"}> BodaBoda</div>
              <div className={toggle === 3 ? "show-content" : "tabscontentspremium"}> Homewarranty</div>
              <div className={toggle === 4 ? "show-content" : "tabscontentspremium"}> Tenant</div>
              <div className={toggle === 5 ? "show-content" : "tabscontentspremium"}> Landlord</div>
              <div className={toggle === 6 ? "show-content" : "tabscontentspremium"}>Healthcare</div>
              <div className={toggle === 7 ? "show-content" : "tabscontentspremium"}> Automobile</div>
              <div className={toggle === 8 ? "show-content" : "tabscontentspremium"}> government</div>
              <div className={toggle === 9 ? "show-content" : "tabscontentspremium"}> Commercial</div>
              <div className={toggle === 10 ? "show-content" : "tabscontentspremium"}> Hotels</div>
                <div className={toggle === 11 ? "show-content" : "tabscontentspremium"}> banking</div>
                <div className={toggle === 12 ? "show-content" : "tabscontentspremium"}> church</div>
                <div className={toggle === 13 ? "show-content" : "tabscontentspremium"}> Manufacturing</div>
                <div className={toggle === 14 ? "show-content" : "tabscontentspremium"}> Restaurants</div>
                <div className={toggle === 15 ? "show-content" : "tabscontentspremium"}> Shops</div>
                <div className={toggle === 16 ? "show-content" : "tabscontentspremium"}> Schools</div>
              
        </div>
       
      </div>        
      </div>
    )

}