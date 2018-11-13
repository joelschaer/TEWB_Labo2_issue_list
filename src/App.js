import React, { Component } from 'react';
import './App.css';
import './github.css'
import './frameworks.css'

import IssueListPage from './pages/IssueListPage';
import IssuePage from './pages/IssuePage';

import { BrowserRouter, Route } from 'react-router-dom'


class App extends Component {
  constructor() {
    super();
    this.log = this.log.bind(this);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="application-main ">
            <div className="repository-content">
              <div className="container new-discussion-timeline experiment-repo-nav  ">

                <Route exact path='/' component={IssueListPage} addIssue={this.addIssue} />
                <Route exact path='/issue/:id' component={IssuePage} />

              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  } // render

  // https://github.com/kriasoft/react-starter-kit/issues/909

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);
  }

  log() {
    console.log('hello');
  }
}

export default App;
