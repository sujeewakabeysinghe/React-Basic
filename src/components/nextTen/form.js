import React, { Component } from 'react'

class form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userName:'',
             comment:'',
             topic:'React'
        }
    }

    handleUserNameChange = event =>{
        this.setState({
            userName: event.target.value
        })
    }
    handleCommentChange = event =>{
        this.setState({
            comment: event.target.value
        })
    }
    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault() //this will stop refreshing browser after submitting
    }

    render() {
        const {userName,comment,topic} = this.state //destructuring states
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name : </label>
                    <input type='Text' value={userName} onChange={this.handleUserNameChange}/>
                </div>
                <div>
                    <label>Comment : </label>
                    <textarea value={comment} onChange={this.handleCommentChange}/>
                </div>
                <div>
                    <label>Topic : </label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='Angular'>Angular</option>
                        <option value='React'>React</option>
                        <option value='Vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit!</button>
            </form>
        )
    }
}

export default form
