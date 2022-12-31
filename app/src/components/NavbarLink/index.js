import { NavLink } from "react-router-dom";
import "./style.css";


const NavbarLink = ({ to, linkName }) => {
  return (
    <NavLink className="links" to={to}>
      {linkName}
    </NavLink>
  );
};

export default NavbarLink;
