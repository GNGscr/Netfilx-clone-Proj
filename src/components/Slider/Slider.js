import React, { Component } from 'react';
import '../../styled/App.css';
// import react from 'react';
import {
  Wrapper, PageHead, Sliderer, SliderMask, SliderItem,
  IMG, LeftArrow, RightArrow, P,
  RightArrowIMG, LeftArrowIMG, scale_duration, FADE_IN, FADE_OUT,
  Title, Details, Descrition, Summary, CirclesBox,
  Circle, Play, Box 
  // scale_ease, wire_grey ,scale_delay
} from './Slider.styles'
import { setTimeout } from 'timers';

class Slider extends Component {

  constructor(props) {
    super(props);
    this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
    this.handleOnRightArrowClick = this.rightArrowClick.bind(this);
    this.state = {
      showItems: 1,
      width: window.innerWidth,
      data: [],
      fade_duration: scale_duration,
      fade_anim: null,
      slider: 0
      };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('./MOCK_DATA.json')
    const data = await res.json();
    this.setState({ 
      data 
    })
  }

  componentWillMount() {
    this.updateSliderState()
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth
    });
    console.log(this.state.width);
  }

  updateSliderState() {
    let windowWidth = window.innerWidth

    let showItems = 2
    if (windowWidth > 1400) {
      showItems = 6
    } else if (windowWidth > 1100) {
      showItems = 5
    } else if (windowWidth > 800) {
      showItems = 4
    } else if (windowWidth > 500) {
      showItems = 3
    }
    this.setState({
      showItems
    })
  }

  leftArrowClick() {
    let windowWidth = window.innerWidth
    console.log(windowWidth)
    const slider = this.refs.slider;
    slider.style.transform = `translateX(${windowWidth-115}px)`
    slider.style.transition = '700ms'
    setTimeout(() => {
      slider.style.transform = `translateX(0px)`
      slider.style.transition = '0ms'    
    }, 700);
    console.log('left')
    setTimeout(()=> {
      let item = {};
      let items = [];
      for(let i = 0; i < this.state.showItems; i++) {
        item = this.state.data.pop();  
        items.unshift(item)
      }
      this.setState({
        data: [...items, ...this.state.data]
      })    
    }, 700)
  }

  rightArrowClick() {
    let windowWidth = window.innerWidth
    const slider = this.refs.slider;
    // console.dir(sliderItem)
    slider.style.transform = `translateX(-${windowWidth-115}px)`
    slider.style.transition = '700ms'
    setTimeout(() => {
      slider.style.transform = `translateX(0px)`
      slider.style.transition = '0ms'    
    }, 700);

    console.log('right')
    setTimeout(() => {
      let item = {};
      let items = [];
      for(let i = 0; i < this.state.showItems; i++) {
        item = this.state.data.shift();  
        items.push(item)
      }
      this.setState({
        data: [...this.state.data, ...items]
      })    
    }, 700);
  }

  // * * ============== Slide Events =============== * *

  timeout = null;
  move_timeout = null;

  mouseEnter = e => {
      this.short_fade_in();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.long_fade_out, 2000);
      // let xleft = (this.state.width() - (this.state.data.offset().left) + this.state.data.outerWidth()) < 70
      // let xright = this.state.data.offset.left < 70

      // let dir

      // if (xright) {
      //   dir = '-25%'
      // } else if (xleft) {
      //   dir = '25%'
      // } else {
      //   dir = '0'
      // }
  }
  mouseLeave = e => {
      clearTimeout(this.timeout);
      clearTimeout(this.move_timeout);
      this.move_timeout = null;
      this.short_fade_out();
  }
  mouseMove = e => {
      if(!this.move_timeout) {
          this.short_fade_in();
          this.move_timeout = setTimeout(() => {
              this.move_timeout = null;
              clearTimeout(this.timeout);
              this.timeout = setTimeout(this.long_fade_out, 2000);
          }, 300);
      }
  };

  short_fade_in = () => {
      this.setState({
          fade_duration: '550ms',
          fade_anim: FADE_IN
      });
  };
  short_fade_out = () => {
      this.setState({
          fade_duration: '400ms',
          fade_anim: FADE_OUT
      });
  };
  long_fade_out = () => {
      this.setState({
          fade_duration: '4000ms',
          fade_anim: FADE_OUT
      });
  };
  

  render() {
    console.log(this.state.data)
    if(this.state.data === []) {
      return (
        <>
        <P>loading......</P>
        </>
      )
    } else {
    return (
      <Wrapper>
        <PageHead>Netflix Originals</PageHead>
        <Sliderer>
          <SliderMask ref="slider">
            {
              this.state.data.map((e, i) => {
                console.log(e)
                return (
                  <SliderItem key={i} ref="sliderItem">
                      {/* <IMG src={e.poster} /> */}
                                  <Box
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        onMouseMove={this.mouseMove}
                        >
                            <IMG src={e.poster}/>
                            <Summary
                                anim={this.state.fade_anim}
                                duration={this.state.fade_duration}
                            >
                                <Play><IMG src='https://img.icons8.com/color/50/000000/play.png'/></Play>
                                <Title>{e.title}</Title>
                                <Details>{e.details}</Details>
                                <Descrition>{e.description}</Descrition>
                            </Summary>
                            <CirclesBox
                                anim={this.state.fade_anim}
                                duration={this.state.fade_duration}
                            >
                                {/* <Circle><IMG src='https://img.icons8.com/color/48/000000/mute.png'/></Circle> */}
                                <Circle><IMG src='https://img.icons8.com/color/48/000000/medium-volume.png'/></Circle>
                                <Circle><IMG src='https://img.icons8.com/ios-glyphs/48/000000/thumb-up.png'/></Circle>
                                <Circle><IMG src='https://img.icons8.com/ios-glyphs/48/000000/thumbs-down.png'/></Circle>
                                <Circle><IMG src='https://img.icons8.com/ios/48/000000/plus-math-filled.png'/></Circle>
                            </CirclesBox>
                        </Box>
                  </SliderItem>
                )
              })
            }
          </SliderMask>
          <LeftArrow onClick={this.handleOnLeftArrowClick}><LeftArrowIMG src="https://img.icons8.com/ios/96/000000/back-filled.png" /></LeftArrow>
          <RightArrow onClick={this.handleOnRightArrowClick}><RightArrowIMG src="https://img.icons8.com/ios/96/000000/forward-filled.png" /></RightArrow>
        </Sliderer>
      </Wrapper>
    );
    
  }
  }
}

export default Slider;
