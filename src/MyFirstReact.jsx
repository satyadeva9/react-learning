import React from "react";

function Hello() {
    return <div>Hello React!</div>;
}

ReactDOM.render(
    <Hello/>,
    document.getElementById('mountNode'),
)

// document.getElementById('mountNode').innerHTML = 'Hello';