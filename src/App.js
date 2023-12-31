import React, { Component } from 'react';
import './App.css';
import Title from './components/title'
import Intro from './components/intro'
import About from './components/about'
import Experience from './components/experience'
import Projects from './components/projects'
import Icon from './components/icon';


class App extends Component {
  render() {
    return (
      <div className='web-container'>
        <div className='web-left'>
          <div className='upper-container' id='home'>
            <div className='upper-left'>
              <Title></Title>
              <Intro></Intro>
              <div className='contact-wrapper'>
                <a href='mailto:2019egan@gmail.com'>
                  <div className='contact'>
                    <img className='contact-img' src='mail.png' alt='mailicon'/>
                    <div className='contact-text'>Contact Me</div>
                  </div>
                </a>
              </div>
            </div>
            <div className='upper-right'>
              <Icon></Icon>
            </div>
          </div>
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
        </div>
        <div className='web-right'>
          <div className='nav'>
            <div className='hover-container'><a href='#home' className='nav-link'><div className='nav-element'>Home</div></a></div>
            <div className='hover-container'><a href='#about'className='nav-link'><div className='nav-element'>About Me</div></a></div>
            <div className='hover-container'><a href='#experience' className='nav-link'><div className='nav-element'>Experience</div></a></div>
            <div className='hover-container'><a href='#projects' className='nav-link'><div className='nav-element'>Projects</div></a></div>
            <div className='nav-icons'>
              <div className='icon-container'><a href="https://github.com/scaly789"><img className="nav-icon" src="redgit.png"/></a></div>
              <div className='icon-container'><a href="https://www.linkedin.com/in/eric-gan-cmu/"><img className="nav-icon" src="linked.png"/></a></div>
              <div className='icon-container'><a href="mailto:2019egan@gmail.com"><img className="nav-icon" src="mail.png"/></a></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
