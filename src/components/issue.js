import React from "react";
import { Link } from "react-router-dom";

const issue = ({issue}) => {
    console.log(issue)
    return (
        <div className='issue'>
            <h3 className='issue-title'># {issue.id}</h3>
            <p className='issue-description'>
                {issue.title}
            </p>
            <div className='issue-status bg-info px-3 py-2'>
                <span className='status-value'>{issue.status}</span>
            </div>
            <Link to={`/issues/${issue.id}`} className='btn btn-secondary'>
                View Issue
            </Link>
        </div>
    );
};

export default issue;
