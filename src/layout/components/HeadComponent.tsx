import React from 'react'
import __user_icon from "../../style/imgs/user_icon.png";
import __dacodes_icon from "../../style/imgs/DacodesLogo.png";

export default function HeadComponent() {
  return (
    <div className='header dacodes_light_color' >
        <div className='header-dacodes-side'>
            <img src={__dacodes_icon} alt="" />
        </div>
        <div className='header-userIcon-side'>
            <img src={__user_icon} alt="" />
        </div>
    </div>
  )
}
