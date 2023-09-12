import React, { Component } from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import screenshot from '../images/gifs/restaurantdesk.gif';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class LetsEat extends Component {
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
                    hrefBack='/lights'
                    nameBack='Find Your Lights'
                    hrefNext='/artgenerator'
                    nameNext='Modern Art Generator'
                />
                <div className="container">
                    <SlideName name='Lets Eat' />
                    <SlideScreenshot 
                        src={screenshot}
                        alt='Lets Eat Screenshot'
                    />
                    <SlideLinks
                        liveHref='https://jbvenuto.github.io/restaurantfrontend/'
                        gitHubHref='https://github.com/JBVenuto/restaurants'
                    />
                    <div className="slide-description shadow">
                        <h2>About:</h2>
                        <p>I’m always hearing about new restaurants to check out, but I keep finding myself going to the same few places. To break out of this habit I decided to build an application to track of all these restaurants and to let me make a note of whether or not I would visit again.</p>
                        <h2>Development:</h2>
                        <p>The biggest issue I ran into while developing this application was deploying a react application and a Node.js backend with a MySQL database that were coupled in one project. After reading about different ways to solve this issue such as using the concurrently package, I decided to separate the back-end and front-end into two separate projects that could be deployed on their own.</p>
                        <h2>Tech Used:</h2>
                        <p>The back-end for this application is written with Node.js and uses Express.js to create an API. The MySQL database is hosted on Heroku using the JawsDB plugin. The front-end is built with React.js</p>
                    </div>
                </div>
                <a href="/lights">
                    <IoIosArrowBack className="arrow-back" />
                </a>
                <a href="/artgenerator">
                    <IoIosArrowForward className="arrow-forward" />
                </a>
                <SiteMap />
            </div>
        )
    }
}

export default LetsEat;