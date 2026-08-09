import { NavLink } from "react-router";

const Menu = () => {
    return (
        <div>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </div>
    );
};

export default Menu;
