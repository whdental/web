import React from "react";
import "./Home.css";
import "font-awesome/css/font-awesome.min.css";
import { HashLink } from "react-router-hash-link";
import slide1 from "../assets/slide_1.jpg";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="slider_container">
          <div className="slider-images">
            <div className="slider_image">
              <img
                className="mainImage"
                src={slide1}
                data-aos="fade-down"
                alt=""
              />
            </div>

            <div className="front_container">
              <div className="front_page_info">
                <h2
                  style={{
                    margin: "0",
                    textAlign: "left",
                    lineHeight: "1.2",
                    color: "hsl(218, 70%, 18%);",
                  }}
                >
                  We love our job.
                  <br />
                  It pays us with trust and smiles.
                </h2>
                <p>We believe that beautiful smile brings confidence</p>
              </div>
            </div>
          </div>
          {/* <div className="slider_controls">
            <div className="circle_dot_class">
              <span></span>
            </div>
            <div className="circle_dot_class">
              <span></span>
            </div>
            <div className="circle_dot_class">
              <span></span>
            </div>
          </div> */}
        </div>

        <div className="clinic_container">
          <div className="clinic_info">
            <div className="basic_info" id="info_01">
              <h2>In an emergency? Need help now?</h2>
              <p>
                Please feel free to reach us anytime. We are happy to help you.
              </p>

              <HashLink
                to={"/"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn">
                  <h4 className="phoneNumber">
                    <i className="material-symbols-outlined">call </i>
                    <span>01429 820308</span>
                    <span></span>
                  </h4>
                </div>
              </HashLink>
            </div>
            <div className="basic_info" id="info_02">
              <h2>Are you looking to improve your oral health and smile?</h2>
              <p>There's no better option than INVISALIGN</p>
              <div className="button-container">
                <HashLink
                  to={"/invisalign"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <div className="transperent_btn">Read More</div>
                </HashLink>
              </div>
            </div>
            <div className="basic_info" id="info_03">
              <h2>Opening Hours</h2>
              <p>Monday – Friday : 09.00 AM – 05.00 PM</p>

              <HashLink
                to={"/#contact-us"}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <div className="transperent_btn" id="tr_btn_01">
                  Book An Appointment
                </div>
              </HashLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
