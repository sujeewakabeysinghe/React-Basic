import React, { Component } from 'react'
import PureComponent from './pureComponent'
import RegularComponent from './regularComponent'

class parentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sujeewa'
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Sujeewa'
            })
        },2000)
    }

    render() {
        console.log('Parent Component!')
        return (
            <div>
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureComponent name={this.state.name}></PureComponent>
            </div>
        )
    }
}

export default parentComponent
