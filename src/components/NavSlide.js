import React from 'react';
import { Link } from 'react-router-dom';

const NavSlide = (props) => (
    <div className="nav nav-fill nav-slide">
        <li className="col-4 slide-link">
            <Link to={props.hrefBack}>{props.nameBack}</Link>
        </li>
        <li className="col-4 slide-link">
            <Link to='/'>Main Page</Link>
        </li>
        <li className="col-4 slide-link">
            <Link to={props.hrefNext}>{props.nameNext}</Link>
        </li>
    </div>
);

export default NavSlide;