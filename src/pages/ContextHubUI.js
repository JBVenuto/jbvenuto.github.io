import React from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SiteMap from '../components/SiteMap';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const ContextHubUI = () => (
    <div>
        <NavSlide
            hrefBack='/xfinityassistant'
            nameBack='Xfinity Assistant'
            hrefNext='/aiexperiences'
            nameNext='AI Experiences in Xfinity Assistant'
        />
        <div className="container">
            <SlideName name='ContextHubUI' />
            <div className="slide-description shadow">
                <div className="project-meta">
                    <p><strong>Role</strong><span>Software Engineer III</span></p>
                    <p><strong>Technologies</strong><span>React, TypeScript, Internal Platform Development</span></p>
                </div>

                <h2>Context</h2>
                <p>Product teams relied on engineering resources to configure data mappings and operational workflows that powered customer experiences.</p>

                <h2>Problem</h2>
                <p>Routine configuration changes required engineering involvement, creating delivery bottlenecks, increasing context switching, and slowing product teams.</p>

                <h2>Solution</h2>
                <p>I designed and built ContextHubUI, a self-service platform that allowed product managers to manage mappings and configuration workflows independently.</p>

                <h2>Contributions</h2>
                <ul>
                    <li>Defined platform requirements with stakeholders</li>
                    <li>Designed application architecture and user workflows</li>
                    <li>Built the frontend experience using React and TypeScript</li>
                    <li>Developed reusable configuration patterns</li>
                    <li>Drove adoption across teams</li>
                </ul>

                <h2>Outcomes</h2>
                <ul>
                    <li>Reduced engineering dependency for operational changes</li>
                    <li>Increased product team autonomy</li>
                    <li>Improved turnaround time for configuration updates</li>
                    <li>Allowed engineering teams to focus on product development rather than administrative support</li>
                </ul>

                <h2>Key Takeaway</h2>
                <p>ContextHubUI demonstrated that some of the highest-leverage engineering work comes from improving organizational workflows rather than customer-facing features.</p>
            </div>
        </div>
        <SiteMap />
        <Link to="/xfinityassistant">
            <IoIosArrowBack className="arrow-back" />
        </Link>
        <Link to="/aiexperiences">
            <IoIosArrowForward className="arrow-forward" />
        </Link>
    </div>
);

export default ContextHubUI;
