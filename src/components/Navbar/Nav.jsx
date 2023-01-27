import * as React from "react"
import { Link } from "gatsby"
import { logo } from "../../images"
import Button from "../Button"

import "./nav.scss"
import { Navbar } from "react-bootstrap"

const Nav = ({ display }) => {
  const style = {
    display: display || "block",
  }
  return (
    <nav>
      <div className="pt-4">
        <img src={logo} alt="logo" />
      </div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="nav__items">
          <ul className="flex">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
          </ul>
          <div style={style}>
            <Button title="Contact" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default Nav
