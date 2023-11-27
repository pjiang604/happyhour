import '../Drinks/style.css'
import HearthButton from '../Hearth'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

export default function Drinks({value}) {

    const [data, setData] = useState();

    const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';

    const items = { ...localStorage }; //retrieve all items from local storage

    const hasValue = (items, values) => Object.values(items).includes(values);

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
        <div className="drinkDisplayContainer">
            {data && data.drinks.map((i, index) => {
                return (
                    <>
                        {
                            hasValue(items, i.idDrink) ? 
                            <div className="drinkContainer">
                                <Link to={`./pages/drink`} state={{ drinkId: i.idDrink }}>
                                    <div
                                        className="drinkCard"
                                        key={index}>
                                        <img src={i.strDrinkThumb} className="drinkImg" alt={i.strDrink} />
                                        {i.strDrink}
                                    </div>
                                </Link>
                                <HearthButton  />
                            </div>
                            :
                            null
                        }
                    </>

                )
            })}
        </div>
    )
}