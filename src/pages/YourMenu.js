import Hero from "../assets/Hero/Hero.png"
import { Link } from "react-router-dom";
import HearthButton from "../components/Hearth";
import "./YourMenu.css"
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Drinks from "../components/Drinks";

const List = () => {


  const [data, setData] = useState();

  const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json()) //converts the data to json file
      .then(response => {
        console.log(response);
        setData(response); //the data is now stored in the useState
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div className="menu_container">
        {/* <Navbar/> */}



        {/* <Outlet /> */}
        <div className="image">
          <img src={Hero} className="menuhero" ></img>
        </div>
        <Drinks />

        <Footer />
      </div>

    </>
  )
};

export default List;