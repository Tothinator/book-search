import React from "react";
import "./style.css";

function SaveBtn({ onClick, saved}) {
    return(
        <button className={`btn btn-${saved ? "disabled" : "success"}`} onClick={onClick}>{saved ? "Book Saved" : "Save Book"}</button>
    )
}

export default SaveBtn;