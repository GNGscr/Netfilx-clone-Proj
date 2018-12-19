import React from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';
import { AppDiv, Hero } from './MyList.styles';
import Slider from '../Slider/Slider';
import Footer from '../Global/Footer';


class MyList extends React.Component {
  state = {
    msg: "temp msg"
  }
  render() {
    return (
      <AppDiv>
      <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/b2c33/224481a9d5dc45c5413582cfc1964a94f77b2c33.webp" alt=""/>
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

export default MyList;



// link to an http shadow.png

// {/* <img src="https://assets.nflxext.com/en_us/akira/jawBone/nav-shadow.png" alt="" /> */}
