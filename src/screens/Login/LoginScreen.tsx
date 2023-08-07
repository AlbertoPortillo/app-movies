import {useState, useEffect} from 'react';
import "../../style/login.css";
import { useNavigate } from 'react-router-dom';

import { InputLogin } from './components/InputLogin';
import CheckLogin from './components/CheckLogin';
import ButtomLogin from './components/ButtomLogin';

import { getMovieGuestSession } from '../../api/movieApi';

export const LoginScreen = () => {
  const navigate = useNavigate()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false)
  const [submit, setSubmit] = useState({
    "password": false,
    "username": false,
    "checkbox": false
  })
  
  useEffect(() => {
    validateForm()
  }, [username, password, terms ])
  
  function validateForm(){
    let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    var testing =  regex.test(username)    
    setSubmit({...submit, 
      username: testing, 
      password: 7 <= password.length, 
      checkbox: terms
    })

  }

  async function onClick(){
    const user = await getMovieGuestSession()
    if(user.guest_session_id){
      setTimeout(() => {
        navigate('/movies',{state: {
          token: user.guest_session_id,
          username: username,
          expires_at: user.expires_at
        }})
      });
      sessionStorage.setItem("token", user?.guest_session_id);
    }

  }

  const onChangeTerms = () => {
    setTerms(!terms)
  }

  return (
    <div className='login-body'>
      <h1 className='login-body-head text-header'>Login</h1>
      <p className='login-body-welcome text-normal'>¡Bienvenido!</p>
      <InputLogin type="text" name="username" value={username} change={setUsername} textLabel='Correo electronico de Dacodes' />
      <InputLogin type="text" name="password" value={password} change={setPassword} textLabel='Contraseña' />
      <CheckLogin onclickCheck={onChangeTerms}  />
      <ButtomLogin click={onClick} disabled={!submit.password || !submit.checkbox || !submit.username} />
    </div>
  )
}
