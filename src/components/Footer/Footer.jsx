import React from "react";
//import du css et du logo
import Logo from "../../Images/logo_footer.png"
import "../Footer/Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logo} alt="Logo Footer" />
            <p className="text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;