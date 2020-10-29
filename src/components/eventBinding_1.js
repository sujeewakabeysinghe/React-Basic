import React, { Component } from 'react' //rce

class EventBinding_1 extends Component {

    constructor(props) { //rconst
        super(props)
    
        this.state = {
             message:'Event Binding One!'
        }
        this.clickHandler =this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Changed!'
        })
        console.log(this); //third way
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                {/*<button onClick={this.clickHandler.bind(this)}>Change Message</button>*/}
                {/*<button onClick={()=>this.clickHandler()}>Change Message</button> {/*second way*/}
                <button onClick={this.clickHandler}>Change Message</button> {/*third way*/}
            </div>
        )
    }
}

export default EventBinding_1
