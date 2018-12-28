import React, { Component } from 'react';
// import { connect } from 'react-redux';
import '../../styled/App.css';
import { Link } from 'react-router-dom';
import {
     HeadOne, Lander, LanderBtn, Anker, ImageProfile, Button, UserImg, LOGO
    } from './LandingPage.styles'

    
class LandingPage extends Component {
    state = {

    }
    render() {
        return (
            <Lander>
                <Link to="/"><LOGO src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" alt="Netfilx-Logo"/></Link>
                <HeadOne>Who's watching?</HeadOne>
                <LanderBtn>
                <Anker href="">
                    <ImageProfile><UserImg src="https://occ-0-1855-300.1.nflxso.net/art/5f7d6/cecf37546877d182b9ec6b9c356352a0dc75f7d6.png" alt="" /></ImageProfile>
                    Him
                </Anker>
                <Anker href="">
                    <ImageProfile><UserImg src="https://occ-0-1855-300.1.nflxso.net/art/4cdd3/12e92b07158f302dca3c027af2a608f5d364cdd3.png" alt="" /></ImageProfile>
                    Her
                </Anker>
                <Anker href="">
                    <ImageProfile><UserImg src="https://img.icons8.com/material/480/000000/plus.png" alt="" /></ImageProfile>
                    Add Profile
                </Anker>
                </LanderBtn>
                <Button>MANAGE PROFILES</Button>
            </Lander>
        )
    }
}

export default LandingPage;