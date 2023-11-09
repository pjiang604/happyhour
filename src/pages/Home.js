import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <h2>this is on the home page</h2>

      <Outlet />
    </>
  )
};

export default Home;