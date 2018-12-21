import React from 'react';
import { Link } from 'react-router-dom';
import { MainHeaderDiv, LeftNavBar, RightNavBar, LI, Profiles, LOGO, Hamburger,LIMOBILE,
     NetfilxSans, AccountDropdownButton, IMG, NavControllers, NavList, BcgrNav
    } from './NavBar.styles';
// import { keyframes } from 'styled-components';
import Filter from './Filter/Filter';


const scale_duration = '400ms';


export default class MainHeader extends React.Component {
    state = {
        fade_duration: scale_duration,
        // fade_anim: null,
        navXpos: '-350px',
        navOpen: false,
        navbgclr: { opacity: 0 },
        clrOpen: false
    }
    componentDidMount(){
        window.addEventListener('scroll', () => {
            // console.log(window.scrollY);
            if (window.scrollY > 3) {
                this.setState({
                    navbgclr: 1,
                    clrOpen: true
                })
            } else {
                this.setState({
                    navbgclr: 0,
                    clrOpen: false
                })
            }
        })
    }
    alerter = () => {
        if (this.state.navOpen) {
            this.setState({
                navXpos: '-350px',
                navOpen: false
            })
        } else {
            this.setState({
                navXpos: '-50px',
                navOpen:true
            })
        }
    }
    
    render() {
        return (
            <MainHeaderDiv>
                <BcgrNav bgclr={this.state.navbgclr}></BcgrNav>
                <LeftNavBar>
                    <NavControllers>
                        <Hamburger src="https://assets.nflxext.com/ffe/siteui/akira/fallback/hamburger.gif" onClick={this.alerter}></Hamburger>
                        <Link style={{ textDecoration: 'none' }} to="/"><LOGO src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" alt="Netfilx-Logo"/></Link>
                    </NavControllers>
                    <NavList xpos={this.state.navXpos}>
                        <LIMOBILE><Link to="/Profiles"><IMG src="https://occ-0-1390-2774.1.nflxso.net/art/326d2/7f22331395c9669f63f6e97b9b3fcb0a9cc326d2.png" alt="User's-icon" /></Link></LIMOBILE>
                        <LI><Link style={{ textDecoration: 'none' }} to="/"><NetfilxSans>Home</NetfilxSans></Link></LI>
                        <LI><Link style={{ textDecoration: 'none' }} to="/tv-shows"><NetfilxSans>TV Shows</NetfilxSans></Link></LI>
                        <LI><Link style={{ textDecoration: 'none' }} to="/movies"><NetfilxSans>Movies</NetfilxSans></Link></LI>
                        <LI><Link style={{ textDecoration: 'none' }} to="/recently-added"><NetfilxSans>Recently Added</NetfilxSans></Link></LI>
                        <LI><Link style={{ textDecoration: 'none' }} to="/my-list"><NetfilxSans>My List</NetfilxSans></Link></LI>
                    </NavList>
                </LeftNavBar>
        
                <RightNavBar>
                    <Filter />
                    <AccountDropdownButton src="https://img.icons8.com/ios/50/000000/appointment-reminders.png" alt=""/>
                    {/* <NotificationsMenu src="" alt="" /> */}
                    <Profiles><Link to="/Profiles"><IMG src="https://occ-0-1390-2774.1.nflxso.net/art/326d2/7f22331395c9669f63f6e97b9b3fcb0a9cc326d2.png" alt="User's-icon" /></Link></Profiles>
                </RightNavBar>
            </MainHeaderDiv>
        )
    }
}



// const FADE_IN = keyframes`
//     0% { opacity: 0; }
//     100% { opacity: 1; }
// `;

// const FADE_OUT = keyframes`
//     0% { opacity: 1; }
//     100% { opacity: 0; }
// `;
                    



// onScroll = e => {
//     this.short_fade_in();
// };
                                                    
// short_fade_in = () => {
//     this.setState({
//         fade_duration: '550ms',
//         fade_anim: FADE_IN 
//     });
// };
                                                    
// short_fade_out = () => {
//     console.log('works')
//     this.setState({                                                   
//     });
// };