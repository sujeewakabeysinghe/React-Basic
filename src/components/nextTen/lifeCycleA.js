import React, { Component } from 'react'

class lifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'John'
        }
        console.log('Life Cycle A constructor!');
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Life Cycle A getDerivedStateFromProps!')
        return null
    }

    componentDidMount(){
        console.log('Life Cycle A componentDidMount!')
    }

    render() {
        console.log('Life Cycle A render!')
        return (
            <div>
                <h1>Life Cycle A!</h1>
            </div>
        )
    }
}

export default lifeCycleA
