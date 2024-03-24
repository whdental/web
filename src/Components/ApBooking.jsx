import React from "react";
import { HashLink } from "react-router-hash-link";
const apBooking = () => {
  return (
    <>
      <HashLink
        to="/dental-clinic/slot"
        className="sticky_container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
          height: "67px",
          position: "fixed",
          zIndex: "100",
          background: "#67b745",
          bottom: "0",
          textDecoration: "none",
        }}
      >
        <h3 className='phoneNumber' style={{ color: "#fff", fontSize: "25px" }}>
          <span class="material-symbols-outlined">call </span><span>
            01429 820308
          </span>
        </h3>
      </HashLink>
    </>
  );
};

export default apBooking;
