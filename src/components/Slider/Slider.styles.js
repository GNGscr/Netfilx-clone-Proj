

// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    z-index: 3;
    position: relative;
    max-width: 100vw;
    margin-bottom: 3.7vw;
    @media all and (min-width: 300px) {
    }
    @media all and (min-width: 500px) {
    }
    @media all and (min-width: 800px) {}
    @media all and (min-width: 1100px) {}
    @media all and (min-width: 1400px) {
        /* overflow-x: unset; */
    }
`;
export const PageHead = styled.div`
    /* padding: 0px 0 0 0; */
    /* min-height: 35px; */
    display: flex;
    margin: 0 6%;
    @media all and (min-width: 500px) {}
    @media all and (min-width: 800px) {}
    @media all and (min-width: 1100px) {}
    @media all and (min-width: 1400px) {
        margin: 0 4%;
    }
`;
// export const Sliderer = styled.div`
//     display: flex;
//     margin-left: 0px;
//     padding: 8px 0;
//     z-index: 4;
//     position: relative;
//     max-width: 100vw;
//     overflow-x: hidden;
//     /* background-color: red; */
//     @media all and (min-width: 900px) {
    //         margin-left: 0;
    //         margin-bottom: 3.3vw;
    //     }
    //     /* @media all and (min-width: 900px) {
        
        //     } */
        //     `;
export const SliderMask = styled.div`
    /* transition: right .3s ease-in-out;
    right: ${props => props.rytBtn}; */
    /* background-color: green; */
    position: relative;
    /* border:1px solid blue; */
    white-space: nowrap;
    padding: 0 15px;
    margin-left: -322vw;
    z-index: 4;
    overflow: unset;

    @media all and (min-width: 500px) {
        padding: 0 30px;
        margin-left: -229.5vw;
    }
    @media all and (min-width: 800px) {
        padding: 0 40px;
        margin-left: -164vw;
    }
    @media all and (min-width: 1100px) {
        margin-left: -136.5vw;
        padding: 0 50px;
    }
    @media all and (min-width: 1400px) {
    white-space: nowrap;
    padding: 0 60px;
    margin-left: -115.5vw;
        &:hover{
            cursor: pointer;
        }
    }
`;
export const SliderItem = styled.div`
    transition: all 2s ease-in;
    display: inline-flex;
    width: calc(89vw/2);
    /* border: 1px solid red; */
    z-index: 6;
    cursor: pointer;
    /* transform-origin: center;
    transition: all .5s ease-in-out; */
    &:hover {
        /* margin-right: 7.5vw;
        margin-left: 7.5vw; */
        /* transform: scale(2);
        z-index:1500; */
    }

    @media all and (min-width: 500px) {
        width: calc(93vw/3);
    }
    @media all and (min-width: 800px) {
        width: calc(88vw/4);
    }
    @media all and (min-width: 1100px) {
        width: calc(90vw/5);
    }
    @media all and (min-width: 1400px) {
        width: calc(92vw/6);
    }
`;
export const IMG = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    @media all and (min-width: 1260px) {
        height: 100%;
        width: 100%; 
    }
    `;
export const LeftArrow = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    /* opacity: 0; */
    /* background-color: red; */
    background: linear-gradient(to left, rgba(35, 35, 35, 0.5), rgba(35, 35, 35, 1) );
    width: 5.5vw;
    height: 26vw;
    z-index: 14;
    /* transition-duration: .7s; */

    @media all and (min-width: 500px) {
        width: 3.5vw;
        height: 16.8vw;
    }
    @media all and (min-width: 800px) {
        height: 11.9vw;
        width: 5.8vw;
    }
    @media all and (min-width: 1000px) {
        height: 11vw;
        width: 4.8vw;
    }
    @media all and (min-width: 1100px) {
        height: 11vw;
        width: 5.1vw;
    }
    @media all and (min-width: 1400px) {
        width: 4.1vw;
        height: 9vw;
        /* &:hover {
            opacity: 1;  
        } */
    }
    `;
export const RightArrow = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: red; */
    background: linear-gradient(to right, rgba(35, 35, 35, 0.5), rgba(35, 35, 35, 1) );
    width: 5.5vw;
    height: 26vw;
    right: 0px;
    z-index: 14;

    @media all and (min-width: 500px) {
        width: 3.5vw;
        height: 16.8vw;
    }
    @media all and (min-width: 800px) {
        height: 11.9vw;
        width: 5.8vw;
    }
    @media all and (min-width: 1100px) {
        height: 11vw;
        width: 4.5vw;
    }
    @media all and (min-width: 1000px) {
        height: 11vw;
        width: 4.8vw;
    }
    @media all and (min-width: 1400px) {
        width: 4.1vw;
        height: 9vw;
        right: -2px;
    }
`;
export const LeftArrowIMG = styled.img`
    background-repeat: no-repeat;
    background-position: center;
    opacity: .05;
    transition-duration: .3s;
    /* color: white; */
    margin-top: 10vw;
    margin-left: 1px;
    /* z-index:30; */
    width: calc(99% - 3px);

    @media all and (min-width: 500px) {
        width: calc(100% - 5px);
        margin-top: 7vw;
    }
    @media all and (min-width: 800px) {
        width: calc(100% - 6px);
        margin-top: 3vw;
    }
    @media all and (min-width: 1100px) {
        width: calc(100% -10px);
    }
    @media all and (min-width: 1400px) {
        width: 130%;
        height: 60%;
        margin-top: 0vw;
        margin-right: .5vw;
        &:hover {
            opacity: .9;
        }
    }
