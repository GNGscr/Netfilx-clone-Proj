import styled from 'styled-components';

export const FilterClass = styled.div`
    display: flex;
    /* background-color: #f0f0f0; */
    @media all and (min-width: 477px) {

    }
    @media all and (min-width: 900px) {

    }
`;
export const FilterIcon = styled.img`
    display: none;
    @media all and (min-width: 477px) {}
    @media all and (min-width: 900px) {
        display: flex;
        /* background-color: rgb(20, 20, 20); */
        /* background-color: #f0f0f0; */
        width: 35px; 
        height: 35px;
        cursor: pointer;
    }
`;
export const FilterInput = styled.input`
    display: none;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        display: flex;
        height: 25px;
        width: 200px;
        outline: none;
        font-size: 16px;
        border-radius: 0px;
        border: #ccc 1px solid;
        transition: border .3s;
        background-color: rgb(20, 20, 20);
        padding: 4px;
        padding-left: 10px;
        transition: opacity .1s linear;
        opacity: ${props => props.bgclr};
        color: white;
}
`;
export const FilterInputMobile = styled.input`
    display: flex;
    height: 28px;
    width: 114px;
    outline: none;
    border-radius: 0px;
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