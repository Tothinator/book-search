import React from "react";
import "./style.css";

function Card({ title, subTitle, bodyText, link, image, children }) {
    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-2">
                    <img className="img-fluid" src={image} alt={title} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <div className="card-header">{title}</div>
                        <h6 className="card-title">By: {subTitle.join(" ")}</h6>
                        <p className="card-text">{bodyText}</p>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;