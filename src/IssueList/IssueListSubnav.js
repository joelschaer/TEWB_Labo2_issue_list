import React, { Component } from 'react';
import './IssueList.css';

//Create component
class IssueListSubnav extends Component {
  render() {
    return (
      <div className="issue-list-subnav">
        <div className="subnav" data-pjax="">
          <span  className="btn btn-primary float-right">
            New issue
          </span>
        </div>

      </div>
    );
  }// render

  handleNewIssueClick = () => {
    this.props.showHideForm();
  }
}

export default IssueListSubnav;