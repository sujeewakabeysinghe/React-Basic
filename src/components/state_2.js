import React, { Component } from 'react' //rce

class state_2 extends Component {
    constructor(props) { //rconst
        super(props)
    
        this.state = {
             count:0
        }
    }
    increaseCount(){
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log('callback : '+this.state.count)
        }
        )
        console.log('synchronous : '+this.state.count)
    }
    
    render() {
        return (
            <div>
                <h1>State Two!</h1>
                <h1>Count : {this.state.count}</h1>
                <button onClick={()=>this.increaseCount()}>Increase Count!</button>
            </div>
        )
    }
}

export default state_2
