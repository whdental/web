import React from "react";
import styles from "./About.css";
// import { Link } from "react-router-dom";
import about_long_des_data from "./PagesData/AboutData";
const About = () => {
  return (
    <>
      <div
        className={styles.example}
        style={{ backgroundColor: "#fff" }}
        id="about-doctors"
      >
        {/* <div className="about_section_container">
          <h2 className="about_title">
            <span className="about_title_logo">
              <i class="fa-solid fa-angles-right"></i>
            </span>
            About US
          </h2>
          <div className="about_container">
            <div className="about_infos">
              <p className="about_short_descrp">
                We’re glad you hand your dental health concerns to our skilled
                hands.
              </p>
              <p className="about_long_descrp" dangerouslySetInnerHTML={{ __html: about_long_des_data.text }}></p>

              <div className="about_align_btn">
                <Link
                  to={"/dental-clinic/team"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <button className="more_info_btn">Read More</button>
                </Link>
              </div>
            </div>
            <div className="about_image">
              <img src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2154988.jpg" alt="about img" />
            </div>
          </div>
        </div> */}
      
      {/*  */}
      <div className="cointainer_about">
        <div className="about_us_main">
          <div className="about_us_con">
            <h2>
            <span>
              <i class="fa-solid fa-angles-right"></i>
            </span>
            About US
          </h2>
          </div>
          </div>
          <div className="about_para_details_img">
          <div className="about_points">
              <p className="about_short_descrp_main">
                We’re glad you hand your dental health concerns to our skilled
                hands.
              </p>
              <p className="about_long_descrp_main" dangerouslySetInnerHTML={{ __html: about_long_des_data.text }}></p>

              {/* <div className="about_align_btn">
                <Link
                  to={"/dental-clinic/team"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <button className="more_info_btn">Read More</button>
                </Link>
              </div> */}
            </div>
            <div className="about_img_in">
              <img  className="about_img" src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2154988.jpg" alt="about img" />
            </div>
          </div>
      </div>
      </div>
    </>
  );
};

export default About;
