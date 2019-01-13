import styled from 'styled-components/macro';


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
    height: 280vh;
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
        margin-top: 30px;
    }
`;
export const P = styled.p`
    
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        /* color: rgb(20, 20,20); */
        margin: 0;
        margin-left:.2vw;
        line-height: 1.8vw;
        letter-spacing: 1;
        color: white;
        font-size: 21px;
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
        z-index: 8;
        margin-left: 20px;
        margin-top: 1.7vw;
        line-height: 88%;
        cursor: pointer;
    }
`;
export const Button = styled.div`
    
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(51,51,51,.5);
        color: #fff;
        border: 0px solid rgba(255, 255, 255, 0);
        margin-left: 8px;
        height: 3vw;
        width: 9.5vw;
        font-weight: 700;
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
        width: 40vw;
        height: 42.5vw;
        display: flex;
        flex-direction: column;
        /* background-color:red; */
        z-index: 7;
        padding-right: 39vw;
        padding-top: 3vw;
        padding-left: 25px;
    }
`;
export const Hero = styled.img`
    width: 100vw;
    height: 60vw;
    z-index: -5;
    position: relative;
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
        margin-top: 0px;
        width: 100vw;
        height: 56.5vw;
    }
    `;
export const HeroMask = styled.div`
    width: 100vw;
    height: 60vw;
    margin-top: 0vw;
    z-index: -3;
    position: absolute;
    /* background-color: red; */
    background: linear-gradient(to bottom,rgba(20,20,20,0.6) 0,rgba(20,20,20,.15) 20%,rgba(20,20,20,0) 29%,rgba(20,20,20,.18) 58%,#141414 88%,#141414 100%);
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
        margin-top: 0px;
        width: 100vw;
        height: 56.5vw;
    }
    `;
    export const SliderSection = styled.div`
        position: absolute;
        margin-top: 42vw;
        overflow-x: hidden;
        height: 100%;
    `;
    export const FooterSection = styled.footer`
    position: absolute;
        bottom: 0;
        display: flex;
        margin-left: 125px;
        /* background-color: red; */
    `;
    export const Hone = styled.h1`
        /* background-color: red; */
        display: flex;
        justify-content: flex-start;
        height: 30px;
        font-size: 22px;
        font-weight: 600;
        color: #ccc;
        padding: 0 4.1vw;
        margin-bottom: .6vw;
    `;
    // export const Player = styled.div`
    //     display: flex;
    //     z-index: 10;
    //     top: -8vw;
    //     right: 0px;
    //     /* position: absolute; */
    //     height: 5vw;
    //     width: 8vw;
    //     background-color: blue;
    // `;
    export const TrailerMask = styled.div`
    width: 100vw;
    height: 45.5vw;
    margin-top: 0vw;
    z-index: 0;
    position: absolute;
    /* background-color: blue; */
    `;
    export const TrailerWrapper = styled.div`
    top: -2.75vw;
    position: absolute;
    @media all and (min-width: 1400px) {
        top: -5.2vw;
    }
    `;