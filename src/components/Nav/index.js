import './style.css';
import { Link } from "react-router-dom";

export default function Navbar() {


    return (
        <div className="container">
            <Link to='/'>
            <div className="logo">
                <h1 className="logo-former">happy</h1>
                <h1 className="logo-latter">hour</h1>
            </div>
            </Link>

            {/* <div className="nav-links">
                <Link to="./">Home</Link>
            </div> */}
        </div>
    );
}
