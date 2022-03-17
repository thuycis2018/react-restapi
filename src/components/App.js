import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import Side from './News/Side';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'top-headlines',
        query: 'country=us&category=business'
      },
      news3: {
        type: 'everything',
        query: 'q=biotech'
      }
    };
  }

  render() {
    return (      
      <div className="container py-4">
        <header>
      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <strong>Julia Le</strong>
          </a>
          
        </div>
      </div>
    </header>

        <main role="main">

          <section className="jumbotron text-center">
            <div className="container">
              <h1 className="jumbotron-heading">React REST API</h1>
              <p className="lead text-muted">This site is built using React REST API and pull data from https://earthquake.usgs.gov/.</p>
              <p>
                <a href="https://github.com/thuycis2018/react-restapi" title="GitHub Project" className="btn btn-secondary my-2">GitHub Project</a>
              </p>
            </div>
          </section>

          <div className="album py-5 bg-light">
            <h1>Earthquakes</h1>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <News news={this.state.news1} />
                </div>
                
              </div>
            </div>
          </div>
        

        </main>

        <footer className="text-muted">
          <div className="container">
            <p className="float-right">
              <a href="/">Back to top</a>
            </p>
            <p>2022 Julia Le</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
