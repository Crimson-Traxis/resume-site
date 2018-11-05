import React, { Component } from 'react';
import { 
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem,
  Button,
  Container, 
  Row, 
  Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { 
  faLinkedin,
  faGithubSquare,
  faDev } from '@fortawesome/free-brands-svg-icons'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import {
  jarallax,
} from 'jarallax';
import Typed from 'react-typed';
import headshot from './images/headshot.jpg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      navDropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      navDropdownOpen: !this.state.navDropdownOpen
    });
  }

  navigate = (url) => {
    window.location = url;
  }

  navigateNewTab = (url) => {
    window.open(url);
  }

  componentDidMount() {
    jarallax(document.querySelectorAll('.jarallax'));
  }

  componentWillUnmount() {
   jarallax(document.querySelectorAll('.jarallax'), 'destroy');
  }

  render() {
    return (
      <div className="App">
        <header id="header" className="App-header jarallax">
          <img src={headshot} className="headshot" alt="headshot" />
          <div className="basic-info">
            <Row>
              <Col>
                <h2>Trent Killinger</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Typed 
                  strings={[
                      '.Net Developer',
                      'Mobile Developer',
                      'Software Analyst']}
                      typeSpeed={40}
                      backSpeed={50}
                      loop />
              </Col>
            </Row>
            <Row>
              <Col>
                <ul className="info-resources">
                  <li><Button outline color="primary" onClick={() => { this.navigateNewTab('https://www.linkedin.com/in/trent-killinger-681252115/')} } ><FontAwesomeIcon icon={faLinkedin} />&nbsp;LinkedIn</Button></li>
                  <li><Button outline color="primary" onClick={() => { this.navigateNewTab('https://devpost.com/Crimson-Traxis')} } ><FontAwesomeIcon icon={faDev} />&nbsp;Devpost</Button></li>
                  <li><Button outline color="primary" onClick={() => { this.navigateNewTab('https://github.com/Crimson-Traxis')} } ><FontAwesomeIcon icon={faGithubSquare} />&nbsp;Github</Button></li>
                </ul>
              </Col>
            </Row>
          </div>
        </header>
        <ButtonDropdown isOpen={this.state.navDropdownOpen} toggle={() => {this.toggle()} } className="navigation-dropdown">
          <DropdownToggle caret outline color="primary">
            Navigation
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Home</DropdownItem>
            <AnchorLink className="dropdown-item" href='#header' onClick={() => { this.setState({navDropdownOpen:false}) } }>Intro</AnchorLink>
            <AnchorLink className="dropdown-item" href='#header' onClick={() => { this.setState({navDropdownOpen:false}) } }>Education</AnchorLink>
            <AnchorLink className="dropdown-item" href='#header' onClick={() => { this.setState({navDropdownOpen:false}) } }>Experience</AnchorLink>
            <AnchorLink className="dropdown-item" href='#header' onClick={() => { this.setState({navDropdownOpen:false}) } }>Achievements</AnchorLink>
            <AnchorLink className="dropdown-item" href='#header' onClick={() => { this.setState({navDropdownOpen:false}) } }>Skills</AnchorLink>
            <DropdownItem divider />
            <DropdownItem header>Extra</DropdownItem>
            <DropdownItem>Other Links</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <div className="section">
        
        </div>
      </div>
    );
  }
}

export default App;
