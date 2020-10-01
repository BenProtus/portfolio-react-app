import React, { Component } from 'react';
import SocialLink from "./subcomponents/SocialLink";

export default class Contact extends Component {
  render() {
    const resume = this.props.resume;
    return(
      <section id="contact">
        <div className="row">
          <div className="seven columns">
            <h2>
              <span>Get in touch.</span>
            </h2>
            <div className="contact-text">
              <p>Want to work with me? Awesome!</p>
              <p>You can reach me via email or LinkedIn and I will respond ASAP.</p>
              <p>You can also check out some of my other work on GitHub.</p>
              <p>Cheers!</p>
            </div>
          </div>
          <div className="five columns">
            <h4>Where to reach me:</h4>
            <div className="contact-details">
              <p>Email: </p>
              <a href="mailto:ben@benprotus.com">{resume.email}</a>
              {resume.socialLinks.map(link =>
                <SocialLink key={link.name} link={link} />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}