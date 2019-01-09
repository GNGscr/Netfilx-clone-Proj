import styled from 'styled-components';

export const MainHeaderDiv = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    width: 100vw;
    position: fixed;
    z-index: 400;
    background-color: rgba(20, 20, 20, 0);

    @media all and (min-width: 477px) {

    }
    
    @media all and (min-width: 900px) {
        margin-top: 0px;
        background-color: rgba(20, 20, 20, 0);
        height: 68px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: white;
        /* border: 1px solid orange; */
}
`;
export const BcgrNav = styled.div`
    display: flex;
    height: 50px;
    width: 100vw;
    position: fixed;
    opacity: 0;
    background-color: rgba(20, 20, 20, 0.7);
    transition: opacity .3s ease-in-out;
    opacity: ${props => props.bgclr};
    z-index: -3;
        @media all and (min-width: 477px) {

        }
        @media all and (min-width: 900px) {
        height: 68px;
        background-color: rgba(20, 20, 20);
        /* background-color: rgba(20, 20, 20);
        transition: opacity .3s ease-in-out;
        opacity: ${props => props.bgclr}; */
        }
`;
export const LeftNavBar = styled.div`
    position:relative;
    display: flex;
    /* border: 3px solid cyan; */
    /* align-items: flex-start;
    justify-content: flex-start; */
    @media all and (min-width: 477px) {
        
    }
    @media all and (min-width: 900px) {
        /* flex-direction: row; */
        /* justify-content: flex-start;
        align-items: flex-start; */
        /* border: 1px solid blue; */
    }
`;
export const RightNavBar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* border: 1px solid green; */
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
    margin-right: 0px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* border: 1px solid green; */
}
`;
export const NavControllers = styled.div`  
    display: flex;
    padding: 15px;
    @media all and (min-width: 477px) {

    }
    @media all and (min-width: 900px) {
        justify-content: center;
        align-items: center;
        /* border: 1px solid lightcyan; */
    }
`; 
export const NavList = styled.ul`
    position:absolute;
    transition: left .3s ease-in;
    left:${props => props.xpos };
    width: 200px;
    display: flex;
    flex-direction: column;
    color: #ccc;
    margin-top: 50px;
    @media all and (min-width: 477px) {

    }
    @media all and (min-width: 900px) {
        position:static;
        margin-left: -22px;
        width: 430px;
        margin-top: 15px;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        /* border: 1px solid greenyellow; */
    }
`;
// export const NetLogo = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     @media all and (min-width: 477px) {
        
//     }
//     @media all and (min-width: 900px) {
//         display: flex;
//         justify-content: center;
//         align-items: center;
// }
// `;
export const LIMOBILE = styled.li`
    display: flex;
    color: #fff;
    border: 1px solid rgb(20, 20, 20);
    background-color: rgb(20, 20, 20);
    padding: 10px;
    padding-left: 30px;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
    display: none;
}  
`;
export const LI = styled.li`
    display: flex;
    color: #fff;
    border: 1px solid rgb(20, 20, 20);
    background-color: rgb(20, 20, 20);
    padding: 10px;
    padding-left: 30px;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin: 5px;
        border: 1px solid rgb(20, 20, 20, 0);
        background-color: rgb(20, 20, 20, 0);
        /* border: 1px solid red; */
}
`;
export const Button = styled.button`
    color: #000;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        background-color: rgba(54, 53, 53, 0.482);
        color: #fff;
        border: 0px solid rgba(255, 255, 255, 0);
        margin-left: 5px;
        height: 38px;
        width: 39.61px;
        border-radius: 5px;
        font-size: 20px;
        /* border: 1px solid yellow; */
}
`;
export const Profiles = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    /* background-color: grey; */
    width: 55px;
    height: 35px;
    margin-right: 20px;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        margin: 0 30px;
}
`;
 
export const LOGO = styled.img`
    display: flex;
    width: 84px;
    height: 24px;
    justify-content: flex-start;
    align-items: center;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        position: relative;
        margin-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 92.5px;
        height: 31px;
        /* border: 1px solid white; */
}
`;
// export const NotificationsMenu = styled.img`
//     display: none;
//     background-color: white;
//     @media all and (min-width: 477px) {

// }
//     @media all and (min-width: 900px) {
//         margin-right: 30px;
        
// }
// `;
export const NetfilxSans = styled.div`
    font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    display: flex;
    text-decoration: none;
    color: #ccc;
    transition: .3s ease-in-out;
    &:visited {
        text-decoration: none;
        border: 1px solid red;
    }

    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        font-family: 'Netflix Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
        color: #fff;
        text-decoration: none;
        &:hover {
            color: #ccc;
        }
}
`;
export const AccountDropdownButton = styled.img`
    display: none;
    justify-content: center;
    align-items: center;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: -10px;
        margin-left: 20px;
        background-color: white;
        height: 35px;
        width: 35px;
        /* border: 1px solid rgb(20, 20, 20); */
}
`;
export const IMG = styled.img`
    display: flex;
    width: 32px;
    height: 32px;
    justify-content: flex-start;
    align-items: center;
    @media all and (min-width: 477px) {

}
    @media all and (min-width: 900px) {
        position: relative;
        margin-left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        /* background-color: white; */
}
`;
export const Hamburger = styled.img`
    display: flex;
    height: 24px;
    width: 24px;
    margin-right: 15px;
    margin-left: 0px;
    margin-top: -2px;
    @media all and (min-width: 477px) {
    
    }
    @media all and (min-width: 900px) {
        display: none;
    }
    `;


// export const SearchTab = styled.div`

//     @media all and (min-width: 477px) {

// }
//     @media all and (min-width: 900px) {
//         background-color: white;
//         /* border: none; */
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         height: 32px;
//         width: 32px;
// }
// `;
// export const Anker = styled.a`
    
//     @media all and (min-width: 477px) {

// }
//     @media all and (min-width: 900px) {
//         display: flex;
//         align-items: center;
//         margin-right: 30px;
// }
// `;
// export const Show = styled.header`
    
//     @media all and (min-width: 477px) {

// }
//     @media all and (min-width: 900px) {
//         background-color: rgba(20, 20, 20, 0);
// }
// `;
export const NotificationWin = styled.div`
    height: 25vw;
    width: 25vw;
    top: 5vw;
    right: 3vw;
    position: absolute;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(20, 20, 20);
    transform: display .5s;
    display: ${props => props.dspcntn};
    z-index: 12;
    color: gray;
`;
export const Item = styled.div`
    width: 22.5vw;
    height: 4vw;
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    margin:.05vw;
    padding: .2vw;
    padding-left: 1vw;
    border: 1px solid gray;
    box-shadow: 0 .2rem .8rem DimGrey;
`;
export const H3 = styled.div`
    color: #777;
    font-size: 1.2rem;
    margin: 2vw 0;
`;