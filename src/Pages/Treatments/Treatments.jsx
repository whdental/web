import React from "react";
import "./Treatment.css";
import { useParams } from "react-router-dom";
import ServiceData from "../ServiceData";
import { Fieldset } from 'primereact/fieldset';

export default function Treatments() {
  const { id } = useParams();
  const service = ServiceData[parseInt(id)];

  return (
    <div className="treatments">
      <div className="servicePanel" >
        <div className="servicePanelleft" >
        <Fieldset legend={service.title} className="fieldset" >
        <p className="serviceDesc" dangerouslySetInnerHTML={{ __html: service.description2 }}></p>
        </Fieldset>
        </div>
        <div className="servicePanelright">
          {
            service.image1?.map((img,index)=>(
              <img key={index} src={img} alt="na" height={'180px'} width={'180px'}/>)
            )
          }
        </div>
      </div>
    </div>
  );
}
