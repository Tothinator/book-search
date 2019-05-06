import React from "react";
import "./style.css";

function DeleteBtn({ onClick }) {
    return(
        <button className={`delete btn btn-danger`} onClick={onClick}>Delete</button>
    )
}

export default DeleteBtn;