import { Link } from 'react-router-dom';
import Hearth from '../../assets/Hearth/HearthStroke.png'
import HearthStroke from '../../assets/Hearth/HearthStroke.png'
import "./styles.css"
import { useState } from 'react';
import React from 'react';
export default function HearthButton() {
    const [isHeartStroke, setHeartStroke] = useState(false);
    function ChangeIcon() {
       
        setHeartStroke(!isHeartStroke)
    }
    return(
        <>
          <Link to={`./pages/YourMenu`} >
          <button onChange={ChangeIcon} className='HeartContainer'>
        <img src={isHeartStroke ? HearthStroke : Hearth} className='Hearth' alt="Homepage Hero"/>

        </button>
        </Link>
        </>
    )
}