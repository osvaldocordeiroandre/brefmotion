import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home/Home'
import Erro from '../Pages/Error/Erro'

export default function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='*' element={<Erro />} />
        </Routes>
    </BrowserRouter>
  )
}
