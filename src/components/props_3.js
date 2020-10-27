import React, { Component } from 'react'

//class Props_3 extends Component{
//    render(){
//        return <h1>Props {this.props.name}</h1>
//    }
//}

class Props_3 extends Component{ //second way
    render(){
        const {name} = this.props
        //const {state1, statet2} = this.state
        //states also similar as props
        return <h1>Props {name}</h1>
    }
}

export default Props_3;