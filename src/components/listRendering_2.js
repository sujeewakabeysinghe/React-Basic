import React from 'react'
import Person from './person'

function listRendering_2() {

    const persons=[
        {
            id:1,
            name:'Diana',
            age:25
        },
        {
            id:2,
            name:'Alex',
            age:32
        },
        {
            id:3,
            name:'John',
            age:27
        }
    ]

    //const personList = persons.map(person=><h1>I'm {person.name}, {person.age} years old.</h1>)
    const personList = persons.map(person=><Person person={person}/>)

    return <div>{personList}</div>

}

export default listRendering_2
