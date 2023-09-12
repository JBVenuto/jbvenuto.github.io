import React from 'react';

const PortfoScreen = (props) => (
    <div className="port-screen shadow">
        <img
            className="screenshot"
            src={props.src}
            alt={props.alt}
        ></img>
    </div>
);

export default PortfoScreen;