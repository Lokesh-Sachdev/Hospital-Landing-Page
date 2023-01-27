import React from "react"
import Cards from "../../components/Cards/Cards"
import { HumanBrain, Lungs, MedicalFile, Tooth } from "../../images"

const Services = () => {
  let cardList = [
    {
      title: "Dental Care",
      icon: <Tooth />,
    },
    {
      title: "Pulmonary",
      icon: <Lungs />,
    },
    {
      title: "Neurological",
      icon: <HumanBrain />,
    },
    {
      title: "Prediatrics",
      icon: <MedicalFile />,
    },
  ]

  return (
    <div className="section__padding">
      <div style={{ textAlign: "center" }}>
        <h2 className="heading">Our Services</h2>
        <p className="p__text" style={{ margin: "0 auto" }}>
          We provide the most full medical services, so every person could heave
          the oppurtunity to receive qualitative medical help.
        </p>
      </div>
      <div className="card__layout">
        {cardList.map((item, index) => (
          <Cards key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
    </div>
  )
}

export default Services
