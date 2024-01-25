// Importation des hooks useState et useEffect de React,
// ainsi que des fonctions getCategories et getTechnos

import { useState, useEffect } from "react";
import { getCategories, getTechnos } from "../../data/data";
// Importation des styles CSS pour cette composante
import "./style.css";

// Définition de la composante Skills
export default function Skills() {
  // Chemin relatif vers les logos des compétences
  const pathlogo = "../../media/";
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [filteredTechnos, setFilteredTechnos] = useState([]);

  // Ce bloc de code s'exécute à chaque modification de `selectedCategory`
  useEffect(() => {
          // Si `selectedCategory` est nul, aucun filtre de catégorie n'est appliqué
    if (selectedCategory === null) {
      // On met à jour `filteredTechnos` avec la liste de technologies
      // et on réinitialise le nom de la catégorie sélectionnée
      setFilteredTechnos(getTechnos());
      setSelectedCategoryName("");
    } else {
      // Si `selectedCategory` n'est pas nul, on filtre les technologies en fonction de la catégorie sélectionnée
      // On utilise la fonction `getTechnos()` pour obtenir la liste complète de technologies
      // et on applique le filtre en ne gardant que celles qui ont la catégorie correspondante
      setFilteredTechnos(
        getTechnos().filter((lang) => lang.category === selectedCategory)
      );
      // On cherche le nom de la catégorie sélectionnée en utilisant son identifiant
      // On met à jour le nom de la catégorie sélectionnée
      const categoryName = getCategories().find(
        (cat) => cat.id === selectedCategory
      )?.name;
      setSelectedCategoryName(categoryName);
    }
  }, [selectedCategory]);

  const [nonTechSkills, setNonTechSkills] = useState([
    { id: 1, name: "Maitrise de l'écriture journalistique" },
    { id: 2, name: "gestion d'une campagne de communication" },
    { id: 3, name: "Psc1" },
  ]);

  const [hobbies, setHobbies] = useState([]);
  // Rendu de la composante
  return (
    <div className="skills">
      <div className="technosContainer">
        {/* Bouton pour afficher toutes les compétences techniques.
         Lorsqu'il est cliqué, setSelectedCategory est appelé avec la valeur null. */}
        <button onClick={() => setSelectedCategory(null)}>Tous</button>
        {/* Boucle sur la liste des catégories pour afficher un bouton pour chaque catégorie.
         Chaque bouton est associé à l'identifiant de la catégorie et, lorsqu'il est cliqué,
         setSelectedCategory est appelé avec l'identifiant de la catégorie correspondante. */}
        {getCategories().map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {/* Affichage du nom de la catégorie sur le bouton */}
            {category.name}
          </button>
        ))}
      </div>
      <div>
        <div className="technoCards">
            {/*Utilisation de la méthode map pour boucler sur chaque élément du tableau filteredTechnos. Un nouveau tableau est créé */}
          {filteredTechnos.map((tech) => (
            //Pour chaque élément dans filteredTechnos, une nouvelle <div> est créée avec la classe CSS 'card' (avec nom, logo et description)
            <div key={tech.id} className="card">
              <h2>{tech.name}</h2>
              <img src={`${pathlogo}${tech.logo}`} alt={tech.name} />
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="nonTechSkills">
        <div className="otherSkills">
          <h1>Compétences hors informatiques :</h1>

          <ul>
            <li>Maitrise de l'écriture journalistique</li>
            <li>gestion d'une campagne de communication</li>
            <li>Psc1</li>
          </ul>
        </div>
        <div className="hobbies">
          <h1>Hobbies :</h1>
          <ul>
            <li>Sport : MMA/Judo/golf</li>
            <li>Musique : Batterie</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
