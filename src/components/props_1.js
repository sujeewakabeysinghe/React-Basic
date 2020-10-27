import React from 'react'

//function Props_1(props) {
//    console.log(props);
//    return (
//        <h1>Props {props.name}!</h1>
//    )
//s}

//function Props_1({name}) { //second way
//    return (
//        <h1>Props {name}!</h1>
//    )
//}

function Props_1(props) { //third way
    const {name} = props //{name, address, school} when you have more than one
    return (
        <h1>Props {name}!</h1>
    )
}

export default Props_1;