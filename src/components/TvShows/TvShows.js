import React from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';
import Slider from '../Slider/Slider';
import { AppDiv, Hero } from './TvShows.styles';
import Footer from '../Global/Footer';

class TvShows extends React.Component {
  state = {
    msg: "temp msg"
  }
  render() {
    return (
      <AppDiv>
      <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/28f4e/b8e1f9755ecda49dc8afef7c603923029f828f4e.webp" alt=""/>
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

export default TvShows;
