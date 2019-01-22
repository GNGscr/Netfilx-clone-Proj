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
export const FilterIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 35px;
    margin-left: 1.5vw;
    margin-right: 1vw;
    background-image: url('./images/searchIcon.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    margin-right: 2vw;
    @media all and (min-width: 477px) {}
    @media all and (min-width: 500px) {
        height: 35px;
        width: 35px;
    }
    @media all and (min-width: 765px) {
        width: 100%;
        margin-left: 1vw;    
        height: 100%;
    }
    @media all and (min-width: 900px) {
        display: flex;
        margin-left: 0vw;
        /* margin-top: .2vw; */
        width: 35px; 
        height: 35px;
        margin-right: 0;
        cursor: pointer;
    }
`;

export const Inputer = styled.input`
    display: flex;  
    height: 22px; 
    width: 150px;  
    /* opacity: 0; */
    background-color: rgb(20, 20, 20);
    border: #ccc 1px solid;
    font-size: 14px;
    padding: 4px;
    padding-left: 10px;
    overflow-x: hidden;
    color: white;
    &:focus {
        outline:-webkit-focus-ring-color auto 5px
    }
    @media all and (min-width: 500px) {
        height: 25px;
        width: 170px;
        margin-right: 1.9vw;
        outline: none;
        font-size: 16px;
        border-radius: 0px;
        padding: 4px 12px;
    }
    @media all and (min-width: 800px) {
        height: 25px;
        width: 170px;
        margin-right: 1.5vw;
        outline: none;
        font-size: 11px;
        border-radius: 0px;
        padding: 4px 12px;
        &:focus {
        outline: none;
        }
    }
    @media all and (min-width: 1100px) {
        height: 25px;
        width: 150px;
        margin-right: 1.7vw;
        outline: none;
        font-size: 15px;
        border-radius: 0px;
        padding: 4px 12px;
        &:focus {
        outline: none;
        }
    }
    @media all and (min-width: 1400px) {
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
    height: 66.5vw;
    width: 50vw;
    margin-left: -.5vw;
    margin-top: 11vw;
    padding-bottom: 3vw;
    background-color: rgb(20,20,20);
    color: #ccc;
    overflow-x: hidden;
    overflow-y: scroll;
    transform: display .5s;
    display: ${props => props.dsp};
    z-index: 15;
    @media all and (min-width: 500px) { 
        width: 35vw; 
        margin-top: 6.5vw;
        height: 30vw;
        }
    @media all and (min-width: 800px) {
        width: 35vw; 
        }
    @media all and (min-width: 1100px) {
        width: 30vw; 
        height: 30vw;
        }
    @media all and (min-width: 1400px) {
        margin-top: 3.6vw;
        height: 30vw;
        width: 24vw;
        margin-left: -1vw;
    }
`;
export const Filtered = styled.div`
    margin: .08vw;
    top: -11vw;
    position: relative;
    display: flex;
    padding: 6vw 0;
    padding-left: .5vw;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 .2rem .8rem DimGrey;
    font-size: 12px;
    border: 1px solid rgba(128, 128, 128, 0.8);
    width: 90%;
    cursor: pointer;
    @media all and (min-width: 500px) {
        padding: 3.2vw 0;
        font-size: 15px;
        top: -2.5vw; 
        }
    @media all and (min-width: 800px) {
        padding: 3.4vw 0;
        font-size: 15px;
        top: -2.5vw; 
        }
    @media all and (min-width: 1100px) {
        padding: 3.7vw 0;
        font-size: 15px;
        top: -1vw; 
        }
    @media all and (min-width: 1400px) {
        padding: 2vw 0;
        font-size: 18px;
        top: -2vw; 
    }
`;

export const IMG = styled.img`
    height: 5vw;
    width: 9vw;
    margin-right: 1vw;
    margin-left: 1vw;
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
export const Profile = styled.div`
    display: flex;
    /* background-color: rgb(20,20,20); */
    color: #fff; 
`;
export const H2 = styled.h2`
    color: red;
`;