import '../Filter/style.css'
import IngredientBtn from '../Ingredient'

export default function Filter() {
    return (
        <div className="filterContainer">
            <div className="inputContainer">
                <div className='input'>
                    <p>find your next drink</p>
                    <input
                        name="freeInput"
                        placeholder='enter a drink name or ingredient'
                        className="freeInput inputStyling"
                    />
                </div>

                <select
                    className="selectContainer inputStyling">
                    <option value="default">select a category</option>
                    <option value="ordinaryDrink">ordinary drink</option>
                    <option value="cocktail">cocktail</option>
                    <option value="shake">shake</option>
                    <option value="cocoa">cocoa</option>
                    <option value="shot">shot</option>
                    <option value="coffeeTea">coffee / tea</option>
                    <option value="homemadeLiqueur">homemade liqueur</option>
                    <option value="punch">punch / party drink</option>
                    <option value="beer">beer</option>
                    <option value="softDrink">soft drink</option>
                    <option value="other">other / unknown</option>
                </select>

            </div>
            <div className='quickIngredient'>
                <IngredientBtn name="gin"/>
                <IngredientBtn name="champagne"/>
                <IngredientBtn name="tequila"/>
                <IngredientBtn name="vodka"/>
                <IngredientBtn name="rum"/>
                <IngredientBtn name="gin"/>

            </div>

        </div>
    )
}
