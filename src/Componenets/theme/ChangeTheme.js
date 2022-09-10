import React from 'react'
import "./changetheme.css"

const ChangeTheme = () => {
  return (
    <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
  )
}

export default ChangeTheme