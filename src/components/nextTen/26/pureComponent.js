import React, { PureComponent } from 'react' //rpce - to create a pure component

class pureComponent extends PureComponent {
    render() {
        console.log('Pure Component!')
        return (
            <div>
                Pure Component! {this.props.name}
            </div>
        )
    }
}

export default pureComponent
