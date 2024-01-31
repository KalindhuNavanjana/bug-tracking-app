import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className="welcome-page page">
            <h1>
                Welcome to the Bug Tracker
            </h1>
            <p>
                This is a simple bug tracker that allows you to create, edit, and delete issues.
            </p>

            <Link to="/issues" className='btn btn-primary'>
                Get Started Now
            </Link>
        </div>
    );
};

export default Welcome;
