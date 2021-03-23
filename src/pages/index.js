import React, { useState } from 'react'
import AboutSection from '../components/AboutSection';
import { aboutObjOne } from '../components/AboutSection/Data';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Navbar handleToggle={handleToggle} />
      <AboutSection {...aboutObjOne}/>
    </>
  )
}

export default Home
