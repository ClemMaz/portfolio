import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./style.css"

function Footer() {
    return (
        <footer>
            <nav className="foot">
                <ul>
                    <li>Mentions Légales - 2024</li>
                    <div className="social-icons">
        <a href="www.linkedin.com/in/clément-mazurkiewicz-9921a62a6" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/ClemMaz"target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;