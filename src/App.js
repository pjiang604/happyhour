import './App.css';
import { Link } from "react-router-dom";
import Nav from './components/Nav'



function App() {
  return (
    <div className="App">
        <Nav />
        <Link to="./pages/home"><button>Home</button></Link>
        <Link to="./pages/drink"><button>Drink</button></Link>
        <Link to="./pages/yourmenu"><button>Your Menu</button></Link>
       
    </div>
  );
}

export default App;
