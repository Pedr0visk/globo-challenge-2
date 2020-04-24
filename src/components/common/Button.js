import React from 'react'

const Button = ({ text, icon, ...props }) => {
  return (
    <button {...props}>
      <span className="btn-label">
        <span className={(text && "btn-icon-left")}>{icon}</span>
        {text}
      </span>
    </button>
  )
}

export default Button;