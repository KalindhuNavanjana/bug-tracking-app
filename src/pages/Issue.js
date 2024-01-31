import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Spinner from "../components/spinner";

const Issue = () => {
    const IssueId = useParams().id;
    const { makeRequest, loading } = useAxios();
    const [issue, setIssue] = useState({
        id: "",
        title: "",
        description: "",
        status: "",
        type: "",
    });

    useEffect(() => {
        makeRequest("get", `/issues/${IssueId}`).then((data) => {
            console.log(data);
            setIssue(data);
        });
    }, []);

    const startProgress = () => {
        makeRequest("patch", `/issues/${IssueId}`, {
            status: "In-Progress",
        }).then((data) => {
            console.log(data);
            setIssue(data);
        });
    };

    const requestClientResponse = () => {
        makeRequest("patch", `/issues/${IssueId}`, {
            status: "Waiting on client",
        }).then((data) => {
            console.log(data);
            setIssue(data);
        });
    };

    const resolve = () => {
        makeRequest("patch", `/issues/${IssueId}`, {
            status: "Resolved",
        }).then((data) => {
            console.log(data);
            setIssue(data);
        });
    };

    return (
        <div className='issue-page'>
            <div className='title'>
                <div className='me-auto'>
                    <h3>Issue: #{issue.id}</h3>
                    <h1>{issue.title}</h1>
                </div>
                {issue.status === "Open" && (
                    <div className='issue-status bg-info px-3 py-2'>
                        <span className='status-value'>Open</span>
                    </div>
                )}
                {issue.status === "In-Progress" && (
                    <div className='issue-status bg-warning px-3 py-2'>
                        <span className='status-value'>In Progress</span>
                    </div>
                )}
                {issue.status === "Waiting on client" && (
                    <div className='issue-status bg-light text-dark px-3 py-2'>
                        <span className='status-value'>Waiting on client</span>
                    </div>
                )}
                {issue.status === "Resolved" && (
                    <div className='issue-status bg-success px-3 py-2'>
                        <span className='status-value'>Resolved</span>
                    </div>
                )}
                {issue.type === "Bug" && (
                    <div className='issue-type bg-danger px-3 py-2'>
                        <span className='type-value'>{issue.type}</span>
                    </div>
                )}
                {issue.type === "Question" && (
                    <div className='issue-type bg-primary px-3 py-2'>
                        <span className='type-value'>{issue.type}</span>
                    </div>
                )}
                {issue.type === "Improvement" && (
                    <div className='issue-type bg-secondary px-3 py-2'>
                        <span className='type-value'>{issue.type}</span>
                    </div>
                )}
            </div>
            <hr />
            <div className='content'>
                <p className='issue-description'>{issue.description}</p>

                {loading ? (
                    <Spinner/>
                ):(
                    <div className='issue-actions'>
                    {(issue.status === "Open" ||
                        issue.status === "Waiting on client") && (
                        <button
                            className='btn btn-warning'
                            onClick={startProgress}
                        >
                            Start Progress
                        </button>
                    )}
                    {issue.status === "In-Progress" && (
                        <button
                            className='btn btn-primary'
                            onClick={requestClientResponse}
                        >
                            Request Client Response
                        </button>
                    )}
                    {(issue.status === "In-Progress" ||
                        issue.status === "Waiting on client") && (
                        <button className='btn btn-success' onClick={resolve}>
                            Resolve
                        </button>
                    )}
                </div>
                )}
            </div>
        </div>
    );
};

export default Issue;
