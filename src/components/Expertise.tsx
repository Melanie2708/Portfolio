import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faChrome } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Git"
];

const labelsSecond = [
    "Node.js",
    "Express",
    "API",
    "SQL",
    "MongoDB"
];

const labelsThird = [
    "Lighthouse",
    "SEO",
    "Green Code",
    "Accessibilité"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Développement Front-End</h3>
                    <p>Développement d'interfaces modernes avec React. Conception d'UI dynamiques, réactives et ergonomiques en utilisant les dernières pratiques (hooks, context API, gestion d'état, composants réutilisables). Intégration fluide avec des APIs REST, utilisation de TypeScript pour un code robuste, et maîtrise des outils de build (Vite, Webpack) pour des performances optimales.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Développement Back-End</h3>
                    <p>Développement d'APIs robustes et sécurisées avec Node.js et Express. Conception d'architectures RESTful, gestion des bases de données, authentification, et middleware.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChrome} size="3x"/>
                    <h3>Optimisation</h3>
                    <p>Optimisation de sites web pour des performances maximales, une meilleure visibilité et une expérience utilisateur optimale. Analyse et amélioration continue via Lighthouse, optimisation du chargement des ressources, réduction de l'empreinte carbone, optimisation mobile. Mise en œuvre des standards d'accessibilité pour garantir une expérience inclusive.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;