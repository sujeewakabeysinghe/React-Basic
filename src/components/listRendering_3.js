import React from 'react'

function listRendering_3() {
    const names = ['John','Ann','David']
const nameList = names.map((name, index)=><h1 key={index}>{index} {name}</h1>)

    return <div>{nameList}</div>
}

export default listRendering_3
