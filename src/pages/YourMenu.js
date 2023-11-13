import { Outlet, Link } from "react-router-dom";
import Hero from "../assets/Hero/Hero.png"
import Coctail from "../assets/Coctail/Drink.png"
import Navbar from "../components/Nav";
import "./YourMenu.css"
import Footer from "../components/Footer";

const List = () => {
  return (
    <>
    <div className="menu_container">
    <h2>this is on the list page</h2>
    
    
    {/* <Navbar/> */}
   
    

      {/* <Outlet /> */}
      <div className="image">
      <img src={Hero} className="menuhero" ></img>

      </div>
      
      <div className="coctail_contailer">
      
          <img src={Coctail} className="drink_image"></img>
        
      
      
      <img src={Coctail} className="drink_image"></img>
      <img src={Coctail} className="drink_image"></img>
      <img src={Coctail} className="drink_image"></img>
      <img src={Coctail} className="drink_image"></img>
      <img src={Coctail} className="drink_image"></img>
      </div>
      <Footer/>
      </div>
      
    </>
  )
};

export default List;