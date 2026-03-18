import React from 'react';
import Navbar from "./Navbar"
import Introduction from "./Introduction"
import Qualification from "./Qualification"
import AboutMe from "./AboutMe"
import Experience from "./Experience"
import Contact from './Contact'
import Skills from './Skills'
import '../style/App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div id="Introduction"><Introduction/></div>
      <div id="AboutMe"><AboutMe/></div>
      <div id="Skills"><Skills/></div>
      <div id="Qualification"><Qualification/></div>
      <div id="Experience"><Experience/></div>
      <div id='Contact'><Contact /></div>
    </div>
  )
}

export default App
