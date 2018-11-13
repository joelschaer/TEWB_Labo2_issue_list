import React, { Component } from 'react';
import './IssuePage.css';

import IssueList from '../IssueList/IssueList';
import IssueFormNew from '../IssueFormNew';

import Button from '../elements/Button'

//Create component
class IssueListePage extends Component {
  state = {
    formHidden: true
  }
  render() {
    return (
      <div className="issue-list-page">
        <div className="Sissues-listing">

        <div className="mt-6 mb-4">  
          <IssueList/>
        </div>

        <div className="mb-4">  
          <Button onClick={this.showHideForm} position={'float-right'}>New Issue</Button>
        </div>

        <div className="mb-4">  
          <div className={this.state.formHidden ? 'hidden' : ''}>
            <IssueFormNew showHideForm={this.showHideForm}/>
          </div>
        </div>
        </div>
      </div>
    );
  } // render

  log() {
    console.log('hello');
  }

  showHideForm = () => {
    this.setState({
      formHidden: !this.state.formHidden
    })
  }

}
export default IssueListePage;