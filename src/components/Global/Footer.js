import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render(){
        return (
            <List>
                <ListHead>Gmail link</ListHead>
                <ListHead>Linkedin link</ListHead>
                <ListHead>GitHub link</ListHead>
                <ListHead>Portfolio link</ListHead>
            </List>
        )
    }
}


const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -100;
    /* border: 1px solid red; */
    width: 100%;
`; 
const ListHead = styled.div`
    width: 100%;
    display: flex;
    margin: 2vw;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: grey;

    &:hover {
        color: #fff;
    }
    @media all and (min-width: 500px) {
        margin: 5vw;
        font-size: 9px;
    }
    @media all and (min-width: 800px) {
        margin: 6.5vw;
        font-size: 13px;
    }
    @media all and (min-width: 1100px) {
        margin: 8vw;
        font-size: 18px;
    }
    @media all and (min-width: 1400px) {
        margin: 8vw;
        font-size: 22px;
    }
`;