import React, { Component } from 'react'

class lifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'John'
        }
        console.log('Life Cycle B constructor!');
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Life Cycle B getDerivedStateFromProps!')
        return null
    }

    componentDidMount(){
        console.log('Life Cycle B componentDidMount!')
    }

    render() {
        console.log('Life Cycle B render!')
        return (
            <div>
                <h1>Life Cycle B!</h1>
            </div>
        )
    }
}

export default lifeCycleB
