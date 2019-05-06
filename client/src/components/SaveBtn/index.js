import React from "react";
import "./style.css";

function SaveBtn({ onClick, saved}) {
    return(
        <button className={`save btn btn-${saved ? "danger" : "success"}`} onClick={onClick}>{saved ? "Book Saved" : "Save Book"}</button>
    )
}

export default SaveBtn;