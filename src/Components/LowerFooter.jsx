import React from 'react';
import { HashLink } from 'react-router-hash-link';
import about_long_des_data from '../Pages/PagesData/AboutData';
import './LowerFooter.css';

function LowerFooter() {

  const nav_data = [
    { index: 1, link_to: '/#home', nav_name: 'Home' },
    { index: 2, link_to: '/#about-doctors', nav_name: 'About' },
    { index: 3, link_to: '/#our-services', nav_name: 'Treatments' },
    {
      index: 4,
      link_to: '/#our-team',
      nav_name: 'Our Team',
    },
    { index: 5, link_to: '/#contact-us', nav_name: 'Contact Us' },
  ];
  const contact_data = [
    {
      index: 1,
      title: 'Email:',
      cu_data: 'dentist@wheatleyhilldental.co.uk',
    },
    {
      index: 2,
      title: 'Phone:',
      cu_data: '01429 820308',
    },
  ];

  const contact_link = [
    {
      index: 1,
      img: <i class="fa-brands fa-facebook-f"></i>,
      on_link: 'https://www.facebook.com/wheatleyhillds',
    },
    {
      index: 2,
      img: <i class="fa-brands fa-instagram"></i>,
      on_link: 'https://www.instagram.com/wheatleyhilldental/',
    },
    // {
    //   index: 3,
    //   img: <i class="fa-brands fa-twitter"></i>,
    //   on_link: 'https://www.twitter.com/',
    // },
    // {
    //   index: 4,
    //   img: <i class="fa-sharp fa-solid fa-globe"></i>,
    //   on_link: 'https://www.facebook.com/wheatleyhillds',
    // },
  ];
  return (
    <>
      <div className="lower_outer_footer_container">
        <div className="about_us">
          <div className="wrapper_container_ab">
            <h2 style={{borderBottom :'2px solid white'}}>About Us</h2>
            <p className="about_long_descrp footer_long_descrp" dangerouslySetInnerHTML={{ __html: about_long_des_data.text }}>


            </p>
          </div>
        </div>
        <div className="footer_menu">
          <div className="wrapper_container_fm">
            <h2 style={{borderBottom :'2px solid white'}}>Footer Menu</h2>
            <div className="footer_data_menu">
              {nav_data.map((data, index) => {
                return (
                  <HashLink
                    className="nav_data"
                    key={index}
                    to={data.link_to}
                  >
                    {data.nav_name}
                  </HashLink>
                );
              })}
            </div>
          </div>
        </div>
        <div className="contact_us">
          <div className="wrapper_container_cu">
            <h2 style={{borderBottom :'2px solid white'}}>Contact Us</h2>
            <div
              className="contact_address"
            >
              <address>
              6 The Avenue, Wheatley Hill, Durham DH6 3NT
              </address>
            </div>
            <div className="contact_data">
              {contact_data.map((data, index) => {
                return (
                  <p
                    className="cs_data"
                    key={index}
                  >
                    <span style={{ color: '#301934' }}>{data.title} </span>
                    {data.cu_data}
                  </p>
                );
              })}
            </div>
            <div className="contact_links">
              {contact_link.map((data, index) => {
                return (
                  <a
                    className="contact_data_links"
                    key={index}
                    href={data.on_link}
                    target='blank'
                  >
                    {data.img}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LowerFooter;
