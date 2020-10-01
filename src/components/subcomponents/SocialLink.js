import React, { Component } from "react";

export default class SocialLink extends Component {
  render() {
    const link = this.props.link;
    return(
      <React.Fragment>
        <p>{link.name}: </p>
        <a key={link.name} href={link.url}>{link.url}</a>
      </React.Fragment>
    );
  }
}