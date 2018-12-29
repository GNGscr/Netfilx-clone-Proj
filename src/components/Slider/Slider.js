import React, { Component } from 'react';
import '../../styled/App.css';

import {
  Wrapper, PageHead, SliderMask, SliderItem,
  IMG, LeftArrow, RightArrow, P, Circle, Play, Box,
  RightArrowIMG, LeftArrowIMG, scale_duration, FADE_IN, FADE_OUT,
  Title, Details, Summary, CirclesBox, 
  // Description
  // scale_ease, wire_grey ,scale_delay
} from './Slider.styles'
import { setTimeout } from 'timers';
// import { TweenLite, Expo, Power0, Power1 } from "gsap";




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
    // console.log(this.state.width);
  }

  updateSliderState() {
    let showItems = 2
    if (this.state.width > 1400) {
      showItems = 6
    } else if (this.state.width > 1100) {
      showItems = 5
    } else if (this.state.width > 800) {
      showItems = 4
    } else if (this.state.width > 500) {
      showItems = 3
    }
    this.setState({
      showItems
    })
  }


  // --------------------------------------------------------------------------------
  // * * ==================== Scrolling left & right clicks ===================== * *
  // --------------------------------------------------------------------------------



  leftArrowClick() {
    // let windowWidth = window.innerWidth
    const slider = this.refs.slider;
    slider.style.transform = `translateX(${this.state.width -41.8}px)`
    if(this.state.width > 1400) {
      slider.style.transform = `translateX(${this.state.width-115.5}px)`
    } else if (this.state.width > 1100) {
      slider.style.transform = `translateX(${this.state.width-122}px)`
    } else if (this.state.width > 800) {
      slider.style.transform = `translateX(${this.state.width -114}px)`
    } else if (this.state.width > 500) {
      slider.style.transform = `translateX(${this.state.width -49}px)`
    }
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
    // let windowWidth = window.innerWidth
    const slider = this.refs.slider;
    // console.dir(sliderItem)
    slider.style.transform = `translateX(-${this.state.width -42}px)`
    if(this.state.width > 1400) {
      slider.style.transform = `translateX(-${this.state.width-115.5}px)`
    } else if (this.state.width > 1100) {
      slider.style.transform = `translateX(-${this.state.width-122}px)`
    } else if (this.state.width > 800) {
      slider.style.transform = `translateX(-${this.state.width -114}px)`
    } else if (this.state.width > 500) {
      slider.style.transform = `translateX(-${this.state.width -49}px)`
    }
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


  // ----------------------------------------------------------------------------
  // * * ==================== Mouse Enter & Leave Events ==================== * *
  // ----------------------------------------------------------------------------


  timeout = null;
  move_timeout = null;

  mouseEnter = e => {
    e.currentTarget.style.transform = `scale(2)`
    e.currentTarget.style.transition = '500ms'

    // console.log('my id is: target: ',e.currentTarget)
    // console.log('my id is: ',e.currentTarget.dataset.id)
    // console.log('my previous id is: ',e.currentTarget.previousElementSibling.dataset.id)
    // console.log('my next id is: ',e.currentTarget.nextElementSibling.dataset.id)
    
    // let oner = e.currentTarget.previousElementSibling.dataset.id
    // let twor = oner-1
    // console.log('The id thats before the previous is: ' + twor)
    // console.log('The previous id is: ' + oner)
    // console.log('MY ELEMENTS ID - the element that I mouse Entered on is: ',e.currentTarget.dataset.id)
    // let onerer = e.currentTarget.nextElementSibling.dataset.id
    // console.log('The next id is: ' + onerer)
    // let tworer = (onerer +++ 1)
    // console.log('The id thats after next is: ' + tworer)
    
    let prev = e.currentTarget.previousElementSibling
    // console.log(prev)
    prev.style.transform = `translateX(-7.5vw)`
    prev.style.transition = '500ms'
    let prev_two = e.currentTarget.previousElementSibling.previousElementSibling
        // console.log(prev_two)
    prev_two.style.transform = `translateX(-7.5vw)`
    prev_two.style.transition = '500ms'
    let prev_three = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling
        // console.log(prev_three)
    prev_three.style.transform = `translateX(-7.5vw)`
    prev_three.style.transition = '500ms'
    let prev_four = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
        // console.log(prev_four)
    prev_four.style.transform = `translateX(-7.5vw)`
    prev_four.style.transition = '500ms'
    let prev_five = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
        // console.log(prev_five)
    prev_five.style.transform = `translateX(-7.5vw)`
    prev_five.style.transition = '500ms'
    let prev_six = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
        // console.log(prev_six)
    prev_six.style.transform = `translateX(-7.5vw)`
    prev_six.style.transition = '500ms'

    let next = e.currentTarget.nextElementSibling
    // console.log(next)
    next.style.transform = `translateX(7.5vw)`
    next.style.transition = '500ms'
    let next_two = e.currentTarget.nextElementSibling.nextElementSibling
    // console.log(next_two)
    next_two.style.transform = `translateX(7.5vw)`
    next_two.style.transition = '500ms'
    let next_three = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling
    // console.log(next_three)
    next_three.style.transform = `translateX(7.5vw)`
    next_three.style.transition = '500ms'
    let next_four = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
    // console.log(next_four)
    next_four.style.transform = `translateX(7.5vw)`
    next_four.style.transition = '500ms'
    let next_five = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
    // console.log(next_five)
    next_five.style.transform = `translateX(7.5vw)`
    next_five.style.transition = '500ms'
    let next_six = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
    // console.log(next_six)
    next_six.style.transform = `translateX(7.5vw)`
    next_six.style.transition = '500ms'
    

      this.short_fade_in();
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.long_fade_out, 2000);
      // console.log()
  }
  mouseLeave = e => {
    e.currentTarget.style.transform = `scale(1)`
    e.currentTarget.style.transition = '500ms'
    // e.currentTarget.style.margin = '0'

    let prev = e.currentTarget.previousElementSibling
    // console.log(prev)
    prev.style.transform = `translateX(0px)`
    prev.style.transition = '500ms'
    let prev_two = e.currentTarget.previousElementSibling.previousElementSibling
    // console.log(prev_two)
    prev_two.style.transform = `translateX(0px)`
    prev_two.style.transition = '500ms'
    let prev_three = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling
    // console.log(prev_three)
    prev_three.style.transform = `translateX(0px)`
    prev_three.style.transition = '500ms'
    let prev_four = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
    // console.log(prev_four)
    prev_four.style.transform = `translateX(0px)`
    prev_four.style.transition = '500ms'
    let prev_five = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
    // console.log(prev_five)
    prev_five.style.transform = `translateX(0px)`
    prev_five.style.transition = '500ms'
    let prev_six = e.currentTarget.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling
    // console.log(prev_six)
    prev_six.style.transform = `translateX(0px)`
    prev_six.style.transition = '500ms'


    let next = e.currentTarget.nextElementSibling
    // console.log(next)
    next.style.transform = `translateX(0px)`
    next.style.transition = '500ms'
    let next_two = e.currentTarget.nextElementSibling.nextElementSibling
    // console.log(next_two)
    next_two.style.transform = `translateX(0px)`
    next_two.style.transition = '500ms'
    let next_three = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling
    // console.log(next_three)
    next_three.style.transform = `translateX(0px)`
    next_three.style.transition = '500ms'
    let next_four = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
    // console.log(next_four)
    next_four.style.transform = `translateX(0px)`
    next_four.style.transition = '500ms'
    let next_five = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
    // console.log(next_five)
    next_five.style.transform = `translateX(0px)`
    next_five.style.transition = '500ms'
    let next_six = e.currentTarget.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
    // console.log(next_six)
    next_six.style.transform = `translateX(0px)`
    next_six.style.transition = '500ms'

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

  // ** ============================= Faders =============================== **

  
  short_fade_in = () => {
      this.setState({
          fade_duration: '250ms',
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
    // console.log(this.state.data)
    if(this.state.data === []) {
      return (
        <>
        <P>loading......</P>
        </>
      )
    } else {
    return (
      <Wrapper>
        <PageHead />
          <SliderMask ref="slider">
            {
              this.state.data.map((e, i) => {
                // console.log(e)
                return (
                  <SliderItem key={i} ref={`sliderItem-${e.id}`}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        onMouseMove={this.mouseMove}
                        data-id={e.id}
                  >
                        <Box>
                            <IMG src={e.poster}/>
                            <Summary
                                anim={this.state.fade_anim}
                                duration={this.state.fade_duration}
                            >
                                <Play><IMG src='https://img.icons8.com/color/50/000000/play.png'/></Play>
                                <Title>{e.title}</Title>
                                <Details>{e.details}</Details>
                                {/* <Description>{e.description}</Description> */}
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

      </Wrapper>
    ); 
    }
  }
}

export default Slider;