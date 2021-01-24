import React, { Component } from 'react'

class refcComponent extends Component {
    constructor(props) {
        console.log("Constructor")
        super(props)
        this.inputRef=React.createRef()
        console.log(this.inputRef)
    }
    
    componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef) 
    }

    myHaddler=()=>{
        alert(this.inputRef.current.value)
        this.inputRef=this.inputRef.current.value
    }
    
    render() {
        console.log("Render")
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <br></br>
                <button onClick={this.myHaddler}>Click</button>
            </div>
        )
    }
}

export default refcComponent
