import React from "react"
import Button from "../Button"

import "./newsletter.scss"

const NewsLetter = () => {
  return (
    <div className="section__padding newsletter__container">
      <div className="newsletter__content">
        <h2>Subscribe to Newsletter</h2>
        <p>We have a wide experience in experience design and strategy,</p>
        <div>
          <input type="email" placeholder="Enter your email address" />
          <Button title="Send Now" />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
