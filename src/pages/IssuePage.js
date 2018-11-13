import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './IssuePage.css';

import Button from '../elements/Button'

import {getIssue} from '../IssueListData.js'


//Create component
class IssuePage extends Component {
    render() {
        const issue = getIssue(this.props.match.params.id);
        // eslint-disable-next-line
        if(issue == null){
            return <Redirect to='/' />
        }

        return (
            <div className="issue-page">

            <div className="mt-6 mb-4">  

                <div className="timeline-comment-group js-minimizable-comment-group js-targetable-comment">
                    <div className="unminimized-comment comment previewable-edit js-comment js-task-list-container timeline-comment reorderable-task-lists">
                        <div className="timeline-comment-header clearfix">


                            <h3 className="timeline-comment-header-text f5 text-normal">
                                {issue.title} by {issue.username}
                            </h3>
                        </div>


                        <div className="edit-comment-hide">


                            <task-lists disabled="" sortable="">
                                <table className="d-block">
                                    <tbody className="d-block">
                                        <tr className="d-block">
                                            <td className="d-block comment-body markdown-body  js-comment-body">

                                                <p>{issue.description}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </task-lists>


                        </div>

                    </div>

                </div>
            </div>

            <div className="mb-4">  
                <Link to="/"><Button postion={"float-right"}>Back</Button></Link>
            </div>
            </div>
        );
    }// render
}

export default IssuePage;