import React, { Component } from 'react';
// import {
//     Box,
//     Input,
//     InputBox,
//     WhiteTitle
// } from './styles';
import * as c from '../../common/styled.components';
import { Subtitle } from '../../common/styled.components';


export default class Name_input extends Component {

    state = { your_name : ''}

    update_answer = (event) => {
        console.log(event.target);
        this.setState({ your_name : event.target.value })
    }
    render() {
        return (
            <s.Box>
                <s.InputBox>
                    <Subtitle>What is your name?</Subtitle>
                    <s.Input type="text"
                            placeholder="Your name here..."
                            onChange={ this.update_answer } />
                </s.InputBox>
                <s.WhiteTitle>Your input:     {this.state.your_name}</s.WhiteTitle>
            </s.Box>
        );
    }
}
