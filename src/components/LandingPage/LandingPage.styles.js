import styled from 'styled-components';

export const HeadOne = styled.h1`
    margin-top: 80px;
    font-size: 53px;
    font-weight: normal;
`;
export const Lander = styled.div`
    padding-top: 62px;
    margin-left: 415px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 600px;
    color: white;
`;
export const LanderBtn = styled.div`
    margin-top: -30px;
    margin-bottom: 0px;
    display: flex;
    flex-direction: row;
`;
export const Anker = styled.a`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 218px;
    width: 150px;
    margin: 15px;
    color: rgba(128, 128, 128);
    font-size: 18px;
    font-weight: normal;
    text-decoration: none;
    &:hover {
        color: #fff;
  }
`;
export const ImageProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid rgba(128, 128, 128);
    background-color: rgba(20, 20, 20);
    height: 144px;
    width: 144px;
    margin-bottom: 20px;

    &:hover {
    border: 3px solid #fff;
  }
`;
export const UserImg = styled.img`
    height: 144px;
    width: 144px;
`;
export const Button = styled.button`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 250px;
    border: 1px solid rgba(128, 128, 128);
    background-color: rgb(20, 20, 20);
    color: rgba(128, 128, 128);
    font-size: 18px;

    &:hover {
    color: #fff;
    border: 1px solid #fff;
  }    
`;
export const LOGO = styled.img`
    display: flex;
    width: 84px;
    height: 24px;
    justify-content: flex-start;
    align-items: flex-start;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        position: relative;
        margin-right: 25px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 120px;
        height: 34px;
        /* background-color: white; */
}
`;