import React from "react";
import { NavLink } from "react-router-dom";
import "../Error/Error.scss";

const Error = () => {
    return (
        <div className="errorContainer">
            <div className="errorTitle">404</div>
            <div className="errorText">Oups! La page que vous demandez n'existe pas.</div>
            <NavLink to="/" className="errorLink">Retourner sur la page d’accueil</NavLink>
        </div>
    )

}

export default Error