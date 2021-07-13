import React, { Component } from 'react';

export default class SocialIcon extends Component {
  render() {
    const link = this.props.link;
    return (
      <li>
        <a href={link.prefix + link.url} target="_blank" rel="noopener noreferrer">
          <i className={link.icon}/>
        </a>
      </li>
    );
  }
}