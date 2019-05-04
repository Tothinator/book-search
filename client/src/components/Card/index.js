import React from "react";
import "./style.css";

function Card({ title, subTitle, bodyText, link, image, children }) {
    return (
        <div className="scene">
            <div className="card mb-3 no-gutters">
                <div className="card-face card-front">
                    <div className="card-image">
                        <img className="img-fluid" src={image} alt={title} />
                    </div>
                    <div className="card-body">
                        <div className="card-header">{title}</div>
                        <h6 className="card-title">By: {subTitle.join(" ")}</h6>
                        <div className="save-btn">
                            { children }
                        </div>
                    </div>
                </div>
                <div className="card-face card-back">
                    <h5 className="description">Description</h5>
                    <p className="card-text">{bodyText}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;