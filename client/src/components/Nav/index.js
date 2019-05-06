import React from "react";
import { Link } from "react-router-dom"
import "./style.css";

function Nav() {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/" className={window.location.pathname === "/" ? "navbar-brand" : "nav-link"}>
                    Google Book Search
                </Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
                            Search
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className={window.location.pathname === "/" ? "nav-link" : "nav-link"}>
                            Saved
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;