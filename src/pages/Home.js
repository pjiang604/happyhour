import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import "./Home.css"
import { useState, useEffect } from "react";

const Home = () => {

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
      <HomeHero />
      <div className="contentContainer">
        <div className="filterContainer">
          <p>This is where the drink filter buttons go</p>
        </div>

        <div className="drinkDisplay">
          {data && data.drinks.map((i, index) => {
            return (

                <div
                  className="drinkCard"
                  key={index}>
                  <img src={i.strDrinkThumb} className="drinkImg" alt={i.strDrink} />
                  {i.strDrink}
                </div>
            )
          })}
        </div>
      </div >

      <Footer />
    </>
  )
};

export default Home;