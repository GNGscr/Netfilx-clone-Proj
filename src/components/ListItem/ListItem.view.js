// import React from 'react'
import React, { Component } from 'react';
import '../../styled/App.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class ListItem extends Component {

    render() {
        return <Wrapper>
                <Link to="/">
                <Back>Home</Back>
                </Link>
                <HeroWrapper><IMGHero src='http://image.tmdb.org/t/p/w500///rGfGfgL2pEPCfhIvqHXieXFn7gp.jpg' alt=""/></HeroWrapper>
                <DataWrapper>
                    <H1>Bird Box</H1>
                    <H3>Rating: 7.2</H3>
                    <H5>Runtime: 124 minutes</H5>
                    <H5>Release Date: 13/12/2018</H5>
                    <H5>Overview: When a mysterious force decimates the world’s population, only one thing is certain: if you see it, you take your life. Facing the unknown, Malorie finds love, hope and a new beginning only for it to unravel. Now she must flee with her two children down a treacherous river to the one place left that may offer sanctuary. But to survive, they'll have to undertake the perilous two-day journey blindfolded.</H5>
                    <H3>Cast:</H3>
                    <CastWrapper>
                        <IMG src='https://image.tmdb.org/t/p/w200/bsAy8f8UZKairXQzRukU5FP4XAQ.jpg' alt=""/>
                        <IMG src='https://image.tmdb.org/t/p/w200/tCtiWZbKKRgHhLxFCIPfveYAsdc.jpg' alt=""/>
                        <IMG src='https://image.tmdb.org/t/p/w200/jkhpv4oPNcMSvPPDUuCyPIFwYyS.jpg' alt=""/>
                        <IMG src='https://image.tmdb.org/t/p/w200/w5mqvAJ4FQAO5iZbO5Q5vv0MJ5s.jpg' alt=""/>
                    </CastWrapper>
                </DataWrapper>
            </Wrapper>
    }
}
export default ListItem;

// SandraBullock = 'https://image.tmdb.org/t/p/w200/bsAy8f8UZKairXQzRukU5FP4XAQ.jpg'
// JohnMalkovich = 'https://image.tmdb.org/t/p/w200/tCtiWZbKKRgHhLxFCIPfveYAsdc.jpg'
// SarahPoulson = 'https://image.tmdb.org/t/p/w200/jkhpv4oPNcMSvPPDUuCyPIFwYyS.jpg'
// TrevanteRhodes = 'https://image.tmdb.org/t/p/w200/w5mqvAJ4FQAO5iZbO5Q5vv0MJ5s.jpg'

const Wrapper = styled.div`
    height: 100vh;
    /* width: 100vw; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    /* border: 1px solid red; */
`;
const HeroWrapper = styled.div`
    width: 35vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid green; */
`;
const DataWrapper = styled.div`
    width: 65vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* border: 1px solid blue; */
`;
const H1 = styled.h1`
    width: 47vw;
    display: flex;
    margin-top: 0vw;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid white; */
    `;
const H3 = styled.h3`
    width: 47vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid purple; */
    `;
const IMGHero = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1vw;
    margin-top: 1vw;
    margin-left: 7vw;
    height: 44vw;
    width: 32vw;
    background-repeat: no-repeat;
    `;
const IMG = styled.img`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1vw;
    height: 15vw;
    width: 10.3vw;
    background-repeat: no-repeat;
    `;
const CastWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
// const H6 = styled.h6`
//     width: 47vw;
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     /* border: 1px solid yellow; */
//     `;
const H5 = styled.h5`
width: 47vw;
display: flex;
justify-content: flex-start;
align-items: center;
/* border: 1px solid orange; */
`;
const Back = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    position: fixed;
    right: 1.5vw;
    top: 1.5vw;
    height: .9vw;
    width: 3vw;
    padding: 1vw;
    border-radius: 5%;
    background-color: red;
    color: #fff;
`;


// {e.title}
// {e.time}
// {e.released}
// {e.description}



// // import react from 'react';
// // import ReactDOM from 'react-dom';
// // import GlobalStyle from '../ListItem/Global.styles';
// // import Show from '../ListItem/Show.view';
// import styled, { keyframes } from 'styled-components';
// // import { lighten } from 'polished';
// // import { 
// //     MainList, VolUme, SideNav, ItemP, HeadFive, SubHead,
// //     Box, Green, HeadFour, PlayBtn, LisTItem
// //  } from './ListItem.styles';
// // import NavBar from '../Global/NavBar';
// // import Links from '../Global/Links';


// const scale_duration = "400ms";
// const scale_delay = "150ms";
// const scale_ease = "cubic-bezier(0.63, 0.04, 0.49, 0.99)";
// const wire_grey = '#999';

// const FADE_IN = keyframes`
//  0% {opacity: 0;}
//  100% {opacity: 1;}
// `;
// const FADE_OUT = keyframes`
//  0% {opacity: 1;}
//  100% {opacity: 0;}
// `;

// export default class Slide extends React.Component {
//     state = {
//         fade_duration: scale_duration,
//         fade_anim: null
//         // data: []
//     };

//     // async componentDidMount() {
//     //     const res = await fetch('./MOCK_DATA.json')
//     //     const data = await res.json();
//     //     this.setState({ 
//     //       data 
//     //     })
//     //     console.log(data)
//     //   }

