import React from "react";
import {Navigate, useParams} from "react-router-dom";
import api from "../../api.json";
import Collapse from "../../components/Collapse/Collapse";
import "../Lodging/Lodging.scss";
import LodgingsDetails from "../../components/LodgingsDetails/LodgingsDetails";
import SlideShow from "../../components/SlideShow/SlideShow";

const Lodging = () => {

    //Récupérer la fiche correspondante en créant une nouvelle route à partier de l'URL actuel
    const lodgingId = useParams();
    console.log(lodgingId);
    //On récupère les données de l'appartement selectionné en vérifiant que l'ID selectionné correspond à la fiche récupérée
    const lodging = api.find((ficheLodging) => ficheLodging.id === lodgingId.id);
    console.log(lodging)

    return (
        <>
            {lodging ? ( //S'il n'y a pas d'erreur, alors on affiche le contenu de la page
                <div className="ficheContainer">
                    <SlideShow key={lodging.pictures} images={lodging.pictures}/>
                    <LodgingsDetails key={lodging.title} details={lodging}/>
                    <div className="collapseLodging">
                        <Collapse key={lodging.description} title="Description" text={lodging.description}/>
                        <Collapse key={lodging.equipments} title="Equipments"
                                  text={lodging.equipments.map((infos, index) => (
                                      <div key={`${lodging.equipments}-${index}`}>{infos}</div>
                                  ))}
                        />
                    </div>
                </div>
            ) : (<Navigate replace to="/NotFound"/> //Sinon on renvoie l'utilisateur vers la page d'erreur
            )
            }
        </>
    )
}

export default Lodging;