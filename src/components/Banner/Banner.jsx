//import du css
import React from "react";
import "../Banner/Banner.scss";

//Création du HTML avec les propriétés requises pour le composant (voir FIGMA)
const Banner = ({ src, title, alt }) => {
    return (
        <section className="banner">
            <div className="container" >
                <img src={src} alt={alt} />
                <h1 className="title">{title}</h1>
            </div>
        </section>
    )
}

export default Banner;
