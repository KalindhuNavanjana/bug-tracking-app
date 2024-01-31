import React from "react";

const Spinner = () => {
    return (
        <div>
            <div
                className='spinner-grow'
                style={{
                    width: "3rem",
                    height: "3rem",
                    margin: "2rem",
                }}
            >
                <span className='visually-hidden'>Loading...</span>
            </div>
            <div
                className='spinner-grow'
                style={{
                    width: "3rem",
                    height: "3rem",
                    margin: "2rem",
                }}
            >
                <span className='visually-hidden'>Loading...</span>
            </div>
            <div
                className='spinner-grow'
                style={{
                    width: "3rem",
                    height: "3rem",
                    margin: "2rem",
                }}
            >
                <span className='visually-hidden'>Loading...</span>
            </div>
        </div>
    );
};

export default Spinner;