//     timeout = null;
//     move_timeout = null;

//     mouseEnter = e => {
//         this.short_fade_in();
//         clearTimeout(this.timeout);
//         this.timeout = setTimeout(this.long_fade_out, 2000);
//     }
//     mouseLeave = e => {
//         clearTimeout(this.timeout);
//         clearTimeout(this.move_timeout);
//         this.move_timeout = null;
//         this.short_fade_out();
//     }
//     mouseMove = e => {
//         if(!this.move_timeout) {
//             this.short_fade_in();
//             this.move_timeout = setTimeout(() => {
//                 this.move_timeout = null;
//                 clearTimeout(this.timeout);
//                 this.timeout = setTimeout(this.long_fade_out, 2000);
//             }, 300);
//         }
//     };

//     short_fade_in = () => {
//         this.setState({
//             fade_duration: '550ms',
//             fade_anim: FADE_IN
//         });
//     };
//     short_fade_out = () => {
//         this.setState({
//             fade_duration: '400ms',
//             fade_anim: FADE_OUT
//         });
//     };
//     long_fade_out = () => {
//         this.setState({
//             fade_duration: '4000ms',
//             fade_anim: FADE_OUT
//         });
//     };

//     render() {

//         return (
//             <Box
//             onMouseEnter={this.mouseEnter}
//             onMouseLeave={this.mouseLeave}
//             onMouseMove={this.mouseMove}
//             >
//                 <IMG src={'https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABYpnH2rHc9RGS-sagro81a3NWMBcLimQQsPSLkBIhSwUxGicy8me0Rx_j9Q-W6I_HQr30gtqb-w0nq6qjxoZp8sH1T8O6MijAE6Y9XE1awNoS3y6HC8PfNFsEiG2ewRvD19JSs9xJQ.jpg'}/>
//                 <Summary
//                     anim={this.state.fade_anim}
//                     duration={this.state.fade_duration}
//                 >
//                     <Play><IMG src='https://img.icons8.com/color/50/000000/play.png'/></Play>
//                     <Title>Ozark</Title>
//                     <Details>Watch Season 1 Now</Details>
//                     <Descrition>Desperate times call for family unity. Now family night means stacking millions in drug cash inside a cabin's walls..</Descrition>
//                 </Summary>
//                 <CirclesBox
//                     anim={this.state.fade_anim}
//                     duration={this.state.fade_duration}
//                 >
//                     {/* <Circle><IMG src='https://img.icons8.com/color/48/000000/mute.png'/></Circle> */}
//                     <Circle><IMG src='https://img.icons8.com/color/48/000000/medium-volume.png'/></Circle>
//                     <Circle><IMG src='https://img.icons8.com/ios-glyphs/48/000000/thumb-up.png'/></Circle>
//                     <Circle><IMG src='https://img.icons8.com/ios-glyphs/48/000000/thumbs-down.png'/></Circle>
//                     <Circle><IMG src='https://img.icons8.com/ios/48/000000/plus-math-filled.png'/></Circle>
//                 </CirclesBox>
//             </Box>
//         );
//     }
// }

// const Title = styled.div`
//     /* background-color: ${wire_grey}; */
//     color: white;
//     font-size: 11px;
//     width: 60px;
//     height: 14px;
// `;
// const Details = styled.div`
//     /* background-color: ${wire_grey}; */
//     color: white;
//     font-size: 9px;
//     width: 120px;
//     height: 8px;
// `;
// const Descrition = styled.div`
//     /* background-color: ${wire_grey}; */
//     color: white;
//     font-size: 7px;
//     width: 160px;
//     height:15px;
// `;
// const Summary = styled.div`
//     /* border: grey dashed 1px; */
//     position: absolute;
//     right: 1.2rem;
//     bottom: 1.2rem;
//     margin-right: 40px;
//     height: 80px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     opacity: 0;
//     animation: ${p => p.anim} ${p => p.duration} forwards;
// `;
// const CirclesBox = styled.div`
//     /* border: grey dashed 1px; */
//     position: absolute;
//     right: 1.2rem;
//     bottom: .5rem;
//     height: 80px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     opacity: 0;
//     animation: ${p => p.anim} ${p => p.duration} forwards;
// `;
// const Circle = styled.div`
//     width: 15px;
//     height: 15px;
//     border-radius: 50%;
//     border: 1px solid #fff;
//     /* background-color: white; */
//     opacity: 0.6;
//     font-size: 1.5rem;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;
// const Play = styled(Circle)`
//     /* border: 1px solid #fff; */
//     width: 22px;
//     height: 22px;
// `;
// const Box = styled.div`
//     box-sizing: border-box;
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-end;
//     position: relative;
//     margin-top: 100px;
//     margin-left: 600px;
//     width: 238px;
//     height: 132px;
//     /* object-fit: fill; */
    
//     /* object-position: center; */
//     border: #333 1px solid;
//     cursor: pointer;
//     transform-origin: top center;
//     transition: transform ${scale_duration} ${scale_ease} ${scale_delay};

//     &:hover {
//         transform: scale3d(1.4, 1.4, 1.4);
//     }
// `;
// const IMG = styled.img`
//     background-size: 100;
//     background-repeat: no-repeat;
//     height: 100%;
//     width: 100%;
//     @media all and (min-width: 1260px) {
//         height: 100%;
//         width: 100%; 
//     }
// `;




 
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