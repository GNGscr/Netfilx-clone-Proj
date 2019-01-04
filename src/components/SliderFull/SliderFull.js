import React, { Component } from 'react';
import '../../styled/App.css';
import { setTimeout } from 'timers';
import {
  Wrapper, PageHead, SliderMask, SliderItem,
  IMG, LeftArrow, RightArrow, P, Circle, Play, Box,
  RightArrowIMG, LeftArrowIMG, scale_duration, FADE_IN, FADE_OUT,
  Title, Details, Summary, CirclesBox, 
  Description
} from './SliderFull.styles'
// import { TweenLite, Expo, Power0, Power1 } from "gsap";



class SliderFull extends Component {

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
    const res = await fetch('./MOCK_DATAfull.json')
    // console.log('res: ',res)
    const data = await res.json();
    // console.log('data: ',data)
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

  // Updates the amount of shows to display according to the window's width
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
    slider.style.transform = `translateX(${this.state.width -35}px)`
    if(this.state.width > 1400) {
      slider.style.transform = `translateX(${this.state.width-115.5}px)`
    } else if (this.state.width > 1250) {
      slider.style.transform = `translateX(${this.state.width-128}px)`
    } else if (this.state.width > 1100) {
      slider.style.transform = `translateX(${this.state.width-139}px)`
    } else if (this.state.width > 1000) {
      slider.style.transform = `translateX(${this.state.width-123}px)`
    } else if (this.state.width > 800) {
      slider.style.transform = `translateX(${this.state.width -114}px)`
    } else if (this.state.width > 765) {
      slider.style.transform = `translateX(${this.state.width -54}px)`
    } else if (this.state.width > 500) {
      slider.style.transform = `translateX(${this.state.width -49}px)`
    } else if (this.state.width > 412) {
      slider.style.transform = `translateX(${this.state.width -45.2}px)`
    }  else if (this.state.width > 400) {
      slider.style.transform = `translateX(${this.state.width-45}px)`
    } else if (this.state.width > 365) {
      slider.style.transform = `translateX(${this.state.width -41.8}px)`
    } else if (this.state.width > 355) {
      slider.style.transform = `translateX(${this.state.width -39}px)`
    }
    slider.style.transition = '700ms'
    setTimeout(() => {
      slider.style.transform = `translateX(0px)`
      slider.style.transition = '0ms'    
    }, 700);
    // console.log('left')
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
    slider.style.transform = `translateX(-${this.state.width -35}px)`
    if(this.state.width > 1400) {
      slider.style.transform = `translateX(-${this.state.width-115.5}px)`
    } else if (this.state.width > 1250) {
      slider.style.transform = `translateX(-${this.state.width-128}px)`
    } else if (this.state.width > 1100) {
      slider.style.transform = `translateX(-${this.state.width-139}px)`
    } else if (this.state.width > 1000) {
      slider.style.transform = `translateX(-${this.state.width-123}px)`
    } else if (this.state.width > 800) {
      slider.style.transform = `translateX(-${this.state.width -114}px)`
    } else if (this.state.width > 765) {
      slider.style.transform = `translateX(-${this.state.width -54}px)`
    } else if (this.state.width > 500) {
      slider.style.transform = `translateX(-${this.state.width -49}px)`
    } else if (this.state.width > 412) {
      slider.style.transform = `translateX(-${this.state.width -45.2}px)`
    }  else if (this.state.width > 400) {
      slider.style.transform = `translateX(-${this.state.width-45}px)`
    } else if (this.state.width > 365) {
      slider.style.transform = `translateX(-${this.state.width -41.8}px)`
    } else if (this.state.width > 355) {
      slider.style.transform = `translateX(-${this.state.width -39}px)`
    }
    slider.style.transition = '700ms'
    setTimeout(() => {
      slider.style.transform = `translateX(0px)`
      slider.style.transition = '0ms'    
    }, 700);

    // console.log('right')
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
    let x = e.clientX
    // console.log(x)

    if(this.state.width > 1400) {
      if(x < 278){
        let current = e.currentTarget
        current.style.transformOrigin = 'left' 
        current.style.transition = '300ms'
        let previ = e.currentTarget.previousElementSibling
        previ.style.transform = `translateX(0vw)`
        previ.style.transition = '400ms'
        // Targeting all the next elements that comes after the current
        let next_one = current.nextElementSibling;
          while (next_one) {
            // console.log(next_one.dataset.id);
            console.log(next_one);
            next_one.style.transform = `translateX(15vw)`
            next_one.style.transition = '400ms'
            next_one = next_one.nextElementSibling;
          }
        } else if(x > 1162){
        let current = e.currentTarget
        current.style.transformOrigin = 'right' 
        current.style.transition = '300ms'
        let nextio = e.currentTarget.nextElementSibling
        nextio.style.transform = `translateX(0vw)`
        nextio.style.transition = '400ms'
        // Targeting all the previous elements that comes before the current
          let previous = current.previousElementSibling;
          while (previous) {
            console.log(previous);
            previous.style.transform =`translateX(-15vw)`
            previous.style.transition = '400ms'
            previous = previous.previousElementSibling;
          }
        } else {
          let current = e.currentTarget
          let previous = current.previousElementSibling;
          while (previous) {
            console.log(previous);
            previous.style.transform =`translateX(-7.5vw)`
            previous.style.transition = '400ms'
            previous = previous.previousElementSibling;
          }
        let next_one = current.nextElementSibling;
          while (next_one) {
            // console.log(next_one.dataset.id);
            console.log(next_one);
            next_one.style.transform = `translateX(7.5vw)`
            next_one.style.transition = '400ms'
            next_one = next_one.nextElementSibling;
          }
        }
        e.currentTarget.style.transform = `scale(2)`
        e.currentTarget.style.transition = '400ms'
      } else if(this.state.width < 400) {
      // console.log(x)
        if(x < 188){
          let current = e.currentTarget
          current.style.transformOrigin = 'left' 
          current.style.transition = '300ms'
          let next_one = current.nextElementSibling;
          while (next_one) {
            console.log(next_one);
            next_one.style.transform = `translateX(44.9vw)`
            next_one.style.transition = '400ms'
            next_one = next_one.nextElementSibling;
          }
        } 
        else if(x > 188) {
          let current = e.currentTarget
          let previous = current.previousElementSibling;
          while (previous) {
            console.log(previous);
            previous.style.transform =`translateX(-44.9vw)`
            previous.style.transition = '400ms'
            previous = previous.previousElementSibling;
          }
          current.style.transformOrigin = 'right' 
          current.style.transition = '300ms'
        }
      e.currentTarget.style.transform = `scale(2.003)`
      e.currentTarget.style.transition = '400ms'
    }
    this.short_fade_in();
    clearTimeout(this.timeout);
    this.timeout = setTimeout(this.long_fade_out, 2000);
  }
  mouseLeave = e => {
    let current = e.currentTarget
    current.style.transform = `scale(1)`
    current.style.transition = '500ms'
    // e.currentTarget.style.margin = '0'
    let previous = current.previousElementSibling;
    while (previous) {
      console.log(previous);
      previous.style.transform =`translateX(0px)`
      previous.style.transition = '500ms'
      previous = previous.previousElementSibling;
    }
    let next_one = current.nextElementSibling;
    while (next_one) {
      console.log(next_one);
      next_one.style.transform = `translateX(0px)`
      next_one.style.transition = '500ms'
      next_one = next_one.nextElementSibling;
    }    
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
  
  // ** ========================= Faders ============================= **
  
  
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
                                <Description>{e.description}</Description>
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

export default SliderFull;