import NavbarLink from "../../components/NavbarLink";
import "./style.css";

const Navbar = () => {
  return (
    <div className="link-menu">
      <NavbarLink to={"/app"} linkName="Dashboard" />
      <NavbarLink to={"/app/money-flow"} linkName="Money Flow" />
    </div>
  );
};

export default Navbar;
