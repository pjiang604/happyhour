import { Outlet, Link } from "react-router-dom";

const List = () => {
  return (
    <>
    <h2>this is on the list page</h2>

      <Outlet />
    </>
  )
};

export default List;