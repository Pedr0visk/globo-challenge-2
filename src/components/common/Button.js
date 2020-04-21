import React from 'react'
import '../../assets/scss/Buttons.scss';

export default ({text, icon, classes}) => {
  return (
    <button className={classes}>
      {text}
      {icon}
    </button>
  )
}
