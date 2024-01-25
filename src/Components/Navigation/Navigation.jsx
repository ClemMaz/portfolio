//// Importe la bibliothèque React, qui est nécessaire pour créer des composants React.
import React from "react";
// Outlet est utilisé pour afficher le contenu des routes parentes dans les routes enfants.
import { Outlet } from "react-router-dom";
//// Importe les composants Header et Footer depuis les fichiers spécifiés.
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Navigation() {
  return (
    <>
      <Header />
      {/*Le composant Outlet est rendu, qui est utilisé pour afficher le contenu dynamique de l'itinéraire actuel.*/}
      <Outlet />
      <Footer />
      {/*La syntaxe <>...</> est utilisée pour englober plusieurs éléments sans ajouter de nœud DOM supplémentaire. Cela permet de retourner plusieurs éléments adjacents sans avoir à créer un conteneur div supplémentaire.*/}
    </>
  );
}

export default Navigation;
