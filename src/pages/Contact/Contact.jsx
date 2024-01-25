import React, { useState } from "react";
import "./style.css";

// Utilisation du hook useState pour déclarer un état local (formData) qui stocke les données du formulaire (nom, email, sujet, message).
//Les valeurs initiales sont définies comme des chaînes vides.

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // Un autre état local (isSubmitted) qui indique si le formulaire a été soumis.
  //La valeur initiale est false.
  const [isSubmitted, setIsSubmitted] = useState(false);

// Fonction appelée lorsqu'un champ du formulaire est modifié.
//Elle utilise la fonction setFormData pour mettre à jour l'état du formulaire en conservant les valeurs précédentes et en modifiant la propriété actuelle qui correspond au champ modifié.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
//Fonction appelée lorsqu'un formulaire est soumis.
//Elle empêche le comportement de soumission par défaut avec e.preventDefault().

  const handleSubmit = (e) => {
    e.preventDefault();

    
   // Elle logge les données du formulaire dans la console.
//Elle met à jour l'état isSubmitted à true.
    console.log("Formulaire soumis avec:", formData);
    setIsSubmitted(true);
  };

  return (
    <main>
    <section className="contactContainer">
    <div className="form">
      <h2 className="titre">Contactez-moi</h2>
      {isSubmitted && <p className="messageOk">Votre message a bien été envoyé !</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Sujet :</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form--message">
          <label htmlFor="message">Message :</label>
          <textarea
          type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
    </section>
    </main>
  );
};

export default ContactForm;
