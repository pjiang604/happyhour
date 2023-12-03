import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import "./Home.css"
import { useState, useEffect } from "react";

import Hearth from '../components/Hearth/index'


const Home = () => {

  //API
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

  //Filter
  const [filter, setFilter] = useState([])

  const [pressedGin, setPressedGin] = useState(true)
  const [pressedChampagne, setPressedChampagne] = useState(true)
  const [pressedTequila, setPressedTequila] = useState(true)
  const [pressedVodka, setPressedVodka] = useState(true)
  const [pressedRum, setPressedRum] = useState(true)
  const [pressedFavourite, setPressedFavourite] = useState(true)

  const handleQuickIng = (e) => {
      if (e.target.name === "gin") {
        if(!pressedGin){
          filter.push(e.target.name)
          setPressedGin(!pressedGin);
        } else if (pressedGin){
          const index = filter.indexOf(e.target.name);
          const x = filter.splice(index, 1);
          console.log(`myArray values: ${filter}`);
          console.log(`variable x value: ${x}`);
          setPressedGin(!pressedGin);
        }

          console.log(pressedGin, e.target.name);
      } else if (e.target.name === "champagne") {
          setPressedChampagne(!pressedChampagne);
          filter.push(e.target.name)
          console.log(pressedChampagne, e.target.name);
      } else if (e.target.name === "tequila") {
          setPressedTequila(!pressedTequila);
          filter.push(e.target.name)
          console.log(pressedTequila, e.target.name);
      } else if (e.target.name === "vodka") {
          setPressedVodka(!pressedVodka);
          filter.push(e.target.name)
          console.log(pressedVodka, e.target.name);
      } else if (e.target.name === "rum") {
          setPressedRum(!pressedRum);
          filter.push(e.target.name)
          console.log(pressedRum, e.target.name);
      } else if (e.target.name === "favourite") {
          setPressedFavourite(!pressedFavourite);
          filter.push(e.target.name)
          console.log(pressedFavourite, e.target.name);

      } 
      console.log(filter)
  }

  let btn_class_gin = !pressedGin ? "pressedBtn" : "outlineBtn"
  let btn_class_champagne = !pressedChampagne ? "pressedBtn" : "outlineBtn"
  let btn_class_tequila = !pressedTequila ? "pressedBtn" : "outlineBtn"
  let btn_class_vodka = !pressedVodka ? "pressedBtn" : "outlineBtn"
  let btn_class_rum = !pressedRum ? "pressedBtn" : "outlineBtn"
  let btn_class_favourite = !pressedFavourite ? "pressedBtn" : "outlineBtn"

  //dropdown 
  const [categoryOption, setCategoryOption] = useState("");

  function handleFilter(e) {
    let apiLink = "";
    if (e.target.value === 'default') {
      apiLink = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
    } else apiLink = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${e.target.value}`
    fetch(apiLink)
      .then(response => response.json()) //converts the data to json file
      .then(response => {
        console.log(response);
        setData(response); //the data is now stored in the useState
      })
      .catch(err => {
        console.log(err);
      })
      setCategoryOption(e.target.value);
  }

  return (
    <>
      <HomeHero />
      <div className="contentContainer">
        <div className="filterContainer">
        <div className="filterContainer" >
            <div className="inputContainer">
                <div className='input'>
                    <p>find your next drink</p>
                    <input
                        name="freeInput"
                        placeholder='enter a drink name or ingredient'
                        className="freeInput inputStyling"
                    />
                </div>

                <select value={categoryOption} onChange={handleFilter}
                    className="selectContainer inputStyling">
                    <option value="default">select a category</option>
                    <option value="ordinary_drink">ordinary drink</option>
                    <option value="cocktail">cocktail</option>
                    <option value="shake">shake</option>
                    <option value="cocoa">cocoa</option>
                    <option value="shot">shot</option>
                    <option value="Coffee / Tea">coffee / tea</option>
                    <option value="homemade_Liqueur">homemade liqueur</option>
                    <option value="punch / party_drink">punch / party drink</option>
                    <option value="beer">beer</option>
                    <option value="soft_Drink">soft drink</option>
                    <option value="other / unknown">other / unknown</option>
                </select>

            </div>
            <div className='quickIngredient'>

                <button
                    className={btn_class_gin}
                    onClick={handleQuickIng}
                    value={pressedGin}
                    name="gin">
                    gin
                </button>
                <button
                    className={btn_class_champagne}
                    onClick={handleQuickIng}
                    value={pressedChampagne}
                    name="champagne">
                    champagne
                </button>
                <button
                    className={btn_class_tequila}
                    onClick={handleQuickIng}
                    value={pressedTequila}
                    name="tequila">
                    tequila
                </button>
                <button
                    className={btn_class_vodka}
                    onClick={handleQuickIng}
                    value={pressedVodka}
                    name="vodka">
                    vodka
                </button>
                <button
                    className={btn_class_rum}
                    onClick={handleQuickIng}
                    value={pressedRum}
                    name="rum">
                    rum
                </button>
            </div>
            <div className='favouritesContainer'>
                <button
                    className={btn_class_favourite}
                    onClick={handleQuickIng}
                    value={pressedFavourite}
                    name="favourite">
                    your favourites
                </button>
            </div>

        </div>
        </div>

        <div className="drinkDisplay">
          {data && data.drinks.map((i, index) => {
            return (
              <div className="drinkContainer" key={index}>
                <Link to={`./pages/drink`} state={{ drinkId: i.idDrink }}>
                  <div
                    className="drinkCard">
                    <img src={i.strDrinkThumb} className="drinkImg" alt={i.strDrink} />
                    {i.strDrink}
                  </div>
                </Link>
                <Hearth value={i.idDrink} />
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