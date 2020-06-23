import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
    render() {
        return (
            <div className="row">
                <input className="calculator__input" value = {this.props.value} 
                onChange={this.props.handleChange} autoFocus={true}/>
            </div>
        )
    }
}

export { Input }