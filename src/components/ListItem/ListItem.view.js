import React from 'react'
import '../../styled/App.css';
// import styled from 'styled-components'

// import react from 'react';
// import ReactDOM from 'react-dom';
// import GlobalStyle from '../ListItem/Global.styles';
// import Show from '../ListItem/Show.view';
import styled, { keyframes } from 'styled-components';
// import { lighten } from 'polished';
// import { 
//     MainList, VolUme, SideNav, ItemP, HeadFive, SubHead,
//     Box, Green, HeadFour, PlayBtn, LisTItem
//  } from './ListItem.styles';
// import NavBar from '../Global/NavBar';
// import Links from '../Global/Links';


const scale_duration = "400ms";
const scale_delay = "150ms";
const scale_ease = "cubic-bezier(0.63, 0.04, 0.49, 0.99)";
const wire_grey = '#999';

const FADE_IN = keyframes`
 0% {opacity: 0;}
 100% {opacity: 1;}
`;
const FADE_OUT = keyframes`
 0% {opacity: 1;}
 100% {opacity: 0;}
`;

export default class Slide extends React.Component {
    state = {
        fade_duration: scale_duration,
        fade_anim: null
        // data: []
    };

    // async componentDidMount() {
    //     const res = await fetch('./MOCK_DATA.json')
    //     const data = await res.json();
    //     this.setState({ 
    //       data 
    //     })
    //     console.log(data)
    //   }

    timeout = null;
    move_timeout = null;

    mouseEnter = e => {
        this.short_fade_in();
        clearTimeout(this.timeout);
        this.timeout = setTimeout(this.long_fade_out, 2000);
    }
    mouseLeave = e => {
        clearTimeout(this.timeout);
        clearTimeout(this.move_timeout);
        this.move_timeout = null;
        this.short_fade_out();
    }
    mouseMove = e => {
        if(!this.move_timeout) {
            this.short_fade_in();
            this.move_timeout = setTimeout(() => {
                this.move_timeout = null;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(this.long_fade_out, 2000);
            }, 300);
        }
    };

    short_fade_in = () => {
        this.setState({
            fade_duration: '550ms',
            fade_anim: FADE_IN
        });
    };
    short_fade_out = () => {
        this.setState({
            fade_duration: '400ms',
            fade_anim: FADE_OUT
        });
    };
    long_fade_out = () => {
        this.setState({
            fade_duration: '4000ms',
            fade_anim: FADE_OUT
        });
    };

    render() {

        return (
            <Box
            onMouseEnter={this.mouseEnter}
            onMouseLeave={this.mouseLeave}
            onMouseMove={this.mouseMove}
            >
                <IMG src={'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYpnH2rHc9RGS-sagro81a3NWMBcLimQQsPSLkBIhSwUxGicy8me0Rx_j9Q-W6I_HQr30gtqb-w0nq6qjxoZp8sH1T8O6MijAE6Y9XE1awNoS3y6HC8PfNFsEiG2ewRvD19JSs9xJQ.jpg'}/>
                <Summary
                    anim={this.state.fade_anim}
                    duration={this.state.fade_duration}
                >
                    <Play><IMG src='https://img.icons8.com/color/50/000000/play.png'/></Play>
                    <Title>Ozark</Title>
                    <Details>Watch Season 1 Now</Details>
                    <Descrition>Desperate times call for family unity. Now family night means stacking millions in drug cash inside a cabin's walls..</Descrition>
                </Summary>
                <CirclesBox
                    anim={this.state.fade_anim}
                    duration={this.state.fade_duration}
                >
                    {/* <Circle><IMG src='https://img.icons8.com/color/48/000000/mute.png'/></Circle> */}
                    <Circle><IMG src='https://img.icons8.com/color/48/000000/medium-volume.png'/></Circle>
                    <Circle><IMG src='https://img.icons8.com/ios-glyphs/48/000000/thumb-up.png'/></Circle>
                    <Circle><IMG src='https://img.icons8.com/ios-glyphs/48/000000/thumbs-down.png'/></Circle>
                    <Circle><IMG src='https://img.icons8.com/ios/48/000000/plus-math-filled.png'/></Circle>
                </CirclesBox>
            </Box>
        );
    }
}

const Title = styled.div`
    /* background-color: ${wire_grey}; */
    color: white;
    font-size: 11px;
    width: 60px;
    height: 14px;
`;
const Details = styled.div`
    /* background-color: ${wire_grey}; */
    color: white;
    font-size: 9px;
    width: 120px;
    height: 8px;
`;
const Descrition = styled.div`
    /* background-color: ${wire_grey}; */
    color: white;
    font-size: 7px;
    width: 160px;
    height:15px;
`;
const Summary = styled.div`
    /* border: grey dashed 1px; */
    position: absolute;
    right: 1.2rem;
    bottom: 1.2rem;
    margin-right: 40px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    opacity: 0;
    animation: ${p => p.anim} ${p => p.duration} forwards;
`;
const CirclesBox = styled.div`
    /* border: grey dashed 1px; */
    position: absolute;
    right: 1.2rem;
    bottom: .5rem;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    animation: ${p => p.anim} ${p => p.duration} forwards;
`;
const Circle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #fff;
    /* background-color: white; */
    opacity: 0.6;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Play = styled(Circle)`
    /* border: 1px solid #fff; */
    width: 22px;
    height: 22px;
`;
const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    margin-top: 100px;
    margin-left: 600px;
    width: 238px;
    height: 132px;
    /* object-fit: fill; */
    
    /* object-position: center; */
    border: #333 1px solid;
    cursor: pointer;
    transform-origin: top center;
    transition: transform ${scale_duration} ${scale_ease} ${scale_delay};

    &:hover {
        transform: scale3d(1.4, 1.4, 1.4);
    }
`;
const IMG = styled.img`
    background-size: 100;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    @media all and (min-width: 1260px) {
        height: 100%;
        width: 100%; 
    }
`;




 
// <LisTItem>
//     <PlayBtn>Play</PlayBtn>
//     <HeadFour>Narcos: Mexico</HeadFour>
    
//         <SubHead>
//             <Green>99% Match</Green>
//             <Box>18+</Box>
//             <HeadFive>1 Season</HeadFive>
//         </SubHead>
//     <ItemP>Corruption made a drug kingpin untouchable -- until a </ItemP>
//     <ItemP>Dogged DEA agent threatens to topple his empire.</ItemP>
// </LisTItem>
// <SideNav>
//     <VolUme>Vol</VolUme>
//     <VolUme>Like</VolUme>
//     <VolUme>Dis</VolUme>
//     <VolUme>+</VolUme>
// </SideNav>