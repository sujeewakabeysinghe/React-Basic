import React from 'react';
import './style.css';

function style(props) {
    let className = props.className ? 'primary' : ''
    return (
        <div>
            {/* <h1 className='primary'>Style!</h1> regular way*/}
            {/* <h1 className={className}>Style!</h1> props with conditions*/}
            <h1 className={`${className} size`}>Style!</h1>
        </div>
    )
}

export default style
