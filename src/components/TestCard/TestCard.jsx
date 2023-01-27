import React from "react"
import { Card } from "react-bootstrap"
import { testIcon } from "../../images"

import "./testcard.scss"

const TestCard = ({ Reviews, Name, Company }) => {
  return (
    <div className="bg__img">
      <div className="testcard__container">
        <div className="testcard__content">
          <p className="testcard__reviews">{Reviews}</p>
          <div className="testcard__heading">
            <img src={testIcon} alt="Icon" />
            <div>
              <div className="testcard__name">{Name}</div>
              <p>{Company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestCard
