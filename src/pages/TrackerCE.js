import React from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const TrackerCE = () => (
    <div>
        <NavSlide
            hrefBack='/aiexperiences'
            nameBack='AI Experiences in Xfinity Assistant'
            hrefNext='/xfinityassistant'
            nameNext='Xfinity Assistant'
        />
        <div className="container">
            <SlideName name='Tracker-CE Documentation Website' />
            <SlideLinks
                liveHref='https://jbvenuto.github.io/tracker-ce/Home/'
                gitHubHref='https://github.com/JBVenuto/tracker-ce'
            />
            <div className="slide-description shadow">
                <div className="project-meta">
                    <p><strong>Role</strong><span>Designer &amp; Developer</span></p>
                    <p><strong>Technologies</strong><span>Astro, TypeScript, Static Site Generation</span></p>
                </div>

                <h2>Context</h2>
                <p>Tracker-CE is a community-maintained knowledge base for the Polyend Tracker. The existing documentation contained valuable information, but its presentation made navigation and discovery more difficult than it needed to be for a workflow-centric instrument.</p>

                <h2>Problem</h2>
                <p>Most documentation sites prioritize content organization but often overlook the experience of using the documentation itself. Generic templates can make highly specialized products feel disconnected from the workflows they are intended to support.</p>
                <p>The goal was not simply to migrate documentation to a new framework. It was to create an experience that felt aligned with the Tracker's identity and encouraged exploration.</p>

                <h2>Solution</h2>
                <p>I took full ownership of the project, using Astro as the foundation for a complete documentation experience.</p>
                <p>Key areas of focus included:</p>
                <ul>
                    <li>Structuring content and routing for long-term maintainability</li>
                    <li>Organizing documentation for faster navigation and discovery</li>
                    <li>Designing a visual language inspired by the Polyend Tracker</li>
                    <li>Creating a distinctive alternative to generic documentation templates</li>
                    <li>Building a responsive experience that works across devices</li>
                </ul>
                <p>Rather than treating the site as a collection of pages, I approached it as a companion to the Tracker workflow itself.</p>

                <h2>Design Decisions</h2>
                <p>Many documentation sites follow a similar design language that prioritizes convention over personality.</p>
                <p>For this project, I intentionally drew inspiration from the hardware's interface, visual hierarchy, and overall aesthetic. The result is a documentation experience that feels connected to the instrument instead of a generic developer portal.</p>
                <p>The primary goal was to reinforce the identity of the Tracker while maintaining readability and usability.</p>

                <h2>Outcomes</h2>
                <ul>
                    <li>Modernized the documentation using Astro</li>
                    <li>Established a scalable content and routing structure</li>
                    <li>Improved navigation and content discoverability</li>
                    <li>Created a visual identity aligned with the product being documented</li>
                    <li>Delivered a more engaging experience for both new and existing users</li>
                </ul>

                <h2>Key Takeaway</h2>
                <p>Good documentation is more than accurate information. Design, navigation, and presentation influence how users learn. By combining technical implementation with product-focused design decisions, I transformed a collection of reference material into an experience that better reflects the workflow and character of the Tracker itself.</p>
            </div>
        </div>
        <SiteMap />
        <Link to="/aiexperiences">
            <IoIosArrowBack className="arrow-back" />
        </Link>
        <Link to="/xfinityassistant">
            <IoIosArrowForward className="arrow-forward" />
        </Link>
    </div>
);

export default TrackerCE;
