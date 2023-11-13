import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "./Drink.css"
import Notes from "../components/Notes";


const Drink = () => {

  const [data, setData] = useState();

  const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json()) //converts the data to json file
      .then(response => {
        setData(response); //the data is now stored in the useState
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <div>
        <div className="drinkDisplay">
          {
            data && data.drinks.map((a, value) => {
              console.log(data);
              if (a.strDrink == "Applejack") {
                return (
                  <div key={value} className="drinkContainer">
                    <div className="drinkLeft">
                      <h2>{a.strDrink}</h2>
                      <img src={a.strDrinkThumb} className="drinkPageImg" alt={a.strDrink} />
                    </div>
                    <div className="drinkRight">
                      <h3>Ingredients</h3>
                      <ul className="ingredientsList">
                        <li>3/4 oz Sweet Vermouth</li>
                        <li>2 1/2 oz Blended Bourbon</li>
                        <li>dash Angostura bitters</li>
                        <li>1 Maraschino cherry</li>
                        <li>1 twist of Orange peel</li>
                        <li>Ice cubes</li>
                        </ul>
                      <h3>Instructions</h3>
                      <ol className="instructions">
                        <li>Rub the rim of the glass with the lime slice.</li>
                        <li>Outer rim and sprinkle the salt on it.</li>
                        <li>Never mix the salt into the cocktail.</li>
                        <li>Shake the other ingredients with ice.</li>
                        <li>Pour into the glass.</li>
                      </ol>
                      <p>Serve: Cocktail glass</p>
                    </div>
                  </div>
                )
              }
            })
          }
          <div className="notes">
                  <h1>Notes</h1>
                  <Notes/>
                  </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
};

export default Drink;