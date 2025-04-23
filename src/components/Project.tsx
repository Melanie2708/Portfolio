import booki from '../assets/images/booki.png';
import archi from '../assets/images/archi.png';
import nina from '../assets/images/nina_carducci.png';
import kasa from '../assets/images/kasa.png';
import grimoire from '../assets/images/grimoire.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projets</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://melanie2708.github.io/Premier-Projet/" target="_blank" rel="noreferrer"><img src={booki} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://melanie2708.github.io/Premier-Projet/" target="_blank" rel="noreferrer"><h2>Booki</h2></a>
                    <p>Intégration responsive de la page d'accueil de Booki, une agence de voyage.</p>
                </div>
                <div className="project">
                    <a href="https://sophie-bluel-architecte.melandnico.space/" target="_blank" rel="noreferrer"><img src={archi} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://sophie-bluel-architecte.melandnico.space/" target="_blank" rel="noreferrer"><h2>Portfolio Architecte</h2></a>
                    <p>Intégration d'un portfolio d'architecte d'intérieur, avec HTML, CSS et Javascript.</p>
                </div>
                <div className="project">
                    <a href="https://melanie2708.github.io/Nina-Carducci---Photographe/" target="_blank" rel="noreferrer"><img src={nina} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://melanie2708.github.io/Nina-Carducci---Photographe/" target="_blank" rel="noreferrer"><h2>Optimisation - Portfolio Photographe</h2></a>
                    <p>Optimisation et debug d'un portolio de photographe, en utilisant Google Lighthouse.</p>
                </div>
                <div className="project">
                    <a href="https://kasa.melandnico.space/" target="_blank" rel="noreferrer"><img src={kasa} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://kasa.melandnico.space/" target="_blank" rel="noreferrer"><h2>Kasa</h2></a>
                    <p>Implémentation du front-end d'une application web pour Kasa (location d'appartements entre particuliers). Développement React et SASS.</p>
                </div>
                <div className="project">
                    <a href="https://monvieuxgrimoire.melandnico.space/" target="_blank" rel="noreferrer"><img src={grimoire} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://monvieuxgrimoire.melandnico.space/" target="_blank" rel="noreferrer"><h2>Mon Vieux Grimoire</h2></a>
                    <p>Développement d'un back-end (NodeJS, Express, MongoDB, API REST) pour Mon Vieux Grimoire, un site de notation de livres.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;