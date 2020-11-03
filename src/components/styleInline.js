import React from 'react'

const style = {
    color:'cornflowerblue',
    fontSize:'30px' //same css property as camel case
}

function styleInline() {
    return (
        <div>
            <h1 style={style}>Style Inline!</h1>
        </div>
    )
}

export default styleInline
