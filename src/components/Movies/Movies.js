import React from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';
import { AppDiv, Hero } from './Movies.styles';
import Slider from '../Slider/Slider';
import Footer from '../Global/Footer';

class Movies extends React.Component {
  state = {
    msg: "temp msg"
  }
  render() {
    return (
      <AppDiv>
      <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/b22b1/6ba4d7d1ac9eca044cc84278f18b8cd3057b22b1.webp" alt=""/>
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

export default Movies;



