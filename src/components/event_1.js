import React from 'react' //rfce

function event_1() {

    function clickHandler() {
        console.log('Click Event One!')
    }

    return (
        <div>
            <button onClick={clickHandler}>Event One!</button> {/*do not add () becase this is a function not a function call*/}
        </div>
    )
}

export default event_1
