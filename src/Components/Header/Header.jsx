// Importation des modules React et useState depuis React, 
// ainsi que le fichier de styles "style.css" et le composant Link de React Router
import React, { useState } from "react";
import "./style.css";
import { Link } from 'react-router-dom';

// Définition de la composante Header
function Header() {
    //isOpen est la valeur actuelle de l'état. Elle est utilisée pour déterminer si le header est ouvert ou fermé.
    //setIsOpen est une fonction qui permet de mettre à jour cette valeur.
    //L'état  initial est false.
    const [isOpen, setIsOpen] = useState(false);

    //Cette fonction permet de gérer le basculement (toggle) d'un état dû à l'action utilisateur, ici un clic sur un bouton.
    //À chaque appel de cette fonction, la valeur de isOpen est inversée : si isOpen est true, après l'appel de handleToggle, il deviendra false et inversement.
    const handleToggle = () => {
      setIsOpen(!isOpen);
    }
    
    

//Si isOpen est true, la classe 'active' sera ajoutée à l'élément <nav>, sinon, aucune classe ne sera ajoutée. 
  return (
    <nav className={isOpen ? 'active' : ''}>
      <h1 className="principal">
        Clément Mazurkiewicz - <span>Développeur Web et Mobile</span>
      </h1>

      
{/*Si isOpen est true, la classe 'navUl' sera appliquée ; sinon, la classe 'navOpen navUl' sera appliquée.*/}
      <ul className={isOpen ? 'navUl' : 'navOpen navUl'}>
      <li>
      <Link to="http://localhost:3000/home">Home</Link> 
      </li>
      <li>
      <Link to="http://localhost:3000/competences">Compétences</Link> 
      </li>

      <li>
      <Link to="http://localhost:3000/portfolio">Portfolio</Link>  
      </li>      
        <li>
        <Link to="http://localhost:3000/contact">Contact</Link> 
        </li>
      </ul>
      {/*cette ligne crée un élément <div> avec une classe CSS 'burger' et spécifie que la fonction handleToggle doit être appelée lorsque l'utilisateur clique sur cet élément.*/}
      <div className="burger" onClick={handleToggle}>
        
      </div>
    </nav>
  );
}

export default Header;
