import './App.css';
import { Link } from "react-router-dom";
import Nav from './components/Nav'



function App() {
  return (
    <div className="App">
        <Nav />
        <Link to="./pages/drink"><button>Drink page working link</button></Link>
       
    </div>
  );
}

export default App;
