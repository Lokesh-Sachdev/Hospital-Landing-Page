import React from "react"
import { Nav } from "../../components"
import { facebook, google, twitter } from "../../images"

function getYear() {
  return new Date().getFullYear()
}

const Footer = () => {
  return (
    <footer style={{ background: "#ECF4FF" }}>
      <div className="section__padding">
        <Nav display="none" />
        <div className="d-flex gap-3">
          <img src={facebook} alt="facebook" />
          <img src={google} alt="google" />
          <img src={twitter} alt="twitter" />
        </div>
        <p>
          &copy;{getYear()} PodPayment - {getYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
