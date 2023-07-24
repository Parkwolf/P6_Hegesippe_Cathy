import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/kasa_red.png"
import "../Navbar/Navbar.scss";

const Navbar = () => {
    return (
        <header className="navbarHead">
            <img src={Logo} alt="Logo Kasa" />
            <nav className="navbarNav">
                <NavLink to="/" exact>Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Navbar; 