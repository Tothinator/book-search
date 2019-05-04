import React from "react";
import "./style.css";

function SaveBtn(props) {
    return(
        <button className="btn btn-success" {...props}>Save Book</button>
    )
}

export default SaveBtn;