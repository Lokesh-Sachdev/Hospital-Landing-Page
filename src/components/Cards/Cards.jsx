import React from "react"
import { Card } from "react-bootstrap"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

import "./card.scss"

const Cards = ({ title, subTitle, img, fw, icon }) => {
  const style = {
    fontWeight: fw || 700,
  }
  return (
    <Card>
      <div className="icon__box">{icon}</div>
      <Card.Body>
        <Card.Img variant="top" src={img} />
        <Card.Title style={style}>{title}</Card.Title>
        <div className="card__hidden-box">
          <p>LEARN MORE</p>
          <MdOutlineKeyboardArrowRight />
        </div>
        <p>{subTitle}</p>
      </Card.Body>
    </Card>
  )
}

export default Cards
