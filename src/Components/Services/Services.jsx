import React from "react";
import "./Services.css";
import service1 from "../../assets/p1.jpg";
import service2 from "../../assets/program-2.png";
import service3 from "../../assets/program-3.png";
import icon1 from "../../assets/program-icon-1.png";
import icon2 from "../../assets/program-icon-2.png";
import icon3 from "../../assets/program-icon-3.png";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <h4 className="name"> Flight Booking</h4>

        {/* <img src={service1} alt="" /> */}
        <div className="caption">
          {/* <img src={icon1} alt="" /> */}
          <p>
            We handle all aspects of travel logistics, including booking
            flights, hotels, and transportation, to provide convenient and
            cost-effective options.s{" "}
          </p>
        </div>
      </div>
      <div className="service">
        <h4 className="name">Travel Insurance</h4>
        {/* <img src={service2} alt="" /> */}

        <div className="caption">
          {/* <img src={icon2} alt="" /> */}
          <p>
            We provide clients with travel insurance options to safeguard
            against unexpected events, ensuring peace of mind during their
            journeys.
          </p>
        </div>
      </div>
      <div className="service">
        <h4 className="name">Hajj/Ummrah </h4>

        {/* <img src={service3} alt="" /> */}
        <div className="caption">
          {/* <img src={icon3} alt="" /> */}
          <p>
            We also specialize in booking flights for hajj and ummrah services.
            We source for the right and most affordable flights for the journey.
          </p>
        </div>
      </div>
      <div className="service">
        <h4 className="name">Customized Travel Itineraries</h4>

        {/* <img src={service1} alt="" /> */}
        <div className="caption">
          {/* <img src={icon1} alt="" /> */}
          <p>
            We craft personalized itineraries that cater to individual
            preferences, ensuring each trip is tailored to our clients'
            interests and needs.
          </p>
        </div>
      </div>{" "}
      <div className="service">
        <h4 className="name">Tour Packages</h4>

        {/* <img src={service1} alt="" /> */}
        <div className="caption">
          {/* <img src={icon1} alt="" /> */}
          <p>
            Our team organizes exciting excursions, tours, and activities,
            allowing travelers to explore local culture and attractions in
            depth.
          </p>
        </div>
      </div>{" "}
      <div className="service">
        <h4 className="name">24/7 customer support</h4>

        {/* <img src={service1} alt="" /> */}
        <div className="caption">
          {/* <img src={icon1} alt="" /> */}
          <p>
            Our dedicated customer support team is available around the clock to
            assist travelers with any inquiries or emergencies during their
            trips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
