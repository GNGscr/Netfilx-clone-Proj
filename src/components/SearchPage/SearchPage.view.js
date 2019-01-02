import React, { Component } from 'react';
import '../../styled/App.css';
// import NavBar from '../Global/NavBar'
import LogoAndText from './Logo_and_text/Logo_and_text';

import NavBar from '../Global/NavBar';
import Links from '../Global/Links';
import Slider from '../Slider/Slider';
import SliderTvShows from '../SliderTvShows/SliderTvShows';
import SliderMovies from '../SliderMovies/SliderMovies';
import SliderComedy from '../SliderComedy/SliderComedy';
import SliderFull from '../SliderFull/SliderFull';
import Footer from '../Global/Footer';
import { AppDiv, Hero, SliderSection, FooterSection, Hone, HeroMask, TrailerMask} from './SearchPage.styles';
// import MovieItem from '../Global/MovieItem/MovieItem.view'
// , Trailer 

class App extends Component {
  state = {
    mouseEntered: false,
    dspflx: 'none'
  }

  toggle_trailer = e => {
    console.log('works')
    if(this.state.dspflx) {
      this.setState({
        mouseEntered: false,
        dspflx: 'none'
      })
    } else {
      this.setState({
        mouseEntered: true,
        dspflx: 'flex'
      })
    }
  }

  // mouseLeave = e => {
  //   this.setState({
  //     mouseEntered: false,
  //     dspflx: 'none'
  //   })
  // }

  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero
          src="https://occ-0-1390-2774.1.nflxso.net/art/47638/780b712076293b7e35f7778263f8282978647638.webp" alt=""></Hero>
          {/* <Player onClick={this.toggle_trailer}></Player> */}
          {/* <Trailer><MovieItem /></Trailer> */}
          <TrailerMask/>
          {/* <Trailer dsp={this.state.dspflx}><MovieItem /></Trailer> */}
          <HeroMask></HeroMask>
          {/* <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/97e73/577e0a36fa77f3f032e4538e859c90267ab97e73.webp" alt=""></Hero> */}
          <LogoAndText />
            <SliderSection>
              <Hone>TV Shows</Hone>
              <SliderTvShows/>
              <Hone>Movies</Hone>
              <SliderMovies/>
              <Hone>Popular on Netflix</Hone>
              <Slider/>
              <Hone>Comedies:</Hone>
              <SliderComedy/>
              <Hone>More from Netflix</Hone>
              <SliderFull/>
              <Hone>Netflix Originals</Hone>
              <Slider/>
            </SliderSection>
            <FooterSection>
              <Footer />
            </FooterSection>
      </AppDiv>
    );
  }
}

export default App;






// Github :
// =======


// …or push an existing repository from the command line
//------------------------------------------------------------
//     git remote add origin git@github.com:GNGscr/Netfilx-clone-Proj.git
//     git push -u origin master



// …or create a new repository on the command line
//--------------------------------------------------

// echo "# Netfilx-clone-Proj" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin git@github.com:GNGscr/Netfilx-clone-Proj.git
// git push -u origin master