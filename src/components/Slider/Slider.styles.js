import styled from 'styled-components';


// export const SliderItems = styled.div`
//     margin: 2px;
//     height: 122px;
//     width: 216px;
//     background-color:#333;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     color: white; 
//     font-size: 24px;

//     ${SliderItems}:hover & {
//         height:200px;
//         width: 30%;
//         animation-duration: 2s;
//         transition: cubic-bezier(0.86, 0, 0.07, 1);
//     } 
// `;
// export const SliderContent = styled.div`
    
//     @media all and (min-width: 477px) {

//     }
//     @media all and (min-width: 900px) {
//         margin-top: 0px;
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         justify-content: center;
// }
// `;
// export const RowContainer = styled.div`
    
//     @media all and (min-width: 477px) {

//     }
//     @media all and (min-width: 900px) {
//         display: flex;
//         flex-wrap: wrap;
//         justify-content: center;
//         margin-top: 0px;
//         height: 200px;
//         border: 1px solid red;
//     }
// `;
// ========================================

export const Wrapper = styled.div`
    z-index: 3;
    @media all and (min-width: 477px) {
    }
    @media all and (min-width: 900px) {
    } 
`;
export const PageHead = styled.h1`
    padding: 15px 0 15px 0;
    min-height: 44px;
    display: flex;
    font-size: 18px;
    font-weight: bold;
    color: #999;
    margin: 0 12%;
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
    }
    /* @media all and (min-width: 900px) {
        
    } */
    `;
export const SliderMask = styled.div`
    /* transition: right .3s ease-in-out;
    right: ${props => props.rytBtn}; */
    /* background-color: green; */
    white-space: nowrap;
    padding: 0 5px;
    margin-left: 15px;
    /* overflow-x: hidden; */
    @media all and (min-width: 477px) {
        
    }
    @media all and (min-width: 900px) {
    white-space: nowrap;
    padding: 0 60px;
    margin-left: 0px;
        &:hover{
            cursor: pointer;
        }
    }
`;
export const SliderItem = styled.div`
    display: inline-flex;
    width: calc(95%/2);
    position: relative;
    z-index: 1;

    @media all and (min-width: 500px) {
        width: calc(100%/3);
    }
    @media all and (min-width: 800px) {
        width: calc(100%/4);
    }
    @media all and (min-width: 1100px) {
        width: calc(100%/5);
    }
    @media all and (min-width: 1400px) {
        width: calc(100%/6);
    }
`;

export const SliderItemInner = styled.div`
    margin: 0 2px;
    border-radius: 2px;
    position: relative;
    background: rgb(20,20,20);
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    @media all and (min-width: 1260px) {
        width: 100%;
        height: 100%;
    }
`;
export const IMG = styled.img`
    background-size: 100;
    background-repeat: no-repeat;
    height: 100%;
    width: 104%;
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
    z-index: 4;

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
    z-index: 4;

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