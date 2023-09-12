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
                I’m a web developer with a background in education. My time in education gave me leadership skills, a professional understanding of the learning process and the skills to adapt this knowledge for efficient self-learning, time management, and organization.
            </p>
            <p>
                I have an enthusiastic approach to solving problems with technology. With countless predefined techniques already available and the capacity to creatively solve a problem, I am able to determine the best approach to any issue that comes my way. I am an effective communicator with experience teaching others, organizing group projects and have the ability to succeed working in groups or independently.
            </p>
            <p>
                While earning a Web Development Certificate from the University of Central Florida I was formally taught the MERN stack. Additionally, I acquired skills in jQuery, Firebase, MySQL, Handlebars, and modern JavaScript development using NPM and Node.js.
            </p>
        </div>
    </div>
);

export default About;