import React from "react";
import "./Profile.css";
import { Carousel } from "primereact/carousel";
import staff1 from "./images/Staffs/image_5.png";
import staff2 from "./images/Staffs/image_6.png";
import staff3 from "./images/Staffs/image_4.jpeg";
import staff4 from "./images/Staffs/image_9.jpeg";
import staff5 from "./images/Staffs/image_2.jpeg";
import staff6 from "./images/Staffs/shona.jpeg";
import staff7 from "./images/Staffs/image_1.jpeg";
import staff8 from "./images/Staffs/image_3.jpeg";
import staff9 from "./images/Staffs/image_7.jpeg";
import staff10 from "./images/Staffs/image_8.jpeg";
import staff11 from "./images/Staffs/staff11.jpeg";

const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: staff1,
      name: "Mr. Keerthi Kumar Ujjini Basavaiah",
      occupation: "Principal Dentist",
    },
    {
      id: 2,
      photo: staff10,
      name: "Mrs. Alberta Marlene Da Cunha Ribeiro",
      occupation: "Associate Dentist",
    },
    {
      id: 3,
      photo: staff7,
      name: "Miss. Frances Poulter",
      occupation: "Foundation Dentist",
    },
    {
      id: 4,
      photo: staff2,
      name: "Miss. Beverley Watson",
      occupation: "Practice Manager",
    },
    {
      id: 5,
      photo: staff6,
      name: "Mrs. Shona Tilley",
      occupation: "Dental Nurse",
    },
    {
      id: 6,
      photo: staff4,
      name: "Mrs. Karen Thurlbeck",
      occupation: "Dental Nurse",
    },
    {
      id: 7,
      photo: staff5,
      name: "Miss. Ashleigh Rowell",
      occupation: "Dental Nurse",
    },
    {
      id: 8,
      photo: staff9,
      name: "Miss. Samantha Cook",
      occupation: "Dental Nurse",
    },
    {
      id: 9,
      photo: staff11,
      name: "Miss. Philipa Young",
      occupation: "Dental Nurse",
    },
    {
      id: 10,
      photo: staff3,
      name: "Miss. Megan Jones",
      occupation: "Trainee Dental Nurse",
    },
    {
      id: 11,
      photo: staff8,
      name: "Miss. Joanne Metcalfe",
      occupation: "Receptionist",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (profile) => {
    return (
      <div className="profile_details">
        <img
          src={profile.photo}
          alt="profile_image"
          className="profile_image"
        />
        <div className="profile_info">
          <h3 className="profile_name">{profile.name}</h3>
          <h4 className="profile_occupation">{profile.occupation}</h4>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="our-team">
        <div className="profile_section_container">
          <h2 className="services_header">
            <span>
              <i className="fa-solid fa-angles-right"></i>
            </span>
            Our Team Members
          </h2>
          <Carousel
            value={your_profile_details}
            itemTemplate={itemTemplate}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            autoplayInterval={3000}
            circular={true}
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
