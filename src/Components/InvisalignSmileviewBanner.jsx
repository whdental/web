import React from "react";
import QRCode from "react-qr-code";
import roundSvg from "../assets/svg/arrowRounded.svg";
import invisalignLogo from "../assets/svg/invisalign_logo.png";
import alignLogo from "../assets/svg/align_logo.png";
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div className="footer_content">
              <p>
                *Our smile Visualization tool is a computer generated of what
                your smile may look like after clear alignment.Actual result may
                vary.
              </p>
              <img src={alignLogo} alt="notfound" width={35} />
              <p>
                Align Technology Swizerland GmbH, Suurstoffi 22, 6343 Rockreuz,
                Switzerland.
              </p>
              <p>
                &copy; 2024 Align Technology,Inc.All Rights Reserved.Invisalign,
                ClinCheck and SmartTrack, among others,are trademarks and/or
                service marks of Align Technology, Inc.or one of its
                subsidiaries or affiliated companies and may be registered in
                the U.S, and/or other countries.217857 Rev A
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvisalignSmileviewBanner;
