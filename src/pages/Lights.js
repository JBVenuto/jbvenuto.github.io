import React, { Component } from 'react';
import './slide.css';

import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import screenshot from '../images/gifs/northernlightsV2.gif';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class Lights extends Component {
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
                    hrefBack='/publesstrivia'
                    nameBack='Publess Trivia'
                    hrefNext='/letseat'
                    nameNext='Lets Eat'
                />
                <div className="container">
                    <SlideName name='Find Your Lights' />
                    <SlideScreenshot 
                        src={screenshot}
                        alt='Find Your Lights Screenshot'
                    />
                    <SlideLinks
                        liveHref='https://northernlights-v2.vercel.app/'
                        gitHubHref='https://github.com/JBVenuto/northernlightsV2'
                    />
                    <div className="slide-description shadow">
                        <h2>About:</h2>
                        <p>After moving to Michigan’s Upper Peninsula, I knew that I had to see the Northern Lights, but I was having trouble finding an aurora forecast application that I liked. So I decided to build my own.</p>
                        <p>I wanted an application that would show the user what the predicted Kp score will be in a simple to read bar graph.</p>
                        <h2>Development:</h2>
                        <p>Testing this application gave me a new way of thinking about UX, and the situations in which apps are used. While using the app on a cold night along the Lake Superior shore I realized that it needed a dark background because the user’s eyes will be adjusted to the dark night sky, and to show the most recent data in case the forecast was wrong. This application was very fun to research as I got to learn about auroras and geomagnetic weather.</p>
                        <h2>Tech Used:</h2>
                        <p>This application gathers information from the National Oceanic and Atmospheric Administration’s Space Weather Prediction API.</p>
                        <p>I used React and Next.js to build this application. It is deployed to Vercel.</p>
                    </div>
                </div>
                <a href="/publesstrivia">
                    <IoIosArrowBack className="arrow-back" />
                </a>
                <a href="/letseat">
                    <IoIosArrowForward className="arrow-forward" />
                </a>
                <SiteMap />
            </div>
        )
    }
}

export default Lights;