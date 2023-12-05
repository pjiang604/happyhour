import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect, useContext } from "react";
import "./Drink.css"
import Notes from "../components/Notes";
import DrinkHero from '../assets/Hero/DrinkHero.png'
import { useLocation } from "react-router-dom";

import { InventoryContext } from "../data/inventoryContext";
import { nanoid } from "nanoid";
import Product from "../components/Note/Product";
import { categories } from "../data/categories";
import { filter, sort } from "../utils/helpers";
import Navbar from "../components/Nav";


const Drink = () => {

  const { addProduct, setEditing, updateProduct, deleteProduct, editing, products } =
    useContext(InventoryContext);
    
  const [data, setData] = useState();
  const [steps, setSteps] = useState([]);

  const location = useLocation();
  const { drinkId } = location.state || {};


  // const drinkId = location.state.drinkId;
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



  const [product, setProduct] = useState({
    name: '',
    time: new Date().toLocaleTimeString(),
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (editing === "new") {
      addProduct({
        ...product,
        id: nanoid(),
      });
    } else {
      updateProduct(product);
      console.log(editing)
    }
  }

  function handleInput(e, field) {
    setProduct({ ...product, [field]: e.target.value });
  }

  useEffect(() =>{
console.log("edit updated")
console.log(editing)
  }, [editing])



  //Local state for tracking filter and sorting selections
  const [filterSelection, setFilterSelection] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [inStockFilter, setInStockFilter] = useState(false);

  let displayedProducts = sort(products, sortOrder);
  displayedProducts = filter(displayedProducts, filterSelection, inStockFilter);

  return (
    <>
      <div>
        <div className="drinkDisplay">
          <Navbar />
          {
            data && data.drinks && data.drinks.map((a, value) => {
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
                        {a.strMeasure1 && <li>{a.strMeasure1} {a.strIngredient1}</li>}
                        {a.strMeasure2 && <li>{a.strMeasure2} {a.strIngredient2}</li>}
                        {a.strMeasure3 && <li>{a.strMeasure3} {a.strIngredient3}</li>}
                        {a.strMeasure4 && <li>{a.strMeasure4} {a.strIngredient4}</li>}
                        {a.strMeasure5 && <li>{a.strMeasure5} {a.strIngredient5}</li>}
                        {a.strMeasure6 && <li>{a.strMeasure6} {a.strIngredient6}</li>}
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
            <h1 className="note_title">Notes</h1>

            {!editing ? (
              <>
                <div className="products">
                  {products && products.length > 0 ? (
                    products.map((p) => (
                      <Product
                        key={p.id}
                        product={p}
                        setProduct={setProduct}
                        updateProduct={updateProduct}
                        deleteProduct={deleteProduct}
                        setEditing={setEditing} />
                    ))
                  ) : (
                    <p>No drink notes...yet!</p>
                  )}
                </div>
                <button
                  className="save-btn add-btn"
                  onClick={() => setEditing("new")}
                >
                  Add a Task!
                </button>
              </>
            ) : (


              <div className="add-form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <input
                      id="outlined-basic"
                      label="Your Task:"
                      variant="outlined"
                      fullWidth
                      color="success"
                      value={product.name}
                      onChange={(e) => handleInput(e, "name")}
                    />
                  </div>

                  <div className="form-btns">
                    <button
                      className="cancel-btn"
                      color="error"
                      onClick={() => setEditing(null)}
                    >
                      Cancel
                    </button>
                    <button className="save-btn" color="success" type="submit">
                      Add Task
                    </button>
                    {/* <Product
                    product={product}
                    setProduct={setProduct}
                    updateProduct={updateProduct}
                    deleteProduct={deleteProduct}
                    setEditing={setEditing} /> */}
                  </div>
                  <p value={product.time}>Time Created: {product.time}</p>
                </form>
              </div>
            )}

          </div>

        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
};

export default Drink;

