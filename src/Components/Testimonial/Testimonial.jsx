import React, { useRef } from "react";
import "./Testimonial.css";
import next_btn from "../../assets/next-icon.png";
import back_btn from "../../assets/back-icon.png";
import user_1 from "../../assets/user1.png";
import user_2 from "../../assets/user1.png";
import user_3 from "../../assets/user1.png";
import user_4 from "../../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();

  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonial">
      <img src={next_btn} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_btn} alt="" className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>David Adebisi</h3>
                  <span>Ibadan,Nigeria</span>
                </div>
              </div>
              <p>
                I recently booked a trip to Europe through RTTT Agency, and I
                can't express how grateful I am for their travel insurance
                recommendation. As a first-time international traveler, I had my
                fair share of concerns, but the insurance provided by the agency
                truly gave me peace of mind.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Blessing Azuka</h3>
                  <span>New Orleans,USA</span>
                </div>
              </div>
              <p>
                My recent trip from New Orleans to Nigeria was nothing short of
                extraordinary, and I owe it all to RoundTrip travels. From the
                moment I booked my trip, the entire experience was seamless and
                well-organized.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mariam Nafiu</h3>
                  <span>Abuja,Nigeria</span>
                </div>
              </div>
              <p>
                "My pilgrimage to Mecca with RTTT was an extraordinary spiritual
                journey. From the moment we landed, everything was organized,
                from our accommodations to the guided tours of the holy
                sites.Thank you for helping make my Hajj journey so memorable."
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Ore Ade-Ajayi</h3>
                  <span>Lagos,Nigeria</span>
                </div>
              </div>
              <p>
                Our honeymoon from Lagos to the Maldives was a dream come true,
                thanks to RTTT. Every activity was thoughtfully planned,
                allowing us to enjoy a perfect blend of relaxation, adventure,
                and romance. We highly recommend this agency to couples looking
                for an unforgettable honeymoon experience!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mensah Essien </h3>
                  <span>Accra,Ghana</span>
                </div>
              </div>
              <p>
                The travel agency's website was user-friendly, allowing me to
                easily explore various packages. After a quick consultation with
                one of their agents, I decided on a 10-day cultural tour of
                Nigeria that included visits to Lagos, Abuja, and the beautiful
                region of the Niger Delta. The agent was knowledgeable,
                answering all my questions and tailoring the trip to fit my
                interests.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
