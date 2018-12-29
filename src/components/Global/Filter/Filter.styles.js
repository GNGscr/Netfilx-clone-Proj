import styled from 'styled-components';

export const FilterClass = styled.div`
    display: flex;
    position: relative;
    /* background-color: #f0f0f0; */
    @media all and (min-width: 477px) {

    }
    @media all and (min-width: 900px) {

    }
`;
export const FilterIcon = styled.img`
    display: flex;
    width: 8vw;
    margin-right: 2vw;
    background-color: gray;
    @media all and (min-width: 477px) {}
    @media all and (min-width: 900px) {
        display: flex;
        width: 9vw;
        /* background-color: rgb(20, 20, 20); */
        background-color: #f0f0f0;
        width: 35px; 
        height: 35px;
        margin-left: 10px;
        margin-right: 0;
        cursor: pointer;
    }
`;
export const Inputer = styled.input`
    display: flex;  
    height: 22px; 
    width: 125px;  
    background-color: rgb(20, 20, 20);
    border: #ccc 1px solid;
    font-size: 14px;
    padding: 4px;
    padding-left: 10px;
    overflow-x: hidden;
    transition: opacity .1s linear;
    opacity: ${props => props.bgclr};        
    transition: border .3s;
    color: white;
    &:focus {
        outline:-webkit-focus-ring-color auto 5px
    }
    @media all and (min-width: 477px) {}
    @media all and (min-width: 900px) {
        display: flex;
        height: 25px;
        width: 170px;
        margin-right: .9vw;
        outline: none;
        font-size: 16px;
        border-radius: 0px;
        padding: 4px 12px;
        &:focus {
        outline: none;
    }

}
`;
export const FilterInputMobile = styled.input`
    display: none;
    height: 28px;
    width: 114px;
    outline: none;
    border-radius: 0px;
    margin-right: 3vw;
    font-size: 16px;
    border: #ccc 1px solid;
    transition: border .3s;
    background-color: rgb(20, 20, 20);
    padding: 1px;
    padding-left: 10px;
    color: #fff;
    &:focus {
        outline:-webkit-focus-ring-color auto 5px
    }
    @media all and (min-width: 477px) {}
    @media all and (min-width: 900px) {
        display: none;
}
`;
export const ContentBox = styled.div`
    position: absolute;
    display: none;
    opacity: 0;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 67vw;
    width: 45vw;
    margin-top: 9.6vw;
    background-color: rgb(20,20,20);
    color: #ccc;
    overflow-x: hidden;
    overflow-y: scroll;
    transform: display .5s;
    display: ${props => props.dsp};
    transition: opacity 1s ease-in-out;
    transition-delay: .5s;
    opacity: ${props => props.cntctbx};
    z-index: 15;
    @media all and (min-width: 1400px) {
        margin-top: 3.6vw;
        height: 30vw;
        width: 24vw;
    }
`;
export const Filtered = styled.div`
    margin: .08vw;
    top: -11vw;
    position: relative;
    display: flex;
    padding: 4vw 0;
    padding-left: .5vw;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 .2rem .8rem DimGrey;
    font-size: 11px;
    border: 1px solid rgba(128, 128, 128, 0.8);
    width: 90%;
    cursor: pointer;
    @media all and (min-width: 1400px) {
        padding: 2vw 0;
        font-size: 18px;
        top: -2vw; 
    }
`;

export const IMG = styled.img`
    height: 4vw;
    width: 6vw;
    margin-right: 1vw;
    margin-left: .3vw;
    @media all and (min-width: 1400px) {
    height: 2.3vw;
    width: 3.8vw;
    margin-left: .5vw;
    margin-right: .5vw; 
    }
`;
export const FilterHeader = styled.h2`
    margin-left: 0vw;
    margin-top: 2vw;
    color: grey;
    font-weight: 400;
    font-size: .9rem;
    opacity: .7;
    @media all and (min-width: 1400px) {
        font-size: 1.2rem; 
    }
`;
export const Carret = styled.h3`
    font-size: 32px;
    color: rgba(128, 128, 128, 0.8);
    font-weight: 300;
    margin-top: 2vw;
    @media all and (min-width: 1400px) {
        margin-top: 1.5vw; 
    }
`;