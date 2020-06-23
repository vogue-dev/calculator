import React, { Component } from 'react'
import './Button.css'

class NumberButton extends Component {
    render() {
        return (
            <button className="calculator__btn" value={this.props.value} onClick={e => this.props.btnClick(e)} >{this.props.value}</button>
        )
    }
}

export { NumberButton }