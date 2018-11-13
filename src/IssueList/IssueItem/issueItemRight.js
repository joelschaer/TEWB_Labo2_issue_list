import React from 'react';
import { AccessAlarm, ThreeDRotation, HighlightOff } from '@material-ui/icons';

const IssueItemRight = ({ title }) => {
    return (
        <div className="issue-item-right float-right col-2">
      <div className="float-left col-7 pt-2 pr-3 text-right">

        <div className="AvatarStack AvatarStack--right ">
          <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-multiline tooltipped-align-right-1 mt-1" aria-label="Assigned to ">
          </div>
        </div>
      </div>

      <div className="float-right col-5 no-wrap pt-2 pr-3 text-right">
        <span className="muted-link" aria-label="1 comment">
          <span className="text-small text-bold"><HighlightOff/></span>
        </span>
      </div>
    </div>
    )
}

export default IssueItemRight;


