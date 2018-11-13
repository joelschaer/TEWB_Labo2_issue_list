import React, { Component } from 'react';
import IssueItemContent from './issueItemContent';
import IssueItemStatus from './issueItemStatus';
import IssueItemRight from './issueItemRight';

import './issueItem.css'

//Create component
class IssueItem extends Component {
    state={
        id: this.props.id,
        title: this.props.title,
        status: this.props.status,
        username: this.props.username
    }
    render() {
        return (
            <div className=" issue-item Box-row Box-row--focus-gray p-0" aria-selected="false">
                <div className="d-table table-fixed width-full Box-row--drag-hide position-relative">

                    <IssueItemStatus status={this.state.status} />

                    <IssueItemContent id={this.state.id} title={this.state.title} username={this.state.username}/>

                    <IssueItemRight />

                </div>
            </div>
        );
    }// render
}

export default IssueItem;

