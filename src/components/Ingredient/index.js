import '../Ingredient/style.css'
import { useState } from 'react'

export default function IngredientBtn({ name }) {

    const [pressed, setPressed] = useState(false)

    const changeColor = () => {
        setPressed(!pressed)
    }

    let btn_class = pressed ? "pressedBtn" : "outlineBtn" 

    return (
        <button 
        className={btn_class}
        onClick={changeColor}>
            {name}
        </button>
    )
}

