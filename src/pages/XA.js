import React, { Component } from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
// import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';

class XA extends Component {
    constructor(props) {
      super(props);
      this.state = {
        'desktop': true
      }
    }

    render () {
        return (
            <div>
                <NavSlide 
                    hrefBack='/trackerce'
                    nameBack='Tracker-CE Documentation'
                    hrefNext='/contexthubui'
                    nameNext='ContextHubUI'
                />
                <div className="container">
                    <SlideName name='Xfinity Assistant' />
                    {/* <SlideScreenshot 
                        src={screenshot}
                        alt='Publess Trivia'
                    /> */}
                    <SlideLinks
                        liveHref='https://www.xfinity.com/xfinityassistant'
                    />
                    <div className="slide-description shadow">
                        <p><strong>Role:</strong> Software Engineer II → III</p>
                        <p><strong>Technologies:</strong> React, TypeScript, PWA, Node.js, Accessibility</p>

                        <h2>Context</h2>
                        <p>Xfinity Assistant is a customer support platform serving over 100M annual customer sessions. As the platform grew, performance, accessibility, and maintainability became increasingly important.</p>

                        <h2>Problem</h2>
                        <p>The application needed to continue scaling while supporting a growing feature set, multiple partner organizations, and evolving customer expectations across web and mobile experiences.</p>

                        <h2>Contributions</h2>
                        <ul>
                            <li>Led the platform's Progressive Web App (PWA) transformation</li>
                            <li>Improved frontend architecture and reusable component patterns</li>
                            <li>Drove accessibility improvements across customer-facing experiences</li>
                            <li>Supported partner onboarding and platform integrations</li>
                            <li>Contributed to AI-powered conversational initiatives</li>
                        </ul>

                        <h2>Outcomes</h2>
                        <ul>
                            <li>Established a modern foundation for future platform growth</li>
                            <li>Improved application performance and reliability</li>
                            <li>Increased accessibility compliance and usability</li>
                            <li>Reduced duplication through shared architectural patterns</li>
                            <li>Enabled faster development across teams</li>
                        </ul>

                        <h2>Key Takeaway</h2>
                        <p>The most valuable work wasn't shipping individual features. It was investing in platform capabilities that improved the experience for both customers and engineers at scale.</p>
                    </div>
                </div>
                <SiteMap />
                <Link to="/trackerce">
                    <IoIosArrowBack className="arrow-back" />
                </Link>
                <Link to="/contexthubui">
                    <IoIosArrowForward className="arrow-forward" />
                </Link>
            </div>
        )
    }
}

export default XA;