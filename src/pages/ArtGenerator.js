import React, { Component } from 'react';
import './slide.css';
// Componenets 
import NavSlide from '../components/NavSlide';
import SlideName from '../components/SlideName';
import SlideScreenshot from '../components/SlideScreenshot';
import SlideLinks from '../components/SlideLinks';
import SiteMap from '../components/SiteMap';
import screenshot from '../images/gifs/artgendesk.gif';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class ArtGenerator extends Component {
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
                    hrefBack='/letseat'
                    nameBack="Let's Eat"
                    hrefNext='/publesstrivia'
                    nameNext='Publess Trivia'
                />
                <div className="container">
                    <SlideName name='Modern Art Generator' />
                    <SlideScreenshot 
                        src={screenshot}
                        alt='Modern Art Generator Screenshot'
                    />
                    <SlideLinks
                        liveHref='https://jbvenuto.github.io/modernart/'
                        gitHubHref='https://github.com/JBVenuto/modernart'
                    />
                    <div className="slide-description shadow">
                        <h2>About:</h2>
                        <p>I’ve been an art lover all my life and visiting the Los Angeles County Museum of Art I was inspired to try making art myself. Unfortuately, I have no painting and drawing skills and I knew I would have to take a different approach.</p>
                        <p>I took inspiration from the works of Ellsworth Kelly, Piet Mondrian, Wassily Kandinsky, and Mark Rothko. I found their ability to create beautify works of art using simple shapes and carefully selected colors to be a good starting point for my attempt at creating a web application to make art.</p>
                        <h2>Development:</h2>
                        <p>While building this application I learned that I would need to use CSS Grid to get the results I was hoping for. My previous layout experience had been using Bootstrap’s grid system, or agonizingly trying to position elements by giving them margins or floating them to one side of the page or the other. I learned that CSS Grid takes more time to set up than Bootstrap’s grid but is well worth the time for it provides developers with more options for how they want to set up their application. </p>
                        <h2>Tech Used:</h2>
                        <p>This application uses CSS Grid and Vanilla JavaScript</p>
                    </div>
                </div>
                <a href="/letseat">
                    <IoIosArrowBack className="arrow-back" />
                </a>
                <a href="/publesstrivia">
                    <IoIosArrowForward className="arrow-forward" />
                </a>
                <SiteMap />
            </div>
        )
    }
}

export default ArtGenerator;