`;
export const RightArrowIMG = styled.img`
    background-repeat: no-repeat;
    background-position: center;
    opacity: .05;
    transition-duration: .3s;
    /* color: white; */
    margin-top: 10vw;
    margin-right: 0px;
    width: calc(99% - 3px);

    @media all and (min-width: 500px) {
        width: calc(100% - 5px);
        margin-top: 7vw;
    }
    @media all and (min-width: 800px) {
        width: calc(100% - 6px);
        margin-top: 3vw;
    }
    @media all and (min-width: 1100px) {
        width: calc(100% -10px);
        margin-top: 3.3vw;
    }
    @media all and (min-width: 1400px) {
        width: 130%;
        height: 60%;
        margin-top: 0vw;
        margin-left: .5vw;
        &:hover {
            opacity: .9;
        }
    }
`;
export const P = styled.p`

    /* align-items: center; */
    color: #fff;
    font-size: .5rem;
`;

// ** ============ Slide ============ **

export const scale_duration = "400ms";
export const scale_delay = "150ms";
export const scale_ease = "cubic-bezier(0.63, 0.04, 0.49, 0.99)";
export const wire_grey = '#999';

export const FADE_IN = keyframes`
 0% {opacity: 0;}
 100% {opacity: 1;}
`;
export const FADE_OUT = keyframes`
 0% {opacity: 1;}
 100% {opacity: 0;}
`;

export const Title = styled.div`
    /* background-color: ${wire_grey}; */
    /* margin-left: -4px; */
    position: absolute; 
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 9px;
    width: 60px;
    height: 12px;
    margin-top: -2vw;
    @media all and (min-width: 1400px) {
        margin-top: -.25vw;
    }
    `;
export const Details = styled.div`
    /* background-color: ${wire_grey}; */
    /* margin-left: -4px; */
    position: absolute;
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 7px;
    margin-top: 1vw;
    width: 120px;
    height: 8px;
    @media all and (min-width: 1400px) {
       top: 2.7vw;   
    }
`;
export const Description = styled.div`
    /* background-color: ${wire_grey}; */
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    color: white;
    margin-top: 5vw;
    font-size: 6px;
    width: 115px;
    /* min-height: 15px; */
    @media all and (min-width: 1400px) {
       margin-top: 2.3vw;
       width: 150px;
    }
`;
export const Summary = styled.div`
    /* border: grey dashed 1px; */
    position: absolute;
    right: 25vw;
    bottom: .25rem;
    margin-right: 20px;
    margin-left: 10px;
    height: 16vw;
    width: 11vw;
    display: flex;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    opacity: ${props => props.opc};
    /* overflow: hidden; */
    /* opacity: 0; */
    flex-direction: column;
    justify-content: space-around;
    @media all and (min-width: 1400px) {
    right: 1.2rem;
    bottom: .25rem;
    height: 6vw;
    }
    `;
// export const SummaryWrapper = styled.div`
//     position: relative;
//     display: flex;
//     height: 100%;
//     width: 100%;
// `;
export const CirclesBox = styled.div`
    /* border: grey dashed 1px; */
    position: absolute;
    right: 1rem;
    margin-top: 2.7vw;
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    opacity: ${props => props.opc};
    /* animation: ${p => p.anim} ${p => p.duration} forwards; */
    @media all and (min-width: 1400px) {
    right: 1.2rem;
    margin-top: 1.5vw;
    height: 68px;  
    }
`;
export const Circle = styled.div`
    /* position: absolute; */
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 1px solid #fff;
    /* background-color: white; */
    opacity: 0.6;
    font-size: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .4);
    color: #fff;
    @media all and (min-width: 1400px) {
    width: 13px;
    height: 13px;
    font-size: .3rem;
    }
`;
export const Play = styled(Circle)`
    /* border: 1px solid #fff; */
    position: absolute;
    width: 15px;
    height: 15px;
    top: -.5vw;
    @media all and (min-width: 1400px) {
    width: 17px;
    height: 17px; 
    top: .25vw;  
    }
`;
export const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 44.5vw;
    height: 26vw;
    object-fit: fill;
    /* object-position: center; */
    border: #14141498 1px solid;
    z-index: 15;

    @media all and (min-width: 500px) {
        width: 30.7vw; 
        height: 17vw; 
    }
    @media all and (min-width: 800px) {
        width: 21.8vw; 
        height: 12vw;  
    }
    @media all and (min-width: 1100px) {
        width: 17.8vw; 
        height: 11vw;  
    }
    @media all and (min-width: 1400px) {
        width: 15.2vw; 
        height: 9vw;  
    }
`;

export const TrailerWrapper = styled.div`
    display: flex; 
    height: 100%;
    width: 100%;
    position: absolute;
    /* z-index: 15; */
    /* background-color: red; */
    /* transform: display .5s;
    display: ${props => props.dsp}; */
`;