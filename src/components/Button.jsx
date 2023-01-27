import React from "react"

const Button = ({ title, color, bg, border, mr }) => {
  const style = {
    minWidth: "170px",
    borderRadius: "25px",
    background: bg || "var(--color-btn-bg)",
    color: color || "#fff",
    border: border || "none",
    padding: "1rem 3rem",
    fontWeight: "700",
    marginRight: mr,
  }
  return <button style={style}>{title}</button>
}

export default Button
