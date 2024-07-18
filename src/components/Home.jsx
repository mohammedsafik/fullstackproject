// import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./UserProfile"
import CalorieTracker from "./Progressbar"
import Watertracker from "./Watertracker"

const Home = () => {
  return (
    <>
    <Navbar/>
    <Card/>
    <Watertracker/>
    <CalorieTracker/> 
   
    </>
  )
}

export default Home