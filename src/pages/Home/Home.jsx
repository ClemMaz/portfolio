import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Home() {
  return (
    <body>
      <main className="Home">
        <article>
          <img className="portrait" src="./media/profilcv.jpg" alt="" />
          <h1>Bienvenue sur mon site</h1>
          <h3>Qui suis-je ?</h3>
          <p>
            Clément Mazurkiewicz, ancien journaliste cinéma, culture et
            PQR/communicant d'entreprise,{" "}
            <strong>en pleine reconversion</strong> pour devenir développeur
            web,{" "}
            <strong>je cherche un stage pour la période avril-juin.</strong>
          </p>
          <p>
            La reconversion professionnelle représente souvent un tournant
            significatif dans la vie d'un individu, un choix courageux visant à
            réaligner sa carrière avec ses aspirations profondes. Lorsque l'on
            ressent un décalage entre son travail actuel et ses véritables
            passions, observer le monde évoluer autour de soi peut amplifier le
            sentiment d'inconfort, incitant à envisager une transition vers des
            horizons plus alignés avec ses valeurs et ses ambitions.
            </p> 
            
            <p>
                Dans une
            société en constante mutation, où les technologies émergent, les
            industries évoluent et les modes de travail se transforment, il est
            crucial de rester adaptable. La reconversion professionnelle offre
            une opportunité de se réinventer, de se former à de nouvelles
            compétences et de s'adapter aux besoins changeants du marché du
            travail. Ignorer ce besoin d'adaptation peut entraîner une
            stagnation professionnelle et personnelle, tandis que le monde
            progresse sans cesse.
          </p>
          <a href="./media/Cv_Clement_Mazurkiewicz_2024.pdf" download="MonCV">
            <strong>Télécharger mon CV</strong>
          </a>
          <div className="project-button">
            <Link to="/portfolio">
              <button>Mes derniers projets</button>
            </Link>
          </div>
        </article>
      </main>
    </body>
  );
}

export default Home;
