import React from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import img from "../../Images/img.png";

const Home = () => {
    return (
        <div>
            <Banner src={img} title={"Chez vous, partout et ailleurs"} alt="Photo d'une côte" />
            <Card />
        </div>
    )
};

export default Home;