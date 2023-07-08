import React, {useState} from 'react';
import "../../style/login.css";

import { InputLogin } from './components/InputLogin';
import CheckLogin from './components/CheckLogin';
import ButtomLogin from './components/ButtomLogin';

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onClick(e: any){
    console.log("click")
  }

  return (
    <div className='login-body'>
      <h1 className='login-body-head text-header'>Login</h1>
      <p className='login-body-welcome text-normal'>¡Bienvenido!</p>
      <InputLogin type="text" name="username" value={username} change={setUsername} textLabel='Correo electronico de Dacodes' />
      <InputLogin type="text" name="password" value={password} change={setPassword} textLabel='Contraseña' />
      <CheckLogin />
      <ButtomLogin click={onClick} />
    </div>
  )
}
