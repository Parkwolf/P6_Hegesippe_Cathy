import React from 'react';
import { useState } from 'react'; //Import de la fonction de hook useState de React
import { Link } from 'react-router-dom';//Import de la dépendance pour le link
import Lodgings from "../../api.json";
import "../Card/Card.scss";

const Card = () => {
    //Déclaration d'une variable d'état pour récupérer les valeurs des logements
    const [lodgings] = useState(Lodgings)// hook use state

    return (
        <div className="cardBackground">
            {lodgings.map((lodging) => (  //fonction de boucle map sur react
                //on met un link pour la navigation et on récupère les différents élément pour chaque logements
                <Link to={`lodging/${lodging.id}`} key={lodging.id}>
                    <div key={lodging.id} className="cardContainer">
                        <img src={lodging.cover} alt={lodging.title} className="cover" />
                        <div className="cardTitle">{lodging.title}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}


export default Card