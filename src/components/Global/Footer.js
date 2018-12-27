import React, { Component } from 'react';
import styled from 'styled-components';

export default class Footer extends Component {
    render(){
        return (
            <List>
                <ListHead>List 1</ListHead>
                <ListHead>List 2</ListHead>
                <ListHead>List 3</ListHead>
                <ListHead>List 4</ListHead>
            </List>
        )
    }
}


const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -100;
`; 
const ListHead = styled.div`
    display: flex;
    margin: 4vw;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: grey;

    &:hover {
        color: #fff;
    }
    @media all and (min-width: 500px) {
        margin: 5vw;
        font-size: 19px;
    }
    @media all and (min-width: 800px) {
        margin: 6.5vw;
        font-size: 23px;
    }
    @media all and (min-width: 1100px) {
        margin: 8vw;
        font-size: 28px;
    }
    @media all and (min-width: 1400px) {
        margin: 8vw;
        font-size: 28px;
    }
`;