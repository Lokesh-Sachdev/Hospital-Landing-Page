import React from "react"
import { Button, Nav } from "../../components"
import { headerImg } from "../../images"

import "./header.scss"

const Header = () => {
  return (
    <div className="header section__padding">
      <Nav />
      <header>
        <div className="header__content flex">
          <h4 className="sub__heading">Welcome to MediCare+ Clinic</h4>
          <h1>Best Specialists</h1>
          <p className="p__text">
            We are on the leading edge of cancer care. Providing the full
            continuum of cancer treatments and supportive care services in a
            single convenient location.
          </p>
          <div className="header__btns">
            <Button title="Make an Appointment" mr="3rem" />
            <Button
              title="Departments"
              bg="#fff"
              color="#007DF2"
              border="1px solid var(--color-btn-bg)"
            />
          </div>
        </div>
        <div className="header__img">
          <img src={headerImg} alt="header" />
        </div>
      </header>
    </div>
  )
}

export default Header
