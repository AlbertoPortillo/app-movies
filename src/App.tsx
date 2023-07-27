import React from 'react'
import './style/App.css';
import { LayoutMain } from './layout/LayoutMain'

import { RouterApp } from './routes/Router';

function App() {

  return (
    <LayoutMain>
      <RouterApp />
    </LayoutMain>
  )
}

export default App
