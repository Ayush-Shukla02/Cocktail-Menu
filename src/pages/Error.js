import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <secition className="section error-page">
            <div className="error-container">
                <h1>Oops! Its a dead end buddy.</h1>
                <Link to="/" className="btn btn-primary">
                    Go back Home
                </Link>
            </div>
        </secition>
    );
};

export default Error;
