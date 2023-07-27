import React from 'react'
interface buttom_Type {
    click: (e:React.MouseEvent<HTMLElement>)=>void
}
export default function ButtomLogin({click}:buttom_Type) {
  return (
    <p onClick={click} className='login-buttom-body'>Crear cuenta</p>
  )
}
