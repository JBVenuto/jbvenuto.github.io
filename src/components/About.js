import React from 'react';

const About = (props) => (
    <div className="all-about">
        {/* Picture */}
        <div className="about-headshot">
            <img
                src={props.src}
                alt="Joseph Venuto"
                className="headshot shadow"
            ></img>
        </div>
        {/* About Me Section */}
        <div className="about-desc shadow">
            <h3>About Me:</h3><hr></hr>
            <p>
                I am a Software Engineer and Technical Leader with over seven years of experience building high-traffic, accessible web applications. My background as an educator gives me a unique advantage in technical mentorship, clear communication, and rapid self-learning.            </p>
            <p>
                I thrive on solving complex problems at scale. My experience ranges from mastering the MERN stack to architecting enterprise systems, including transforming Comcast’s Xfinity Assistant into a Progressive Web App serving over 100 million annual sessions. I am highly adaptable across the stack, with deep expertise in React, TypeScript, Node.js, and mobile development using Kotlin.
            </p>
            <p>
                Whether I am standardizing reusable component libraries to boost accessibility scores, building robust APIs, or leading external integrations, I bring a collaborative, solution-oriented approach to driving technical excellence.
            </p>
        </div>
    </div>
);

export default About;