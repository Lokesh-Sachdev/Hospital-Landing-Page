import React from "react"
import { Row } from "react-bootstrap"
import Cards from "../../components/Cards/Cards"
import { cardImg } from "../../images"

import "./specialist.scss"

const Specialist = () => {
  const cardList = [
    { title: "Dr. Awaatif Al", subTitle: "Dental Care" },
    { title: "Dr. Filipa Gaspar", subTitle: "Cardiology" },
    { title: "Dr. Sukhmeet Gorae", subTitle: "Neurological" },
    { title: "Dr. Siri Jakobsson", subTitle: "Prediatrics" },
  ]
  return (
    <div className="section__padding specialist__container">
      <div style={{ textAlign: "center" }}>
        <h2 className="heading">We Have The Best Specialist</h2>
        <p className="p__text" style={{ margin: "0 auto" }}>
          We have a wide experience in experience design and strategy, with
          locally-rooted knowledge.
        </p>
      </div>
      <div className="card__layout cards">
        {cardList.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            subTitle={item.subTitle}
            img={cardImg}
          />
        ))}
      </div>
    </div>
  )
}

export default Specialist
