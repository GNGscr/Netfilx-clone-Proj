import React, { Component } from 'react';
import '../../styled/App.css';

import {
  Wrapper, PageHead, SliderMask, SliderItem,
  IMG, LeftArrow, RightArrow, P, Circle, Play, Box,
  RightArrowIMG, LeftArrowIMG, scale_duration, FADE_IN, FADE_OUT,
  Title, Details, Summary, CirclesBox, 
  // Description
  // scale_ease, wire_grey ,scale_delay
} from './SliderTvShows.styles'
import { setTimeout } from 'timers';
// import { TweenLite, Expo, Power0, Power1 } from "gsap";




class SliderTvShows extends Component {

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
    const res = await fetch('./MOCK_DATAtvShows.json')
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
    slider.style.transform = `translateX(${this.state.width -42}px)`
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

export default SliderTvShows;

// nav shadow https://assets.nflxext.com/en_us/akira/jawBone/nav-shadow.png
// weeds big https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABf0nJdIBtgLdHwx2zoKdt3d59TeGIvgX_wjn0D6TYhV2-Ay42KRNYzk-Y_BTOuPp4el8AUjVT4jz2xmtDYAqfAmrgtK4OB7CqaYhPXshMx2R4_ptPLWdZAtfjlORcGvLGOWrhZLKnSI.webp
// stranger things https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/412e4119fb212e3ca9f1add558e2e7fed42f8fb4/AAAABU3yfQ5VYfhr38dBd1t1sOz_rZ1OhAHDWl79d53Cvu6R8a_aQTXRqK04m1XzFDP8CYElk3k6uzRwXA7dFhQRvEw93LQDXX0d0NM9tY7fX270gJ0H56ATPk7COBLrpdclmRPqw6wIiw.jpg


    // const rect = e.currentTarget.getBoundingClientRect()
    // const targetX = rect.x - window.innerWidth / 100 * 7.5;

    // console.log('MY X IS: ' + rect.x)
    // console.log('MY target X IS: ' + targetX);
    // console.log('rect: ', rect)

    // let hovered_id = e.currentTarget.dataset.id;
    // let prev_itmes = []
    // let next_itmes = []
    // for(let i = 1; i <= 36; i++) {
    //   if(i< hovered_id){

    //     const slider_item  = this.refs['sliderItem-'+i];
    //     const rect = slider_item.getBoundingClientRect()
    //     const targetX = rect.x - window.innerWidth / 100 * 7.5;

    //     TweenLite.to(slider_item, 0.5, { x: targetX})

    //   } else if (i> hovered_id){
    
    //     const slider_item  = this.refs['sliderItem-'+i];
    //     const rect = slider_item.getBoundingClientRect()
    //     const targetX = rect.x + window.innerWidth / 100 * 7.5;

    //     TweenLite.to(slider_item, 0.5, { x: targetX})
    //   }
    // }

    
    // TweenLite.to(e.currentTarget, 0.5, {scale: 2})
  


    // let two = one.previousElementSibling.dataset.id
    // let three = two.previousElementSibling.dataset.id
    // let four = three.previousElementSibling.dataset.id
    // let five = four.previousElementSibling.dataset.id
    // let six = five.previousElementSibling.dataset.id
    // let last = six.previousElementSibling.dataset.id
    // console.log('my previos elements are: ', one,two,three,four,five,six,last)
    // const slider = this.refs.slider

    // const sliderItem = this.refs.sliderItem

    // e.currentTarget.style.transform = `translateX(-40px)`
    // console.log(e.currentTarget.parentElement)
    
      // if(e.target.id < e.currentTarget.dataset.id) {
      //   console.log('lower then current', e.target.id)
      // } else {
      //   console.log('else')
    //   // }

    // e.currentTarget.parentElement.style.

    // if(e.target.id < e.currentTarget){
    // e.currentTarget.parentElement.style.transform = `translateX(-200px)`
    // } else if (e.target.id < e.currentTarget) {
    //   console.log('lower then current', e.target.id)
    // } else if (e.target.id === e.currentTarget){
    //   console.log('same')
    // } else {
    //   console.log('else')
    // }
    // e.currentTarget.parentElement.style.transform = `translateX(-200px)`

    // e.currentTarget.style.margin = '0 3.75vw'
    // console.log(slider)
    // if(slider.e.currentTarget.dataset.id > e.currentTarget.dataset.id) {
    //   slider.style.transform = `translateX(-100px)`
    // }
    // let counter = [];
    // for(let i = 0; i < e.currentTarget.parentElement; i++) {
    //   counter.push(i)
      
    //   // slider.splice(3, 1);
    //   slider.style.transform = `translateX(-300px)`
    //   slider.style.transition = '500ms'
    //   e.currentTarget.dataset.id.style.transform = `translateX(-200px)`
    // }
    // console.log(counter)

    // for(let j = slider; e.currentTarget.dataset.id > j; j++) {
    //   let counterer = [];
    //   counterer.push(j)
    //   console.log(counterer)
    //   // slider.style.transform = `translateX(-100px)`
    // }