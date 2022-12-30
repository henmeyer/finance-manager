import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to={"/"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/money-flow"}>Money Flow</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
