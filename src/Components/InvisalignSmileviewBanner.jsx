import React from "react";
import QRCode from "react-qr-code";
import roundSvg from "../assets/svg/arrowRounded.svg";
import invisalignLogo from "../assets/svg/invisalign_logo.svg";
import "./InvisalignSmileviewBanner.css";
import dentalbanner from "../assets/dentalbanner.png";

function InvisalignSmileviewBanner() {
  const QR_LINK = "https://www.invisalign.co.uk/SV/907403";

  return (
    <div className="InvisalignBanner">
      <div className="InvisalignContainer">
        <div className="InvisalignChild">
          <h1>
            You're
            <span style={{ color: "#01a3cf" }}> 60 seconds </span>
            away from Discovering Your new Smile
          </h1>
          <div className="invisalignImage">
            <img alt="bannerimg" src={dentalbanner} />
          </div>
          <div className="invisalignQR">
            <QRCode
              style={{ height: "auto", padding: "2rem" }}
              value={QR_LINK}
            />
            <h4 style={{ width: "90%" }}>
              Scan the QR Code With Your Phone Camera To Get Started.
            </h4>
          </div>
        </div>
        <div className="invisalignfooterContainter">
          <div className="invisalignfooter">
            <img
              alt="notfound"
              style={{ padding: "6px" }}
              width={35}
              src={roundSvg}
            />
            <h2 style={{ color: "#bf1d84" }}>
              Try the Invisalign SmileView* tool While you wait
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <img alt="notfound" src={invisalignLogo} width={100} />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nobis
            consequuntur laboriosam alias accusamus architecto sit accusantium
            nostrum ullam, odit voluptate? Dicta sunt dolores, recusandae quia
            vel nemo atque quaerat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvisalignSmileviewBanner;
