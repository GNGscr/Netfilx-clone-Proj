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
                    <ImageProfile><UserImg src="https://occ-0-1390-2774.1.nflxso.net/art/326d2/7f22331395c9669f63f6e97b9b3fcb0a9cc326d2.png" alt="" /></ImageProfile>
                    Him
                </Anker>
                <Anker href="">
                    <ImageProfile><UserImg src="https://occ-0-1390-2774.1.nflxso.net/art/8900c/9181bb80f90e31a8ff813a4476e761881518900c.png" alt="" /></ImageProfile>
                    Her
                </Anker>
                <Anker href="">
                    <ImageProfile><UserImg src="https://occ-0-1390-2774.1.nflxso.net/art/8900c/9181bb80f90e31a8ff813a4476e761881518900c.png" alt="" /></ImageProfile>
                    Add Profile
                </Anker>
                </LanderBtn>
                <Button>MANAGE PROFILES</Button>

            </Lander>
        )
    }
}

export default LandingPage;