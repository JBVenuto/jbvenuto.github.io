import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Nav = () => (
    <div className='nav justify-content-end'>
        {/* <div className="col-6"></div> */}
        <li className="nav-item">
            <a href="#skills">Skills</a>
        </li>
        <li className="nav-item">
            <a href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
            <a href="#about">About</a>
        </li>
        <li className="nav-item">
            <a href="https://github.com/JBVenuto" rel="noopener noreferrer" target="_blank">
                <FaGithub className="nav-icon" />
            </a>
        </li>
        <li className="nav-item">
            <a href="https://www.linkedin.com/in/joseph-venuto" rel="noopener noreferrer" target="_blank">
                <FaLinkedin className="nav-icon" />
            </a>
        </li>
    </div>
);

export default Nav;