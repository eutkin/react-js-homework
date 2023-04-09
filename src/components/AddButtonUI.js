import React from "react";

function AddButtonUI({onClick}) {
    return (
        <div>
            <button onClick={onClick}>+</button>
        </div>
    )
}

export default AddButtonUI