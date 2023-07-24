//Import des bibliothèques React
import React from "react";
import { Routes, Route } from "react-router-dom";

//Import des 4 pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Lodging from "./Pages/Lodging/Lodging";
import NotFound from "./Pages/NotFound/NotFound";


//Création de la fonction Routing pour la gestion des routes de l'application
const Routing = () => {
  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/lodging/:id" element={<Lodging/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
  );

}

export default Routing;
