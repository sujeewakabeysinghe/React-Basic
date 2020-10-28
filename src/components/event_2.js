import React, { Component } from 'react' //rce

class event_2 extends Component { //removed the export

    clickHandler(){
        console.log('Click Event Two!');
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Event Two!</button> {/*here use this keyword since this is the class component*/}
            </div>
        )
    }
}

export default event_2
