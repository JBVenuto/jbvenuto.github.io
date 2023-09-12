import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
// Imported components
import About from '../components/About';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PortfoDesc from '../components/PortfoDesc';
import PortfoScreen from '../components/PortfoScreen';
import SiteMap from '../components/SiteMap';
import Skill from '../components/Skill';
// Imported images
import publesstrivia from '../images/mainpage/publesstrivia.jpg'
import northernlights from '../images/mainpage/northernlights.jpg';
import restaurants from '../images/mainpage/restaurants.jpg';
import modernart from '../images/mainpage/modernart.jpg';
import v from '../images/mainpage/v1.jpg';
import me from '../images/mainpage/headshotMackinac.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  // Render the components and JSX
  render() {
    return (
      <div className="all">
        <div className="wide-nav">
        <Nav />
        </div>
        {/*  ------Header section------ */}
        <div className="container">
          <Header
            src={v}
          />

          {/*  ------Skills section------ */}
          <span id="skills"></span>
          <div className="skills">
            <Skill skill="HTML" id="first-skill" />
            <Skill skill="CSS" />
            <Skill skill="Sass" />
            <Skill skill="BootStrap" />
            <Skill skill="JavaScript" />
            <Skill skill="React" />
            {/* <Skill skill="jQuery" /> */}
            <Skill skill="Node.js" /> 
            <Skill skill="Express" /> 
            <Skill skill="REST API" />
            <Skill skill="MySQL" />
            <Skill skill="MongoDB" />
            <Skill skill="Git" id="last-skill" />
          </div>

          {/* ------Portfolio section------ */}
          <span id="portfolio"></span>
          <div className="portfolio" >
            {/* ------Publess Trivia------ */}
            <Link to="/publesstrivia" className="port-row">
              <PortfoScreen
                  className="portScreen1"
                  src={publesstrivia}
                  alt="Screenshot of publess trivia"
              />
              <PortfoDesc 
                  className="portDesc1"
                  title="Publess Trivia"
                  description="Social distanced trivia game to play with friends over video chat"
              />
            </Link>
            {/* ------Find Your Lights------ */}
            <Link to="/lights" className="port-row">
              <PortfoScreen
                  src={northernlights}
                  alt="Screenshot of Find Your Lights"
              />
              <PortfoDesc 
                  title="Find Your Lights"
                  description="Application allows user to find when Northern Lights will be visible"
              />
            </Link>
            {/* ------Lets Eat------ */}
            <Link to="/letseat" className="port-row sm-row-even">
              <PortfoScreen
                  className="portScreen2"
                  src={restaurants}
                  alt="Screenshot of Lets Eat"
              />
              <PortfoDesc 
                  className="portDesc2"
                  title="Let's Eat"
                  description="User generated list tracks restaurants to try and record the ones worth returning to"
              />
            </Link>
            <Link to="/letseat" className="port-row md-row-even">
              <PortfoDesc 
                  className="portDesc2"
                  title="Let's Eat"
                  description="User generated list tracks restaurants to try and record the ones worth returning to"
              />
              <PortfoScreen
                  className="portScreen2"
                  src={restaurants}
                  alt="Screenshot of Lets Eat"
              />
            </Link>
            {/* ------Art Generator------ */}
            <Link to="/artgenerator" className="port-row sm-row-even">
              <PortfoScreen
                  className="portScreen2"
                  src={modernart}
                  alt="Screenshot of Modern Art Generator"
              />
              <PortfoDesc 
                  className="portDesc2"
                  title="Modern Art Generator"
                  description="Each load will create a piece of modern art randomly generated with JavaScript"
              />
            </Link>
            <Link to="/artgenerator" className="port-row md-row-even">
              <PortfoDesc 
                  className="portDesc2"
                  title="Modern Art Generator"
                  description="Each load will create a piece of modern art randomly generated with JavaScript"
              />
              <PortfoScreen
                  className="portScreen2"
                  src={modernart}
                  alt="Screenshot of Modern Art Generator"
              />
            </Link>
          </div>

          {/* ------About me section------ */}
          <span id="about"></span>
          <About src={me} />
          
        </div>
        <SiteMap />
      </div>
    );
  }
}

export default App;