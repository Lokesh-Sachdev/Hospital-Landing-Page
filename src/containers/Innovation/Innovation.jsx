import React from "react"
import { Button } from "../../components"
import Cards from "../../components/Cards/Cards"
import { ambulance, doctor_man, doctor_woman } from "../../images"

import "./innovation.scss"

const Innovation = () => {
  return (
    <div className="section__padding innovative__container">
      <div className="innovative__content flex">
        <h2 className="heading">Clinic With Innovative</h2>
        <p className="p__text">
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </p>
        <Button title="Learn More" />
      </div>
      <div className="cards__section">
        <Cards title="Qualified Doctors" fw="600" img={doctor_woman} />
        <Cards title="Emergency Care" fw="600" img={doctor_man} />
        <Cards title="24 Hours Service" fw="600" img={ambulance} />
      </div>
    </div>
  )
}

export default Innovation
