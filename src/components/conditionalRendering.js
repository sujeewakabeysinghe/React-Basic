import React, { Component } from 'react'

class conditionalRendering extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLogged:true
        }
    }
    

    render() {

        return this.state.isLogged && <div><h1>You are in!</h1></div>

        // return this.state.isLogged ?
        // <div><h1>You are in!</h1></div> :
        // <div><h1>You are not in!</h1></div>

        // element variable approach
        // let message
        // if(this.state.isLogged){
        //     message=<div><h1>You are in!</h1></div>
        // }
        // else{
        //     message=<div><h1>You are not in!</h1></div>
        // }
        // return <div>{message}</div>


        // if else
        // if(this.state.isLogged){
        //     return <div><h1>You are in!</h1></div>
        // }
        // else{
        //     return <div><h1>You are not in!</h1></div>
        // }
    }
}

export default conditionalRendering
