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
`; 
const ListHead = styled.div`
    display: flex;
    margin: 8vw;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    color: grey;

    &:hover {
        color: #fff;
    }
`;