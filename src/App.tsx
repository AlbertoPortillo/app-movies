import React from 'react'
import './style/App.css';
import { LayoutMain } from './layout/LayoutMain'

import { LoginScreen } from './screens/Login/LoginScreen'
import { MovieScreen } from './screens/Movielist/MovieScreen';

function App() {

  return (
    <LayoutMain>
      {/* <LoginScreen/> */}
      <MovieScreen/>
    </LayoutMain>
  )
}

export default App
