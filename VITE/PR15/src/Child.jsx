import React from "react";

function Child(props) {
    return (
        <div>
            <h1>Baccha Component</h1>

            <button onClick={() => props.sendData("assalam u alikum from child ")}>Touch Me</button>
        </div>
    );
}

export default Child;