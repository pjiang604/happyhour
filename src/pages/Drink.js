import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "./Drink.css"
import Notes from "../components/Notes";
import DrinkHero from '../assets/Hero/DrinkHero.png'


const Drink = () => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const location = useLocation();
  const [steps, setSteps] = useState([]);

  const drinkId = location.state.drinkId;
  const API_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json()) // converts the data to a JSON file
      .then(response => {
        setData(response); // the data is now stored in the useState
        console.log(data);
        return response.drinks[0].strInstructions;
      })
      .then(recipeStr => {
        const recipeSplit = recipeStr.split('. ');
        setSteps(recipeSplit);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <div className="drinkDisplay">
          {
            data && data.drinks.map((a, value) => {
              return (
                <div key={value} className="drinkContainer">
                  <div className="drinkHeroSection">
                    <img src={DrinkHero} className="drinkHeroImg" alt="hero image" />
                    <h2 className="drinkName">{a.strDrink}</h2>
                  </div>
                  <div className="drinkInfo">
                    <div className="drinkLeft">
                      <img src={a.strDrinkThumb} className="drinkPageImg" alt={a.strDrink} />
                    </div>
                    <div className="drinkRight">
                      <h3>Ingredients</h3>
                      <ul className="ingredientsList">
                        { a.strMeasure1 && <li>{a.strMeasure1} {a.strIngredient1}</li>}
                        { a.strMeasure2 &&<li>{a.strMeasure2} {a.strIngredient2}</li> }
                       { a.strMeasure3 && <li>{a.strMeasure3} {a.strIngredient3}</li> }
                       { a.strMeasure4 && <li>{a.strMeasure4} {a.strIngredient4}</li> }
                       { a.strMeasure5 &&<li>{a.strMeasure5} {a.strIngredient5}</li> }
                       { a.strMeasure6 &&<li>{a.strMeasure6} {a.strIngredient6}</li> }
                      </ul>
                      <h3>Instructions</h3>
                      <ol className="instructions">
                        {steps.map((step, index) => (
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                      <p>Serve: {a.strGlass}</p>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
          <div className="notes">
            <h1>Notes</h1>
            <Notes />
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
};

export default Drink;

