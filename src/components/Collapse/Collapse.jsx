import React from "react";
import { useState } from "react";
import icon from "../../Images/icon-collapse.png";
import "../Collapse/Collapse.scss";

const Collapse = ({ title, text }) => {
    const [isOpen, setOpen] = useState(false); //Création d'un hook d'état

    return isOpen ? (
        <div className="menu">
            <div className="title" onClick={() => setOpen(false)}>
                {title}
                <img className="iconOpen" src={icon} alt="icone menu ouvert" />
            </div>
            <div className="text">{text}</div>
        </div>
    ) : (
        <div className="menu">
            <div className="title" onClick={() => setOpen(true)}>
                {title}
                <img className="iconClose" src={icon} alt="icone menu fermé" />
            </div>
        </div>
    )
}

export default Collapse