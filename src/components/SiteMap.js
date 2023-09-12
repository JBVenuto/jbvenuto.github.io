import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SiteMap = (props) => (
    <div className="site-map">
        <div className="container">
            <div className="row">
                {/* Links to the main page and its contents */}
                <div className="col-sm-4">
                    <ul>
                        <li>
                            <Link to="/">Main Page</Link>
                        </li>
                        <li>
                            <a href="/#skills">Skills</a>
                        </li>
                        <li>
                            <a href="/#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                    </ul>
                </div>
                {/* Links to portfolio pages */}
                <div className="col-sm-4">
                    <ul>
                        <li>
                            <Link to="/publesstrivia">Publess Trivia</Link>
                        </li>
                        <li>
                            <Link to="/lights">Find Your Lights</Link>
                        </li>
                        <li>
                            <Link to="/letseat">Let's Eat</Link>
                        </li>
                        <li>
                            <Link to="/artgenerator">Modern Art Generator</Link>
                        </li>
                    </ul>
                </div>
                {/* Links to linkedIn and GitHub */}
                <div className="col-sm-4 end-icons">
                    <a href="https://www.linkedin.com/in/joseph-venuto" rel="noopener noreferrer" target="_blank">
                        <FaLinkedin className="foot-icon" />
                    </a>
                    <a href="https://github.com/JBVenuto" rel="noopener noreferrer" target="_blank">
                        <FaGithub className="foot-icon" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default SiteMap;