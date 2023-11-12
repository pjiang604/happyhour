import '../Filter/style.css'

export default function Filter() {
    return (
        <div className="filterContainer">
            <div className="inputContainer">
                <div className='input'>
                    <p>find your next drink</p>
                    <input
                        name="freeInput"
                        placeholder='enter a drink name or ingredient'
                        className="freeInput"
                    />
                </div>

                <select
                className="selectContainer">
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
                <button className='ingredient'>gin</button>
                <button className='ingredient'>champagne</button>
                <button className='ingredient'>tequila</button>
                <button className='ingredient'>vodka</button>
                <button className='ingredient'>rum</button>
                <button className='ingredient'>whiskey</button>
            </div>

        </div>
    )
}