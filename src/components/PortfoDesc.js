import React from 'react';

const PortfoDesc = (props) => (
    <div className="port-desc shadow">
        <span>
            <h5 className="port-title">{props.title}</h5>
            {props.description}
        </span>
    </div>
);

export default PortfoDesc;