import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NumberButton } from './components/Button'
import { Input } from './components/Input'
import './style.css'

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: Number(''),
            firstValue: Number(''),
        };
        // this.btnClick = this.btnClick.bind(this)
    }
    
    handleChange = (e) => { 
        this.setState({ value: e.target.value }) 
    }

    reset = (e) => {
        e.preventDefault();
        this.setState({value: Number('')})
    }

    revers = (e) => {
        e.preventDefault();
        this.setState(({ value }) => ({value: - value }))
    }

    plus = (e) => {
        e.preventDefault();
        this.setState({ value: Number(''), firstValue: Number(this.state.value) })
    }

    equal = (e, firstValue) => {
        e.preventDefault();
        this.setState({ value: this.state.value + Number(firstValue) })
    }

    percent = (e) => {
        e.preventDefault();
        this.setState({value: this.state.value / 100  })
    }

    btnClick = (e) => {
        e.preventDefault();
        const value = e.target.value;
        this.setState({ value: Number(this.state.value + value)})
    }

    render(firstValue) {
        console.log([this.state, firstValue])
        return (
            <div className="calculator">
                <form className="calculator__form">
                    <div className="controller__btn">
                        <button className="exit__btn">×</button>
                        <button className="hide__btn">-</button>
                        <button className="max__btn">+</button>
                    </div>
                    <Input value={this.state.value} handleChange={this.handleChange} />
                    <div className="row">
                        <button className="calculator__btn" onClick={this.reset}>AC</button>
                        <button className="calculator__btn" onClick={this.revers}>+/-</button>
                        <button className="calculator__btn" onClick={this.percent}>%</button>
                        <button className="calculator__btn">÷</button>
                    </div>
                    <div className="row">
                        <NumberButton value={7} btnClick={this.btnClick} />
                        <NumberButton value={8} btnClick={this.btnClick}/>
                        <NumberButton value={9} btnClick={this.btnClick}/>
                        <button className="calculator__btn">×</button>
                    </div>
                    <div className="row">
                        <NumberButton value={4} btnClick={this.btnClick}/>
                        <NumberButton value={5} btnClick={this.btnClick}/>
                        <NumberButton value={6} btnClick={this.btnClick}/>
                        <NumberButton value="-" btnClick={this.btnClick}/>
                    </div>
                    <div className="row">
                        <NumberButton value={1} btnClick={this.btnClick}/>
                        <NumberButton value={2} btnClick={this.btnClick}/>
                        <NumberButton value={3} btnClick={this.btnClick}/>
                        <button className="calculator__btn" onClick={this.plus}>+</button>
                    </div>
                    <div className="row">
                        <NumberButton value={0} btnClick={this.btnClick}/>
                        <NumberButton value="," btnClick={this.btnClick}/>
                        <button className="calculator__btn" onClick={this.equal}>=</button>
                    </div>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'))