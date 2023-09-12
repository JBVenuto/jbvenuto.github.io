import React from 'react';
import { MdBrightness1 } from 'react-icons/md'

const SlideLinks = (props) => (
    <div className="app-links justify-content-center shadow-sm">
        <a href={props.liveHref} target="_blank" rel="noopener noreferrer" className="app-link">Live Site</a>
        <MdBrightness1 className="link-divider" />
        <a href={props.gitHubHref} target="_blank" rel="noopener noreferrer" className="app-link">GitHub Repository</a>
    </div>
);

export default SlideLinks;