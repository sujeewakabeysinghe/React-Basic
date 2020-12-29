import React, { Component } from 'react'

class regularComponent extends Component {
    render() {
        return (
            <div>
                Regular Component! {this.props.name}
            </div>
        )
    }
}

export default regularComponent
