import React, { Component } from 'react'
import '../../styled/App.css';
// import styled from 'styled-components'

// import react from 'react';
// import ReactDOM from 'react-dom';
// import GlobalStyle from '../ListItem/Global.styles';
// import Show from '../ListItem/Show.view';
import { 
    MainList, VolUme, SideNav, ItemP, HeadFive, SubHead,
    Box, Green, HeadFour, PlayBtn, LisTItem
 } from './ListItem.styles';
// import NavBar from '../Global/NavBar';
// import Links from '../Global/Links';

export default  class ListItem extends Component {
    state = {

    }
    render() {

        return (
            <MainList>
                <LisTItem>
                    <PlayBtn>Play</PlayBtn>
                    <HeadFour>Narcos: Mexico</HeadFour>
                    
                        <SubHead>
                            <Green>99% Match</Green>
                            <Box>18+</Box>
                            <HeadFive>1 Season</HeadFive>
                        </SubHead>
                    <ItemP>Corruption made a drug kingpin untouchable -- until a </ItemP>
                    <ItemP>Dogged DEA agent threatens to topple his empire.</ItemP>
                </LisTItem>
                <SideNav>
                    <VolUme>Vol</VolUme>
                    <VolUme>Like</VolUme>
                    <VolUme>Dis</VolUme>
                    <VolUme>+</VolUme>
                </SideNav>

            </MainList>
        )
    }
}


 