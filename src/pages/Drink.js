import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Drink = () => {
  return (
    <>
    <h2>this is on the drinks page</h2>

      <Outlet />
      <Footer/>
    </>
  )
};

export default Drink;