import React from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SiteMap from '../components/SiteMap';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const AIExperiences = () => (
    <div>
        <NavSlide
            hrefBack='/contexthubui'
            nameBack='ContextHubUI'
            hrefNext='/xfinityassistant'
            nameNext='Xfinity Assistant'
        />
        <div className="container">
            <SlideName name='AI Experiences in Xfinity Assistant' />
            <div className="slide-description shadow">
                <p><strong>Role:</strong> Software Engineer III</p>
                <p><strong>Technologies:</strong> Google ADK, A2UI, React, TypeScript, Generative AI</p>

                <h2>Context</h2>
                <p>As generative AI capabilities matured, Xfinity Assistant began exploring how AI could enhance customer support interactions and provide more flexible conversational experiences.</p>

                <h2>Problem</h2>
                <p>Traditional support flows required significant upfront configuration and were often constrained by predefined conversational paths.</p>

                <h2>Solution</h2>
                <p>I contributed to the development and integration of AI-powered experiences within Xfinity Assistant, helping connect emerging AI capabilities with an existing enterprise support platform.</p>

                <h2>Contributions</h2>
                <ul>
                    <li>Evaluated AI integration opportunities within the product</li>
                    <li>Built conversational user experiences using ADK and A2UI</li>
                    <li>Integrated AI-driven interactions into existing platform workflows</li>
                    <li>Collaborated with product and engineering stakeholders to validate use cases</li>
                    <li>Established patterns for future AI initiatives</li>
                </ul>

                <h2>Outcomes</h2>
                <ul>
                    <li>Expanded conversational capabilities beyond traditional support flows</li>
                    <li>Introduced reusable AI integration patterns</li>
                    <li>Improved organizational understanding of AI-powered customer experiences</li>
                    <li>Created a foundation for future experimentation and development</li>
                </ul>

                <h2>Key Takeaway</h2>
                <p>The challenge was not adopting AI technology. It was integrating AI in a way that fit existing product workflows, user expectations, and platform constraints.</p>
            </div>
        </div>
        <SiteMap />
        <Link to="/contexthubui">
            <IoIosArrowBack className="arrow-back" />
        </Link>
        <Link to="/xfinityassistant">
            <IoIosArrowForward className="arrow-forward" />
        </Link>
    </div>
);

export default AIExperiences;
