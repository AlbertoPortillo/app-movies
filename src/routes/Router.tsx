import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { LoginScreen } from '../screens/Login/LoginScreen'
import { MovieScreen } from '../screens/Movielist/MovieScreen'

import PrivateRoute from './PrivateRoute'

export const RouterApp = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route element={<PrivateRoute />}>
                <Route path="/movies" element={<MovieScreen />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
