import React, { Component } from 'react';
import { Link } from 'react-scroll';
import SocialIcon from "./subcomponents/SocialIcon";
export default class Header extends Component {
  constructor() {
    super();
    this.state = { screenHeight: 800 }
  }

  componentDidMount() {
    this.setState({ screenHeight: document.documentElement.clientHeight });
  }

  render() {
    const resume = this.props.resume;
    const headerStyle = { height: this.state.screenHeight }
    return (
      <header id="home" style={headerStyle}>
        <div id="introduction">
          <div id="intro-text">
            <h1>I'm {resume.name}.</h1>
            <h3>I am a {resume.currentRole}. {resume.roleDescription}</h3>
          </div>

          <ul className="social">
            {resume.socialLinks.map(link => {
              return <SocialIcon link={link} key={link.name} />;
            })}
          </ul>
        </div>

        <p id="scroll-down">
          <Link to="about"
                activeClass="active"
                spy={true}
                smooth={true}>
            <i className="fa fa-angle-down"/>
          </Link>
        </p>
      </header>
    );
  }
}