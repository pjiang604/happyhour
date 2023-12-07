import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HomeHero from "../components/HomeHero";
import "./Home.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const Home = () => {

  const navigate = useNavigate()


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

  //Search Bar
  const [searchOption, setSearchOption] = useState("");
  const [state, setState] = useState([]);
  const [answers, setAnswers] = useState({});

  function handleSearch(e) {
    let apiLink = "";
    if (e.target.value === '') {
      apiLink = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail'
    } else apiLink = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?s=${e.target.value}`
    fetch(apiLink)
      .then(response => response.json()) //converts the data to json file
      .then(response => {
        console.log(response);
        setData(response); //the data is now stored in the useState
      })
      .catch(err => {
        console.log(err);
      })
    setSearchOption(e.target.value);
  }

  function handleClick() {
    setState([...state, answers]);
    setAnswers({});
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setAnswers({ ...answers, [name]: value });
  }

  return (
    <>

      <HomeHero />
      <div className="contentContainer">
        <div className="filterContainer">
          <div className="inputContainer">
              <p>find your next drink</p>
              {/* <input
                  name="freeInput"
                  placeholder='enter a drink name or ingredient'
                  className="freeInput inputStyling"
                  onChange={handleChange}
                />
                <button type="submit" onClick={handleClick}>
                  Submit
                </button> */}

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

        <div className="drinkDisplayHome">
          {data && data.drinks.map((i, index) => {
            return (
              <div className="drinkContainerHome" key={index}>
                <Link
                  to={`/pages/drink/`}
                  state={{ drinkId: i.idDrink }}
                  onClick={() => navigate(`/pages/drink`, { state: { drinkId: i.idDrink } })}
                >

                  <div
                    className="drinkCard">
                    <img src={i.strDrinkThumb} className="drinkImg" alt={i.strDrink} />
                    <p>{i.strDrink}</p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div >


    </>
  )
};

export default Home;