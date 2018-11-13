import React from 'react';

import {Link} from 'react-router-dom'

const IssueItemContent = ({ id, title, username}) => {
    return (
        <div className="issue-item-content float-left col-9 lh-condensed p-2">

            <Link to={`/issue/${id}`}><span className="link-gray-dark v-align-middle no-underline h4">{title}</span></Link>
            <div className="mt-1 text-small text-gray">
                <span className="opened-by">
                    #{id} opened by {username}

                </span>

                <span className="issue-meta-section css-truncate issue-milestone ml-2">
                </span>
            </div>
        </div >
    )
}

export default IssueItemContent;

