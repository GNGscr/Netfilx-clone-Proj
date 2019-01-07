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
import { AppDiv, Hero, SliderSection, FooterSection, Hone, HeroMask, TrailerMask, TrailerWrapper } from './TvShows.styles';
import MovieItemTvshows from '../Global/MovieItem/MovieItemTvshows.view.'




class TvShows extends Component {
  state = {
    on: false
  }

  // componentDidMount() {
  //   if(!this.state.on){    
  //     this.setState({
  //       on:false
  //     })
  //   }
  // }

  mouseEnter = e => {
    console.log('enter')
      this.setState({
        on: !this.state.on
      })
  }
  mouseLeave = e => {
    console.log('leave')
    this.setState({
      on: false
    })
  }
  render() {
    return (
      <AppDiv>
          <NavBar><Links /></NavBar>
          <Hero src="https://occ-0-1390-2774.1.nflxso.net/art/28f4e/b8e1f9755ecda49dc8afef7c603923029f828f4e.webp" alt=""/>
          <TrailerWrapper>
            {this.state.on && (
            <MovieItemTvshows />
            )}
          </TrailerWrapper>
          <TrailerMask
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          />
          <HeroMask />
          <LogoAndText />
            <SliderSection>
              <Hone>More from Netflix</Hone>
              <SliderFull/>
              <Hone>TV Shows</Hone>
              <SliderTvShows/>
              <Hone>Movies</Hone>
              <SliderMovies/>
              <Hone>Popular on Netflix</Hone>
              <Slider/>
              <Hone>Comedies:</Hone>
              <SliderComedy/>
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

export default TvShows;