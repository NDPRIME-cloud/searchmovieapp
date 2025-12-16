import FrontPage from "./components/FrontPage"
import React from 'react'

import { Routes,Route } from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import MoviInfo from "./components/MoviInfo";


function App() {


  return(
    <div>
      <Routes>

        <Route path="/" element={<FrontPage/>}/>
        <Route path="/info" element={<MoviInfo/>}/>



      </Routes>
      

    </div>
  )
}

export default App