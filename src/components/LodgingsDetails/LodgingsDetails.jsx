import React from "react";
import "../LodgingsDetails/LodgingsDetails.scss";
import emptyStar from "../../Images/empty-star.png";
import fullStar from "../../Images/full-star.png";

const LodgingsDetails = ({ details }) => {

    const scaleRating = details.rating
    console.log(details)

    //On créer un tableau pour ajouter une variable [i], pour faire correspondre la note de l'établissement avec la note dans le tableau
    const starRating = []

    for (let i = 1; i <= 5; i++) {
        starRating[i] = i <= scaleRating;
    }

    return (
        <div className="ficheDetails">
            <div className="detailsGauche">
                <div className="detailsTitre">
                    {details.title}
                </div>
                <div className="detailsLoc">
                    {details.location}
                </div>
                <div className="tags">
                    {details.tags?.map((tagsNumber) => (
                        <div className="tag" key={tagsNumber + details.id}>{tagsNumber}</div>
                    ))}
                </div>
            </div>
            <div className="detailsDroite">
                <div className="detailsHost">
                    <div className="hostName">
                        {details.host.name}
                    </div>
                    <div className="hostPicture">
                        <img src={details.host.picture} alt="profil du propriétaire" />
                    </div>
                </div>
                <div className="detailsRating">
                    {starRating?.map((starNumber, index) =>
                        <img src={starNumber ? fullStar : emptyStar} alt={starNumber ? "full star" : "empty star"} key={starNumber + details.id + index} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default LodgingsDetails