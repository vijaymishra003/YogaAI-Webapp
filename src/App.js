import React from 'react'
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Yoga from './pages/Yoga/Yoga'

import ScrollButton from './components/ScrollButton/ScrollButton';

import './App.css'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/start' element={<Yoga />} />
      </Routes>
      <Fragment>
      <ScrollButton />
    </Fragment>
    </Router>
  )
}