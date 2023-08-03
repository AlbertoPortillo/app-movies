import React from 'react'
interface buttom_Type {
    click: (e:React.MouseEvent<HTMLElement>)=>void
    disabled: boolean
}
export default function ButtomLogin({click, disabled = true}:buttom_Type) {
  return (
    // <p onClick={click} className='login-buttom-body'>Crear cuenta</p>
    <input type="button" disabled={disabled} value="Crear cuenta" className='login-buttom-body' onClick={click} />
  )
}
