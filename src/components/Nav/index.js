import './style.css';
import { Link } from "react-router-dom";

export default function Navbar({ }) {


    return (
        <div className="container">
            <div className="logo">
                <h1 className="logo-former">happy</h1>
                <h1 className="logo-latter">hour</h1>
            </div>
            <div className="nav-links">
                <Link to="./pages/home">Home</Link>
                <Link to="./pages/YourDrinks">Your Menu</Link>
            </div>
        </div>
    );
}
