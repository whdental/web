import image1 from "./images/newImages/VE9Bl101.svg";
import image2 from "./images/newImages/dental-img4.svg";
import image3 from "./images/newImages/dental-img5.svg";
import image4 from "./images/newImages/dental-img7.svg";
import image5 from "./images/newImages/dental-img3.svg";
import image6 from "./images/newImages/dental-img6.svg";
import treatmentPhoto1 from "./images/treatments/treatmentPhoto1.png";
// import treatmentPhoto2 from './images/treatments/treatmentPhoto2.png';
// import treatmentPhoto3 from './images/treatments/treatmentPhoto3.png';
// import treatmentPhoto4 from './images/treatments/treatmentPhoto4.png';
// import treatmentPhoto5 from './images/treatments/treatmentPhoto5.png';
import treatmentPhoto6 from "./images/treatments/treatmentPhoto6.png";
import treatmentPhoto7 from "./images/treatments/treatmentPhoto7.png";
import treatmentPhoto8 from "./images/treatments/treatmentPhoto8.png";
import treatmentPhoto9 from "./images/treatments/treatmentPhoto9.png";
import treatmentPhoto10 from "./images/treatments/treatmentPhoto10.png";
// import treatmentPhoto11 from './images/treatments/treatmentPhoto11.png';
// import treatmentPhoto12 from './images/treatments/treatmentPhoto12.png';
import treatmentPhoto13 from "./images/treatments/treatmentPhoto9.png";
import treatmentPhoto14 from "./images/treatments/treatmentPhoto14.png";
// import treatmentPhoto15 from "./images/treatments/treatmentPhoto15.png";
// import treatmentPhoto16 from "./images/treatments/treatmentPhoto16.png";
import treatmentPhoto17 from "./images/treatments/treatmentPhoto17.jpg";
import MixCollage1 from "./images/treatments/MixCollage1.jpg";
import MixCollage2 from "./images/treatments/MixCollage2.jpg";
import MixCollage3 from "./images/treatments/MixCollage3.jpg";

const ServiceData = [
  {
    id: 1,
    img_src: image1,
    title: "ALL CERAMIC BRIDGES",
    description:
      "The bridge is a fixed dental restoration technique which is used to replace a missing tooth or teeth by joining an artificial tooth permanently to adjacent teeth or to an adjacent tooth.",
    image1: [treatmentPhoto1, MixCollage1],
    description2: `<b>Dental Crowns</b> are tooth shaped restorations used to rebuild broken, decayed or damaged teeth. Crowns are also placed to improve the colour or shape of your existing teeth. Crowns are made from different materials like metal, ceramic or composite. Ceramic crowns are also used for aesthetic purposes. Crowns fit over the tooth or implant.
    <br/>
    <br/>
    <b>Dental Bridges</b> are a fixed dental restoration used to replace a missing tooth/teeth. Bridges are made by joining artificial teeth fixed to the adjacent natural tooth/teeth. Bridges are made from metal or ceramic.`,
  },
  {
    id: 2,
    img_src: image2,
    title: "DENTAL IMPLANTS",
    description:
      "If you have lost a tooth or several teeth due to an injury, dental implant service can help you. An artificial root can be placed into your jaw to hold a replacement tooth or bridge.",
    image1: [MixCollage2, treatmentPhoto6],
    description2: `<b>Dental Implants</b> are titanium screws that are precisely placed into your jaw to replace a missing tooth/teeth. Dental implants act as a tooth root on which a crown or a bridge is fitted to replace missing tooth/teeth.
    <br/>
    <br/>
    <b>Dental Implants</b>  can be used to replace a single missing tooth or to support a bridge to replace more than one missing teeth. Implants can also be used to support a long span bridge to replace full mouth bridges. Mini implants can be used to support dentures too.`,
  },
  {
    id: 3,
    img_src: image3,
    title: "CERAMIC VENEERS",
    description:
      "Transform your smile by opting for ceramic veneers which are custom designed for you. These are medical grade ceramic shells which will be attached to the front surface of the teeth.",
    image1: [treatmentPhoto7, treatmentPhoto8, treatmentPhoto9],
    description2: `<b>Ceramic Veneers</b> are ceramic shells which are fitted to the front of your teeth. Ceramic veneers are used to create a smile makeover using smile design technology. Veneers transform your teeth to the desired shape, position and colour. Veneers require minimal (if any) tooth preparation.`,
  },
  {
    id: 4,
    img_src: image4,
    title: "SMILE MAKEOVER",
    description:
      "Smile design services are offered to the patients who are primarily looking for improvement of dental aesthetics in terms of colour, position, shape, size, alignment and overall smile appearance.",
    image1: [treatmentPhoto10, MixCollage3],
    description2: `<b>Smile Makeover</b> is a process of improving the appearance of your smile through one or more cosmetic dental procedures, such as teeth straightening using Invisalign, Veneers, Composite Bonding, Implants/Whitening etc.`,
  },
  {
    id: 5,
    img_src: image5,
    title: "TOOTH WHITENING",
    description:
      "Are you looking to restore natural shade of teeth or even a step further? Tooth whitening is done basically by removing stains on the surface of teeth caused by beverages to give you tooth whitening beyond the natural shade.",
    image1: [treatmentPhoto13, treatmentPhoto14],
    description2: `<b>Tooth whitening</b> enhances your smile by lightening the shade of your natural teeth. We provide our patients with clinically proven products which are safe giving excellent results.
    <br/>
    <br/>
    We offer both home whitening and in-surgery whitening at our practice.`,
  },
  {
    id: 6,
    img_src: image6,
    title: "COMPOSITE BONDING",
    description:
      "This service is offered to restore fractured or decayed or broken teeth. This can also be used to cosmetically change the size, shape and color of the teeth to mimic the natural appearance of the teeth structure.",
    image1: [treatmentPhoto17],
    description2: `<b>Composite bonding</b> is a cosmetic dental treatment to enhance your smile with tooth coloured composite resin. Composite bonding is a simple and cost-effective treatment to improve your smile and change the shape and colour of your teeth. Composite bonding gives a natural appearance.`,
  },
];

export default ServiceData;
