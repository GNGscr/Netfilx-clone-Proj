import { createGlobalStyle } from 'styled-components/macro';
// import { padding } from 'polished';

const GlobalStyle = createGlobalStyle`
    html, body, #root {
        height: 100%;
    }
    html {
        font-family: Lato, sans-serif;
        font-family: 'Yanone Kaffeesatz', sans-serif;
        font-family: 10px;
    }
    * {
    margin: 0;
    padding: 0;
    box-sizing: 10px;
    }
    body {
        padding-top: 1.5rem;
        display: flex;
        justify-content: center;
    }
`;
export default GlobalStyle;




// import styled from 'styled-components';

// export const MainList = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: first baseline;
//     padding-top: 15px;
//     width: 350px;
//     /* border: solid 1px green; */
// `;
// export const VolUme = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     margin: 3px;
//     padding: 5px;
//     border: 1px solid white;
//     border-radius: 50%;
//     height: 15px;
//     font-size: 8px;
//     color: white;
// `;
// export const SideNav = styled.div`
//     margin-top: 0px;
//     max-width: 50px;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-end;
//     /* border: solid 1px red; */
// `;
// export const ListItemP = styled.div`
//     color: white;
//     padding: 0;
//     margin: 0;
// `; 
// export const PlayBtn = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 30px;
//     width: 30px;
//     border-radius: 50%;
//     border: 1px solid white;
//     color: red;
//     margin-bottom: 0px;
//     /* Media Queries */
//     @media (max-width: 320px) {
//     background: palevioletred;
//   }
// `;
// export const ItemP = styled.p`
//     color: white;
//     padding: 0;
//     margin: 0;
// `;
// export const HeadFive = styled.h5`
//     margin: 0;
//     padding: 0;
//     font-size: 11px;
//     font-weight: normal;
//     color: white;
// `;
// export const SubHead = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     max-height: 8px;
//     font-size: 10px;
//     margin-bottom: 15px;
// `;
// export const Box = styled.div`
//     margin: 10px;
//     padding: 2px;
//     border: 1px solid #fff;
//     color: white;
//     width: 28px;
// `;
// export const Green = styled.h6`
//     margin-right: 0px;
//     color: green;
//     font-weight: bolder;
//     font-size: 12px;
// `;
// export const HeadFour = styled.h4`

//     color: white;
//     font-size: 10px;
//     display: flex;
//     align-items: flex-start;
// `;
// export const LisTItem = styled.div`
//     margin: 0;
//     padding: 25px;
//     padding-top: 0px;
//     display: flex;
//     align-items: flex-start;
//     justify-content: flex-end;
//     flex-direction: column;
//     font-size: 9px;
//     /* border: solid 1px orange; */
// `;





