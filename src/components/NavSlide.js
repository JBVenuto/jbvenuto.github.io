import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NavSlide = (props) => (
    <div className="nav nav-fill nav-slide">
        <li className="col-4 slide-link">
            <Link to={props.hrefBack}><IoIosArrowBack className="arrow-back" /> {props.nameBack}</Link>
        </li>
        <li className="col-4 slide-link">
            <Link to='/'>Main Page</Link>
        </li>
        <li className="col-4 slide-link">
            <Link to={props.hrefNext}>{props.nameNext} <IoIosArrowForward className="arrow-forward" /></Link>
        </li>
    </div>
);

export default NavSlide;