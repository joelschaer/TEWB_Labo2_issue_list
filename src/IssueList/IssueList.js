import React, { Component } from 'react';
import IssueItem from './IssueItem/issueItem'
import './IssueList.css';

import {issues} from '../IssueListData.js'


//Create component
class IssueList extends Component {
    render() {

        const issueList = issues.map((item, index) => {
            return (
                <IssueItem id={item.id} title={item.title} status={item.status} key={index} username={item.username} />
            )
        })
        return (
            <div className="issue-list">
                <div className="container new-discussion-timeline experiment-repo-nav">
                    
                    <div className="issues-listing">
                        <div className="border-right border-bottom border-left border-top">

                            {issueList}

                        </div>
                    </div>
                </div>
            </div>
        );
    }// render
}

export default IssueList;

