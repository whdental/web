import React from "react";
import ServiceData from "./ServiceData";
import "./Services.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="our-services">
        <div className="services_container">
          <h2 className="services_header">
            <span>
              <i className="fa-solid fa-angles-right"></i>
            </span>
            Our Treatments
          </h2>
          <div className="service_info_container">
            {ServiceData.map((service, index) => (
              <div className="service_info" key={index}>
                <div className="service_image_details">
                  <img
                    className="service_img"
                    src={service.img_src}
                    alt="dental images"
                  />
                </div>
                <div className="service_description">
                  <h3 className="service_title">{service.title}</h3>
                  <p className="service_detail_info">{service.description}</p>
                  <div className="about_align_btn">
                    <Link
                      to={`/service/${index}`}
                      style={{ textDecoration: "none", color: "#fff" }}
                    >
                      <button className="more_info_btn">Read More</button>
                    </Link>
                  </div>
                  {/* <Link to={`/service/${index}`}>Read More</Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
