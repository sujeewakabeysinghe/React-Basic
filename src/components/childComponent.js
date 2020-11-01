import React from 'react'  //rfces

function childComponent(props) {
    return (
        <div>
            {/*<button onClick={props.greetHandlerProps}>Child Button</button>*/}
            <button onClick={()=>props.greetHandlerProps('Child!')}>Child Button</button> {/*to pass a parameter*/}
        </div>
    )
}

export default childComponent