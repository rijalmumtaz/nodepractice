import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputNumber from "./index";

class TestInput extends React.Component{
    state = {
        value:""
    }
    handleChange = e => {
        this.setState({[e.target.name]:e.target.value})
    }
    render(){
        return (
            <InputNumber
            max={38}
            onChange={this.handleChange}
            name="value"
            value={this.state.value}
            />
        )

    }
}