import React, { Component } from 'react';
import './main.css';
import { Link } from 'react-router-dom';
// Imported components
import About from '../components/About';
import Header from '../components/Header';
import Nav from '../components/Nav';
import PortfoDesc from '../components/PortfoDesc';
import SiteMap from '../components/SiteMap';
import Skill from '../components/Skill';
// Imported images
import v from '../images/mainpage/v1.jpg';
import me from '../images/mainpage/headshot26.jpg'

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
            <Skill skill="JavaScript" id="first-skill" />
            <Skill skill="TypeScript" />
            <Skill skill="React" />
            <Skill skill="Vue" />
            <Skill skill="Node" />
            <Skill skill="Express" />
            <Skill skill="Accessibility (WCAG)" />
            <Skill skill="Unit Tests" />  
            <Skill skill="REST API" />
            <Skill skill="AI Integration" />
            <Skill skill="Component Libraries" />
            <Skill skill="Git" id="last-skill" />
          </div>

          {/* ------Portfolio section------ */}
          <span id="portfolio"></span>
          <div className="portfolio" >
            {/* ------Xfinity Assistant------ */}
            <Link to="/xfinityassistant" className="port-row">
              <PortfoDesc 
                  title="Xfinity Assistant"
                  description="PWA transformation, platform architecture, accessibility, and AI-powered support experiences"
              />
            </Link>
            {/* ------ContextHubUI------ */}
            <Link to="/contexthubui" className="port-row">
              <PortfoDesc 
                  title="ContextHubUI"
                  description="Self-service platform for managing data mappings and operational workflows"
              />
            </Link>
            {/* ------AI Experiences in Xfinity Assistant------ */}
            <Link to="/aiexperiences" className="port-row">
              <PortfoDesc 
                  title="AI Experiences in Xfinity Assistant"
                  description="Integrating generative AI and conversational experiences into enterprise customer support"
              />
            </Link>
            {/* ------Tracker-CE Documentation------ */}
            <Link to="/trackerce" className="port-row">
              <PortfoDesc 
                  title="Tracker-CE Documentation"
                  description="Astro documentation experience inspired by the workflow and visual identity of the Polyend Tracker"
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