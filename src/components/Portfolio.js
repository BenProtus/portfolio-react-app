import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    const portfolio = this.props.portfolio;
    return(
      <section id="portfolio">
        <h2>
          <span>PORTFOLIO</span>
        </h2>
        {portfolio && portfolio.map(project => {
          return (
            <div className="row" key={project.title}>
              <div className="seven columns">
                {project.url.length > 0
                  ? <a href={project.url}>
                      <h4 className="hyperlink">
                        <span>{project.title} <i className="fa fa-link"/></span>
                      </h4>
                    </a>
                  : <h4>{project.title}</h4>
                }
                <p>{project.summary}</p>
              </div>

              <div className="three offset-by-one columns">
                {project.url.length > 0
                  ? <a href={project.url}><img src={project.img} alt={project.title + " pic"}/></a>
                  : <img src={project.img} alt={project.title + " pic"}/>
                }
              </div>
            </div>
          )
        })}
      </section>
    );
  }
}