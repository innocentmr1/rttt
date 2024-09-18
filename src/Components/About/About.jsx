import React from "react";
import "./About.css";
import about_img from "../../assets/p6.jpg";
import profile from "../../assets/play-icon.png";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        {/* <img src={play_img} alt="" className="play-img" /> */}
      </div>
      <div className="about-right">
        <h3>About Company</h3>
        <h2>Commitment to Sustainability </h2>
        <p>
          Round trip is a newly established travel agency dedicated to crafting
          unforgettable travel experiences for adventurers, families, and
          couples alike. Founded in 2023, we are passionate about exploring the
          world and connecting our clients with the destinations of their
          dreams. Our company’s speciality is in ticket reservations and travel
          consultations. Our mission is to ease travel and provide the
          appropriate service soothing a client’s needs. Round Trip Travel and
          Tour is a professional travel and tour agency with RC: 7225597, we are
          a member and regulated by National Association of Nigeria Travel
          Agencies (NANTA), this association regulates and promotes travel and
          tours in Nigeria.
          {/* We are a travel management firm established and
          managed by experienced professionals who carefully interpret and
          explain travel information to clients. */}
          {/*  RTTT every day mantra
          are punctuality, availability and integrity... */}
          {/* Round Trip Travel & Tour is here to provide travel
          solution to clients, irrespective of their status. The challenge that
          stranded travelers encounter in the airport is one of the motive
          behind the establishment of this agency. At RTTT we will make sure all
          that is a thing of the past for our clients. We provide a range of
          corporate, leisure travel and Hajji & Umurah services. We offer
          distinct services to business, group and leisure travellers there by
          making the journey as enjoyable as it should be. We offer flexible and
          promotional, we advise travelers based the rules of their preferred
          class of tickets in order to avoid dissatisfaction. Round Trip Travel
          & Tour Ltd is committed to customer satisfaction. */}
        </p>
        <a download="" href={profile} className="btn">
          Download Company Profile
        </a>
      </div>
    </div>
  );
};

export default About;
