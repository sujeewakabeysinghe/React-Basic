import React from 'react'

function Props(props) {
    console.log(props);
    return (
        <h1>{props.name}</h1>
    )
}

export default Props;