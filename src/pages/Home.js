import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <h2>this is on the home page</h2>

      <Outlet />
      <Footer/>
    </>
  )
};

export default Home;