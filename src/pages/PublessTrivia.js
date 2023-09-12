import React, { Component } from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import screenshot from '../images/gifs/publess-trivia.gif';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class PublessTrivia extends Component {
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
                    hrefBack='/artgenerator'
                    nameBack='Modern Art Generator'
                    hrefNext='/lights'
                    nameNext='Find Your Lights'
                />
                <div className="container">
                    <SlideName name='Publess Trivia' />
                    <SlideScreenshot 
                        src={screenshot}
                        alt='Publess Trivia'
                    />
                    <SlideLinks
                        liveHref='https://publess-trivia.vercel.app/'
                        gitHubHref='https://github.com/JBVenuto/publess-trivia'
                    />
                    <div className="slide-description shadow">
                        <h2>About:</h2>
                        <p>During the coronavirus lockdown I found myself missing playing pub trivia. While many of the aspects of pub trivia can’t be recreated in a virtual trivia game, I still wanted to make a game that could be played with friends and family over video chat to try and bring people together.</p>
                        <h2>Development:</h2>
                        <p>One of my goals while developing this was to refresh my Redux skills and to gain experience using Redux with Next.js. Even though the initial version of this application only had a small amount of state to manage I chose Redux because I knew I would be expanding it to include a scoring system.</p>
                        <h2>Tech Used:</h2>
                        <p>As previously mentions this application uses Redux and Next.js. To reduce the amount of styling I had to do I used Materialize, a front-end framework. The styling that I did write is written using Sass.</p>
                    </div>
                </div>
                <a href="/artgenerator">
                    <IoIosArrowBack className="arrow-back" />
                </a>
                <a href="/lights">
                    <IoIosArrowForward className="arrow-forward" />
                </a>
                <SiteMap />
            </div>
        )
    }
}

export default PublessTrivia;