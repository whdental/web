import React from "react";
import "./Profile.css";
import { Carousel } from "primereact/carousel";
import staff1 from "./images/Staffs/image_5.png";
import staff2 from "./images/Staffs/image_6.png";
import staff3 from "./images/Staffs/image_4.jpeg";
import staff4 from "./images/Staffs/image_9.jpeg";
import staff5 from "./images/Staffs/image_2.jpeg";
import staff6 from "./images/Staffs/image_10.jpeg";
import staff8 from "./images/Staffs/image_3.jpeg";
import staff10 from "./images/Staffs/image_8.jpeg";
import staff11 from "./images/Staffs/image_11.png";
import staff12 from "./images/Staffs/image_12.png";
import staff13 from "./images/Staffs/Staff-7.jpeg";

const Profile = () => {
  const your_profile_details = [
    {
      id: 1,
      photo: staff1,
      name: "Mr. Keerthi Kumar Ujjini Basavaiah",
      GDC: 139219,
      occupation: "Principal Dentist",
    },
    {
      id: 2,
      photo: staff10,
      name: "Mrs. Alberta Marlene Da Cunha Ribeiro",
      GDC: 133895,
      occupation: "Associate Dentist",
    },
    {
      id: 3,
      photo: staff13,
      name: "Mr. Robson Chiremba",
      GDC: 318442,
      occupation: " Foundation Dentist",
    },
    {
      id: 4,
      photo: staff2,
      name: "Miss. Beverley Watson",
      GDC: 132997,
      occupation: "Practice Manager",
    },
    {
      id: 5,
      photo: staff12,
      name: "Miss. Charlotte Dickinson",
      GDC: 222039,
      occupation: "Dental Therapist and Hygienist",
    },
    {
      id: 6,
      photo: staff6,
      name: "Mrs. Shona Tilley",
      GDC: 110334,
      occupation: "Dental Nurse",
    },
    {
      id: 7,
      photo: staff4,
      name: "Mrs. Karen Thurlbeck",
      GDC: 199374,
      occupation: "Dental Nurse",
    },
    {
      id: 8,
      photo: staff5,
      name: "Miss. Ashleigh Rowell",
      GDC: 285099,
      occupation: "Dental Nurse",
    },
    {
      id: 9,
      photo: staff11,
      name: "Miss. Philipa Young",
      GDC: 285143,
      occupation: "Dental Nurse",
    },
    {
      id: 10,
      photo: staff3,
      name: "Miss. Megan Jones",
      occupation: "Trainee Dental Nurse",
    },
    /* {
      id: 11,
      photo: staff8,
      name: "Miss. Joanne Metcalfe",
      occupation: "Receptionist",
    }, */
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
          {profile.GDC && <h6 className="profile_GDC">GDC: {profile.GDC}</h6>}
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
