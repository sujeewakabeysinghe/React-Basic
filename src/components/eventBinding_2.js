import React, { Component } from 'react' //rce

export class eventBinding_2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Event Binding Two!'
        }
    }
    
    clickHandler = () =>{
        this.setState({
            message:'Changed!'
        })
    } //there are four types to bind events

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.clickHandler}>Change Message</button>
            </div>
        )
    }
}

export default eventBinding_2
