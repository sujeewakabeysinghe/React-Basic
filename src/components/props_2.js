import React from 'react'

const Props_2 = (props) => {
    console.log(props);
    console.log(props.componentName)
    return (
        <div>
            <h1>{props.componentName} {props.name}!</h1>
            <h1>{props.children}</h1>
        </div>
    )
}

export default Props_2;