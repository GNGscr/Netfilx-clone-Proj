import styled from 'styled-components';


export const H2 = styled.h2`
    
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        color: rgb(20, 20, 20);
    }
`;
export const AppDiv = styled.div`
    width: 100vw;
    height: 210px;
    display: flex;
    flex-direction: column;
    height: 240vh;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        text-align: center;
    }
`;
export const HeadLine = styled.div`
    
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        margin-left: 30px;
        margin-top: -40px;
    }
`;
export const HeadSix = styled.h6`
    
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        text-align: left;
        color: white;
        font-size: 24px;
        margin: 0px;
        margin-top: 50px;
    }
`;
export const P = styled.p`
    
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        /* color: rgb(20, 20,20); */
        margin: 0;
        color: white;
        font-size: 20px;
        text-align: left;
    }
`;
export const Buttons = styled.div`
    
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        display: flex;
        flex-direction: row;
        width: 20vw;
        margin-left: 20px;
        margin-top: 1.7vw;
        line-height: 88%;
        cursor: pointer;
    }
`;
export const Button = styled.button`
    
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        background-color: rgba(51,51,51,.4);
        /* background-color: rgba(54, 53, 53, 0.482); */
        color: #fff;
        border: 0px solid rgba(255, 255, 255, 0);
        margin-left: 8px;
        height: 3vw;
        width: 25vw;
        font-weight: 700;
        /* width: 153.92px; */
        border-radius: 3px;
        font-size: 1.1vw;
        transition: .2s ease-in-out;
        &:Hover {
            background-color: #e6e6e6;
            color: #333;
        }
    }
`;
export const IMG = styled.img`
    
    @media all and (min-width: 477px) {

    }
    @media all and (min-width: 900px) {
        position: relative;
        margin-left: 32.50px;
        margin-top: 100px;
        width: 466.56px;
        height: 186.63px;
    }
`;
export const LogoAndTextDiv = styled.div`
    display: none;
    @media all and (min-width: 477px) {
        
}
    @media all and (min-width: 900px) {
        position: absolute;
        width: 500px;
        height: 550px;
        display: flex;
        flex-direction: column;
        z-index: 2;
        padding-top: 3vw;
        margin-left: 25px;
    }
`;
export const Hero = styled.img`
    width: 100vw;
    height: 50vw;
    z-index: -5;
    @media all and (min-width: 500px) {
        height: 52vw;
    }
    @media all and (min-width: 800px) {
        height: 53vw;
    }
    @media all and (min-width: 1100px) {
        height: 54vw;
    }
    @media all and (min-width: 1400px) {
        position: relative;
        margin-top: 0px;
        width: 100vw;
        height: 56.5vw;
        background: linear-gradient(to bottom, rgba(35, 35, 35, 0.5), rgba(35, 35, 35, 1) );
    }
    `;
    export const SliderSection = styled.div`
        position: absolute;
        margin-top: 42.3vw;
    `;
    export const FooterSection = styled.footer`
    position: absolute;
        bottom: 0;
        display: flex;
        margin-left: 125px;
        /* background-color: red; */
    `;
