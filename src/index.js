//Le fichier index.js est utilisé pour rendre le composant principal de l'application dans le DOM. C'est ici que la méthode ReactDOM.render() est appelée pour attacher le composant racine de l'application à un élément spécifique dans le DOM.
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Crée une racine React en utilisant createRoot et récupère l'élément du DOM avec l'ID 'root'
//createRoot est utilisée pour activer le mode concurrent de React, qui permet le rendu asynchrone des composants pour améliorer les performances.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rend le composant App dans la racine React
root.render(
  <App />
 );


