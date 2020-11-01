import React, { Component } from 'react';
import ChildComponent from './childComponent';

class parentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent!'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    //greetParent(){
    //    alert(`I'm ${this.state.parentName}`) //template literals this is used instead concatination
    //}
    
    greetParent(child){ //to receive a parameter
        alert(`I'm from ${child}`) //template literals this is used instead concatination
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandlerProps={this.greetParent}/>
            </div>
        )
    }
}

export default parentComponent
