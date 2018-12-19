import React, { Component } from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';

import { AppDiv, Hero } from './RecentlyAdded.styles';
import Slider from '../Slider/Slider';
import Footer from '../Global/Footer';

class RecentlyAdded extends Component {
  state = {
    msg: "temp msg"
  }
  render() {
    return (
      <AppDiv>
      <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/eb6d0/6f8b62fa1a805b0bbea4c02170e9239e592eb6d0.webp" alt=""/>
          <LogoAndText />
          <Slider/>
          <Slider/>
          <Slider/>
          <Slider/>
          <Slider/>
          <Footer />
      </AppDiv>
    );
  }
}

export default RecentlyAdded;

