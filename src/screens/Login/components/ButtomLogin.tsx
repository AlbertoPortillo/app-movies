import React from 'react'
import __buttom_img from '../../../style/imgs/boton.svg'
interface buttom_Type {
    click: any
}
export default function ButtomLogin({click}:buttom_Type) {
  return (
    <p className='login-buttom-body'>Crear cuenta</p>
  )
}
