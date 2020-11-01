import React from 'react'

function listRendering() {

    const names = ['John','Ann','David']
    const nameList = names.map(name=><h1>{name}</h1>)

    return <div>{nameList}</div>
}

export default listRendering
