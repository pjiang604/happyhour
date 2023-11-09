import { Outlet, Link } from "react-router-dom";

const Drink = () => {
  return (
    <>
    <h2>this is on the drinks page</h2>

      <Outlet />
    </>
  )
};

export default Drink;