
export const getCategories = () => {
  const categories = [
    { id: 1, name: "Front-end" },
    { id: 2, name: "Back-end" },
    { id: 3, name: "CMS" },
    { id: 4, name: "Framework" },
    { id: 5, name: "Base de données" },
    { id: 6, name: "IDE" },
    { id: 7, name: "Outils" },
    
  ];

  return categories;
};

export const getTechnos = () => {
  const technos = [
    { id: 1, name: "HTML", logo: "html.svg", description: "", category: 1 },
    { id: 2, name: "CSS", logo: "css.svg", description: "", category: 1 },
    {
      id: 3,
      name: "Javascript",
      logo: "javascript.svg",
      description: "",
      category: 1,
    },
    { id: 4, name: "React", logo: "react.svg", description: "", category: 1 },
    {
      id: 5,
      name: "Node.js",
      logo: "nodejs.svg",
      description: "",
      category: 2,
    },
    {
      id: 6,
      name: "MongoDB",
      logo: "mongodb.svg",
      description: "",
      category: 5,
    },
    {
      id: 7,
      name: "Wordpress",
      logo: "wordpress.svg",
      description: "",
      category: 3,
    },
    {
      id: 8,
      name: "Postman",
      logo: "postman.svg",
      description: "",
      category: 5,
    },
    { id: 9, name: "GitHub", logo: "github.svg", description: "", category: 7 },
    {
      id: 10,
      name: "Visual Studio Code",
      logo: "visualstudiocode.svg",
      description: "",
      category: 6,
    },
    { id: 11, name: "Angular", logo: "angular.svg", description: "", category: 4 },

  ];
  return technos;
};

export const getNoTechnos = () => {
    const NoTechnos = [
      { id: 1, name: "Maitrise de l'écriture journalistique" },
    { id: 2, name: "gestion d'une campagne de communication" },
    { id: 3, name: "Psc1" },
    ];
    return NoTechnos;
  };

export const getHobbies = () => {
  const hobbies = [
    { id: 1, name: "Sport : MMA/Judo/golf" },
    { id: 2, name: "Musique : Batterie" },
  ];
  return hobbies;
};


