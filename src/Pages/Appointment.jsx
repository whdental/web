import React from 'react';
import invisalignImg from './images/treatments/invisalignImg.png';
import { Fieldset } from 'primereact/fieldset';


export default function Appointment() {
    const Invisalign = "We also provide Invisalign which straightens the teeth. This treatment is not only discrete but comfortable using aligners. The number of aligners provided are tailored to your needs, these are changed at fortnightly intervals."
  return (
    <div>
      <div className="treatments">
      <div className="servicePanel" >
        <div className="servicePanelleft" >
        <Fieldset legend='Invisalign' className="fieldset" >
        <p className="serviceDesc">{Invisalign}</p>
        </Fieldset>
        </div>
        <div className="servicePanelright">
              <img src={invisalignImg} alt="na" />
        </div>
      </div>
    </div>
    </div>
  )
}
