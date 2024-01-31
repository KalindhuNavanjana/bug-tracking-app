import React, { useState } from "react";
import useAxios from "../hooks/useAxios";
import { useNavigate } from "react-router-dom";

const NewIssue = () => {
    const { makeRequest } = useAxios();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        type: "",
    });

    const createNewIssue = () => {
        console.log("createNewIssue", formData);
        makeRequest("post", "/issues", formData).then((data) => {
            console.log(data);
            setFormData({
                title: "",
                description: "",
                type: "",
            });
            navigate("/issues");
        });
    };

    return (
        <div className='new-issue-page page'>
            <div className='title'>
                <h1>New Issue</h1>
                <p>You can create a new issue here</p>
            </div>
            <div className='content'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        createNewIssue();
                    }}
                >
                    <div className='mb-3 form-group'>
                        <label htmlFor='title' className='form-label'>
                            Title
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='title'
                            maxLength='50'
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    title: e.target.value,
                                });
                            }}
                        ></input>
                    </div>
                    <div className='mb-3 form-group'>
                        <label htmlFor='description' className='form-label'>
                            Description
                        </label>
                        <textarea
                            className='form-control'
                            id='description'
                            rows='3'
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                });
                            }}
                        ></textarea>
                    </div>
                    <div className='mb-3 form-group'>
                        <label htmlFor='type' className='form-label'>
                            Type
                        </label>
                        <select
                            className='form-select'
                            aria-label='Default select example'
                            id='type'
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    type: e.target.value,
                                });
                            }}
                        >
                            <option selected disabled>Open this select menu</option>
                            <option value='Bug'>Bug</option>
                            <option value='Question'>Question</option>
                            <option value='Improvement'>Improvement</option>
                        </select>
                    </div>
                    <div className='form-group-actions'>
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewIssue;
