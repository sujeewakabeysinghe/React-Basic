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
    const personList = persons.map(person=><Person key={person.id} person={person}/>) //when generating a list usign map, there shoud be a unique value assing to key props if not it will gives a warning message in inspect

    return <div>{personList}</div>

}

export default listRendering_2
