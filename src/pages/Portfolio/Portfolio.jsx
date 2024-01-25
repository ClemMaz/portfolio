// Importation des dépendances nécessaires depuis React
import React, { useState } from "react";
// Importation des styles CSS associés à cette composante
import "./style.css";

// Définition de la composante Portfolio
function Portfolio() {
  // État pour gérer la valeur de recherche
  // Valeur actuelle : search
  //Valeur SetSearch pour mettre à jour la valeur initiale
  //La valeur initiale de search est définie comme une chaîne de caractères vide 
  const [search, setSearch] = useState("");

  // Tableau de projets avec différentes propriétés
  const projects = [
    {
      id: 1,
      name: "API Pokemon",
      description: "Création d'une gallerie d'objet avec API.",
      image: "./media/pokemon.png",
      tag: "react js",
    },
    {
      id: 2,
      name: "Kasa",
      description: "Création d'un site de location de logement type air b'n'b",
      image: "./media/location logement.png",
      tag: "react js",
    },
    {
      id: 3,
      name: "Site Archi",
      description:
        "Création d'un site pour une architecte avec gallerie photo et logging",
      image: "./media/site archi.png",
      tag: "react js",
    },
    {
      id: 4,
      name: "Site e-commerce",
      description:
        "Création d'un site e-commerce type amazon avec card produits, barre de recherche et recherche par type de produits",
      image: "./media/site commerce.png",
      tag: "html + css",
    },

    {
      id: 5,
      name: "formulaire de contact",
      description: "Création d'un formulaire de contact",
      image: "./media/formulaire.jpeg",
      tag: "html + css",
    },

    {
      id: 6,
      name: "Site wordpress",
      description: "Création d'un site Wordpress vitrine",
      image: "./media/wordpress.png",
      tag: "wordpress",
    },
  ];
  // Filtre les projets en fonction du terme de recherche
  //La constante filteredProjects sera utilisée pour stocker le tableau filtré de projets.
  //projects correspond au tableau ci dessus.
  //la méthode 'filter' sur le tableau projects crée un nouveau tableau qui contient uniquement les éléments qui satisferont une condition spécifiée dans une fonction de rappel (callback).
  //project est une fonction de rappel qui est exécutée pour chaque élément du tableau. Elle prend un projet en tant que paramètre.
  const filteredProjects = projects.filter((project) => {
    //Accède à la propriété tag de l'objet project et convertit son contenu en minuscules à l'aide de la méthode toLowerCase() (insensible à la casse).
    //Convertit la variable search (le terme de recherche) en minuscules.
    //Vérifie si le terme de recherche converti en minuscules est inclus dans le contenu de la propriété tag convertie en minuscules. Si c'est le cas, la fonction retourne true, ce qui signifie que le projet sera inclus dans le tableau filtré.
    return project.tag.toLowerCase().includes(search.toLowerCase());
  });
  // Afficher les projets filtrés et la valeur de recherche dans la console
  console.log(filteredProjects);
  console.log(search);

  // État pour stocker le projet sélectionné

  const [selectedProject, setSelectedProject] = useState(null);

  // Fonction pour gérer le clic sur une carte de projet
  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  // Fonction pour fermer la popup
  const handleClose = () => {
    setSelectedProject(null);
  };
  // Rendu de la composante
  return (
    <div className="portfolioContainer">
      {/* Champ de recherche par tag */}
      <input
        type="text"
        placeholder="Rechercher par tag"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* Conteneur pour afficher les résultats de la recherche */}
      <div className="search-result">
        {/* Boucle sur les projets filtrés pour afficher des cartes de projet */}
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="card"
            //vonClick est utilisé pour définir une fonction à appeler lorsque l'utilisateur clique sur la carte.
            onClick={() => handleCardClick(project)}
          >
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.tag}</p>
          </div>
        ))}
      </div>
      {/*{projects.map((project) => (
        
     ))}*/}
      {/* Popup pour afficher les détails du projet sélectionné */}
      {selectedProject && (
        <div className="popup" onClick={handleClose}>
          <button className="closeButton" onClick={handleClose}>
            Fermer
          </button>

          <div className="card">
            <img src={selectedProject.image} alt={selectedProject.name} />
            <h2>{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
// Exportation de la composante Portfolio
export default Portfolio;
