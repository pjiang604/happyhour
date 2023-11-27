import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import "./Home.css"
import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import HearthButton from "../components/Hearth";
import Drinks from "../components/Drinks";


const Home = () => {
  return (
    <>
      <HomeHero />
      <div className="contentContainer">
        <div className="filterContainer">
          <Filter />
        </div>

       <Drinks/>
      </div >

      <Footer />
    </>
  )
};

export default Home;