import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Issue from "../components/issue";
import useAxios from "../hooks/useAxios";
import Spinner from "../components/Spinner";

const Issues = () => {
    const { loading, error, makeRequest } = useAxios();
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        makeRequest("get", "/issues").then((data) => {
            console.log(data);
            setIssues(data);
        });
    }, [makeRequest]);
    return (
        <div className='issues-page page'>
            <div className='title'>
                <h1>Issues</h1>
                <p>You can view the list of issues here</p>
            </div>
            <div className='content'>
                {loading && (
                    <Spinner/>
                )}
                {error && <p>{error.message}</p>}
                {issues.map((issue) => (
                    <Issue key={issue.id} issue={issue} />
                ))}
            </div>
        </div>
    );
};

export default Issues;
