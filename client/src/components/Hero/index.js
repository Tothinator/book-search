import React from "react";
import "./style.css";

function Hero({ children }) {
    return (
        <div className="jumbotron text-center">
            <div className="overlay"></div>
            <div className="background-image"></div>
            <div className="caption">
                <h1>Google Book Search</h1>
                { children }
            </div>
        </div>
    );
}

export default Hero;