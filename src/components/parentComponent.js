import React, { Component } from 'react'

class parentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent!'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(){
        alert(`I'm ${this.state.parentName}`) //template literals this is used instead concatination
    }
    

    render() {
        return (
            <div>
                <button onClick={this.greetParent}>Alert!</button>
            </div>
        )
    }
}

export default parentComponent
