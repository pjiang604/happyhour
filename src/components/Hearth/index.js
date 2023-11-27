
import Hearth from '../../assets/Hearth/HearthFill.png'
import HearthStroke from '../../assets/Hearth/HearthStroke.png'
import "./styles.css"
import { useState, useEffect } from 'react';
import React from 'react';



export default function HearthButton({ value }) {

    const [heartActive, setHeartActive] = useState(false);
    const [drink, setDrink] = useState(value)

    const items = { ...localStorage }; //retrieve all items from local storage

    const handleStorage = () => {
        setDrink(JSON.stringify(value))
        localStorage.setItem(`${value}`, drink)
        localStorage.setItem(`heart-${value}`, heartActive)
        console.log("stored drink ID" + drink)
    }

    const handleDelete = () => {
        localStorage.removeItem(`${value}`)
        localStorage.removeItem(`heart-${value}`, heartActive)
        console.log("deleted drink ID" + drink)

    }

    const ChangeIcon = () => {
        if(heartActive){
            setHeartActive(false)
        }else if (!heartActive ) {
            setHeartActive(true)
        }
        console.log(heartActive)
        console.log(items)

    }


    return (

        <div className="whiteCircle">
            <button type="button" onClick={() => {
                ChangeIcon();
                {
                    heartActive ?
                        handleDelete()
                        :
                        handleStorage()
                }
            }} className='HeartContainer' value={heartActive}>
                <img src={heartActive ? Hearth : HearthStroke} className='Hearth' alt="Homepage Hero" />

            </button>
        </div>

    )
}