import React, { Component } from 'react'

class State_1 extends Component{
    constructor(){
        super()
        this.state={
            message:'State One!'
        }
    }
    changeMessage(){
        this.setState({
            message:'State Changed!'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Change State!</button>
            </div>
        )
    }
}

export default State_1;