// import styled from 'styled-components';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
    z-index: 3;
    @media all and (min-width: 477px) {
    }
    @media all and (min-width: 900px) {
    } 
`;
export const PageHead = styled.h1`
    padding: 0px 0 0 0;
    min-height: 40px;
    display: flex;
    font-size: 22px;
    font-weight: 700;
    color: #ccc;
    margin: 0 6%;
    z-index: 5;
    @media all and (min-width: 477px) {

    }
    @media all and (min-width: 900px) {
        margin: 0 4%;
    }
`;
export const Sliderer = styled.div`
    display: flex;
    margin-left: 0px;
    padding: 8px 0;
    z-index: 4;
    position: relative;
    max-width: 100vw;
    overflow-x: hidden;
    /* background-color: red; */
    @media all and (min-width: 900px) {
        margin-left: 0;
        margin-bottom: 3.3vw;
    }
    /* @media all and (min-width: 900px) {
        
    } */
    `;
export const SliderMask = styled.div`
    /* transition: right .3s ease-in-out;
    right: ${props => props.rytBtn}; */
    /* background-color: green; */
    position: relative;
    /* border:1px solid blue; */
    white-space: nowrap;
    padding: 0 5px;
    margin-left: 15px;
    @media all and (min-width: 500px) {
        margin-left: -107.5vw;
    }
    @media all and (min-width: 800px) {
        margin-left: -107.5vw;
    }
    @media all and (min-width: 1100px) {
        margin-left: -121.5vw;
    }
    @media all and (min-width: 1400px) {
    white-space: nowrap;
    padding: 0 60px;
    margin-left: -107.5vw;
        &:hover{
            cursor: pointer;
        }
    }
`;
export const SliderItem = styled.div`
    /* position: absolute; */
    transition: all 2s ease-in;
    display: inline-flex;
    width: calc(95vw/2);
    /* border: 1px solid red; */
    /* z-index: 1; */

    @media all and (min-width: 500px) {
        width: calc(100vw/3);
    }
    @media all and (min-width: 800px) {
        width: calc(100vw/4);
    }
    @media all and (min-width: 1100px) {
        width: calc(90vw/5);
    }
    @media all and (min-width: 1400px) {
        width: calc(92vw/6);
    }
`;

// export const SliderItemInner = styled.div`
//     margin: 0 2px;
//     border-radius: 2px;
//     position: relative;
//     background: rgb(20,20,20);
//     width: 100%;
//     height: 100%;
//     background-size: 100%;
//     background-repeat: no-repeat;
//     @media all and (min-width: 1260px) {
//         width: 100%;
//         height: 100%;
//     }
// `;
export const IMG = styled.img`
    /* background-size: 100; */
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
    top: 8px;
    /* background-color: red; */
    background: linear-gradient(to left, rgba(35, 35, 35, 0.5), rgba(35, 35, 35, 1) );
    width: 5.5%;
    height: calc(99% - 17px);
    z-index: 14;

    @media all and (min-width: 500px) {
        width: 3.5%;
        height: calc(99% - 17px);
    }
    @media all and (min-width: 800px) {
        height: calc(99% - 17px);
        width: 5.9%;
    }
    @media all and (min-width: 1100px) {
        width: 5%;
    }
    @media all and (min-width: 1400px) {
        width: 4%;
        height: calc(99% -20px);
    }
`;
export const RightArrow = styled.div`
    position: absolute;
    top: 8px;
    /* background: red; */
    background: linear-gradient(to right, rgba(35, 35, 35, 0.5), rgba(35, 35, 35, 1) );
    width: 5.5%;
    height: calc(99% - 17px);
    right: 0px;
    z-index: 14;

    @media all and (min-width: 500px) {
        width: 3.5%;
        height: calc(99% - 17px);
    }
    @media all and (min-width: 800px) {
        height: calc(99% - 17px);
        width: 5.9%;
    }
    @media all and (min-width: 1100px) {
        width: 5%;
    }
    @media all and (min-width: 1400px) {
        width: 4.2%;
        height: calc(99% -20px);
        right: -2px;
    }
`;
export const LeftArrowIMG = styled.img`
    /* color: white; */
    margin-top: 10vw;
    margin-left: 1px;
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
        width: calc(100% - 15px);
        margin-top: 2.75vw;
    }
`;
export const RightArrowIMG = styled.img`
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
    }
    @media all and (min-width: 1400px) {
        width: calc(100% - 15px);
        margin-top: 2.75vw;
    }
`;
export const P = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 32px;
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
    color: white;
    font-size: 11px;
    width: 60px;
    height: 14px;
    `;
export const Details = styled.div`
    /* background-color: ${wire_grey}; */
    color: white;
    margin-left: -20px;
    font-size: 8px;
    width: 120px;
    height: 8px;
`;
export const Descrition = styled.div`
    /* background-color: ${wire_grey}; */
    /* overflow: hidden; */
    color: white;
    font-size: 7px;
    max-width: 160px;
    min-height: 25px;
`;
export const Summary = styled.div`
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
export const CirclesBox = styled.div`
    /* border: grey dashed 1px; */
    position: absolute;
    right: 1.2rem;
    bottom: .5rem;
    height: 80px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    opacity: 0;
    animation: ${p => p.anim} ${p => p.duration} forwards;
`;
export const Circle = styled.div`
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
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
`;
export const Play = styled(Circle)`
    /* border: 1px solid #fff; */
    width: 22px;
    height: 22px;
`;
export const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 15.2vw;
    height: 9vw;
    object-fit: fill;
    /* object-position: center; */
    border: #14141490 1px solid;
    cursor: pointer;
    transform-origin: center;
    transition: transform ${scale_duration} ${scale_ease} ${scale_delay};
    z-index: 10;

    &:hover {
        transform: scale3d(1.5, 1.5, 1.5);

    }
`;