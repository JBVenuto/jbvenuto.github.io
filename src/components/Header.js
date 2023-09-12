import React from 'react';

const Header = (props) => (
    <div className="header shadow">
        <div className="name__wrap">
            <div className="header__name">
                <h1>Joseph Venuto</h1><hr></hr>
                <h2>Web Developer</h2>
            </div>
        </div>

        <div className="header__logo">
            <img
                className="logo__img"
                src={props.src}
                alt="V Logo"
            ></img>
        </div>
    </div>
);

export default Header;