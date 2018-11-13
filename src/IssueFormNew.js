import React, { Component } from 'react';
import './IssueFormNew.css';
import {addIssue} from './IssueListData.js'


// https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react
// TODO : hide forme



//Create component
class IssueFormNew extends Component {
    state = {
        title: '',
        username: '',
        description: ''
    }
    render() {
        return (
            <div className="issue-form-new">
                <div className="repository-content ">
                    <div className="issues-listing">
                        <form className="new_issue" id="new_issue" acceptCharset="UTF-8" onSubmit={this.submitIssue}>

                            <div className="new-issue-form">
                                <input onChange={this.titleChange} className="form-control pr-5 input-lg input-block input-contrast required title" placeholder="Title" aria-label="Title" required="required" type="text" name="title" id="title" value={this.state.title}/>
                            
                                <input onChange={this.descChange} className="form-control pr-5 input-lg input-block input-contrast required description" placeholder="Description" aria-label="Description" required="required" type="text" name="description" id="description" value={this.state.description}/>

                                <div className="write-content upload-enabled">
                                    <textarea onChange={this.descChange} name="issue_body" id="issue_body" placeholder="Leave a comment" aria-label="Comment body" className="form-control input-contrast comment-form-textarea"></textarea>
                                </div>

                                <div className="form-actions">
                                    <button type="submit" className="btn btn-primary">
                                    Submit new issue
                                    </button>
                                </div>
                            
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }// render


    titleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    descChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    
    submitIssue = (e) => {
        e.preventDefault();
        console.log(this.state);
        addIssue(this.state);
        this.props.showHideForm();
        this.resetState();
    }

    resetState = () => {
        this.setState({
            title: '',
            username: '',
            description: ''
        })
    }
}

export default IssueFormNew;