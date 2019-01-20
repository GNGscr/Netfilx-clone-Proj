import React, { Component } from 'react';
import '../../styled/App.css';
import { setTimeout } from 'timers';
import {
  Wrapper, PageHead, SliderMask, SliderItem,
  IMG, LeftArrow, RightArrow, P, Circle, Play, Box,
  RightArrowIMG, LeftArrowIMG, scale_duration,
  Title, Details, Summary, CirclesBox, 
  Description,
} from './SliderFull.styles';
import ReactPlayer from 'react-player'


class SliderFull extends Component {

  constructor(props) {
    super(props);
    this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
    this.handleOnRightArrowClick = this.rightArrowClick.bind(this);
    this.state = {
      showItems: 1,
      width: window.innerWidth,
      data: [],
      styles:[],
      playingArr:[],
      fade_duration: scale_duration,
      fade_anim: null,
      slider: 0,
      opcty: 'opacity: 0',
      on: false,
      dsptrlr: 'none'
      };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('./MOCK_DATAfull.json')
    const data = await res.json();

    const styles = data.map(item=>{
      return {
        id:item.id,
        position: 'absolute',
        paddingLeft: 1,
        zIndex: '25',
        display: 'none',
        backgroundColor: 'rgb(20,20,20)'
      }
    })
    const playingArr = data.map(item=>false);

    this.setState({ 
      data ,
      styles,
      playingArr
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
      // console.log(this.state.width);
    });
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

  // ---------------------------------------------------------------------------------
  // * * ======= Scrolling Animation & Items Shuffle - left & right clicks ======= * *
  // ---------------------------------------------------------------------------------

  leftArrowClick() {
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
    } else if (this.state.width > 735) {
      slider.style.transform = `translateX(${this.state.width -51.2}px)`
    } else if (this.state.width > 665) {
      slider.style.transform = `translateX(${this.state.width -46.6}px)`
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
    const slider = this.refs.slider;
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
    } else if (this.state.width > 735) {
      slider.style.transform = `translateX(-${this.state.width -51.2}px)`
    } else if (this.state.width > 665) {
      slider.style.transform = `translateX(-${this.state.width -46.6}px)`
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

  // -----------------------------------------------------------------------------
  // * * ========= Events - Mouse Enter || Mouse Leave & Mouse Move  ========= * *
  // -----------------------------------------------------------------------------


  mouseEnter = e => {
    let x = e.clientX
    // const start = new Date().getTime();
    // setTimeout(() => {
    //   const end = new Date().getTime();
    //   // console.log('end', end)
    //   const add = end - start
    //   console.log('time passed from entering: ', add,'ms')
    // }, 4000);
    // console.log(x)
    // let trailerItem = e.currentTarget.lastChild
    // console.log(trailerItem)
    // trailerItem.style.opacity = '1'
    // trailerItem.style.transition = '5000ms'
    // const trailer = this.refs.trailer
    // trailer.style.transform = 'display'
    let current = e.currentTarget;
    current.style.transition = '400ms';
    let previous = current.previousElementSibling;
    previous.style.transition = '400ms'
    let next = current.nextElementSibling;
    next.style.transition = '400ms';
    if(this.state.width > 1400) {
      if(x < 278){
        current.style.transformOrigin = 'left' 
        current.style.transition = '300ms'
          // Targeting all the next elements that comes after the current
          while (next) {
            next.style.transform = `translateX(15vw)`
            next.style.transition = '400ms'
            next = next.nextElementSibling;
          }
        } else if(x > 1162){
        current.style.transformOrigin = 'right' 
        current.style.transition = '300ms'
        // Targeting all the previous elements that comes before the current        
          while (previous) {
            previous.style.transform =`translateX(-15vw)`
            previous.style.transition = '400ms'
            previous = previous.previousElementSibling;
          }
        } else {
          while (previous) {
            previous.style.transform =`translateX(-7.5vw)`
            previous.style.transition = '400ms'
            previous = previous.previousElementSibling;
          }
          while (next) {
            next.style.transform = `translateX(7.5vw)`
            next.style.transition = '400ms'
            next = next.nextElementSibling;
          }
        }
        current.style.transform = `scale(2)`
        current.style.transition = '400ms'

      } else if(this.state.width < 740) {
        // console.log(x)
          if(x < 250){
            current.style.transformOrigin = 'left' 
            current.style.transition = '300ms'
            while (next) {
              next.style.transform = `translateX(31vw)`
              next.style.transition = '400ms'
              next = next.nextElementSibling;
            }
          } 
          else if(x > 455) {
            current.style.transformOrigin = 'right' 
            current.style.transition = '300ms'
            while (previous) {
              previous.style.transform =`translateX(-31vw)`
              previous.style.transition = '400ms'
              previous = previous.previousElementSibling;
            }
          }
          else {
            current.style.transformOrigin = 'center' 
            current.style.transition = '300ms'
            
          while (previous) {
              previous.style.transform =`translateX(-15.5vw)`
              previous.style.transition = '400ms'
              previous = previous.previousElementSibling;
            }
          while (next) {
              next.style.transform = `translateX(15vw)`
              next.style.transition = '400ms'
              next = next.nextElementSibling;
            }
          }
        current.style.transform = `scale(2.003)`
        current.style.transition = '400ms'
      } else if(this.state.width < 670) {
        // console.log(x)
        if(x < 220){
          current.style.transformOrigin = 'left' 
          current.style.transition = '300ms'
          while (next) {
            next.style.transform = `translateX(31vw)`
            next.style.transition = '400ms'
            next = next.nextElementSibling;
          }
        } 
        else if(x > 450) {
          current.style.transformOrigin = 'right' 
          current.style.transition = '300ms'
          while (previous) {
            previous.style.transform =`translateX(-31vw)`
            previous.style.transition = '400ms'
            previous = previous.previousElementSibling;
          }
        }
        else {
          current.style.transformOrigin = 'center' 
          current.style.transition = '300ms'
          
        while (previous) {
            previous.style.transform =`translateX(-15.5vw)`
            previous.style.transition = '400ms'
            previous = previous.previousElementSibling;
          }
        while (next) {
            next.style.transform = `translateX(15vw)`
            next.style.transition = '400ms'
            next = next.nextElementSibling;
          }
        }
        current.style.transform = `scale(2.003)`
        current.style.transition = '400ms'
      } else if(this.state.width < 500) {
        // console.log(x)
          if(x < 188){
            current.style.transformOrigin = 'left' 
            current.style.transition = '300ms'
            while (next) {
              next.style.transform = `translateX(44.9vw)`
              next.style.transition = '400ms'
              next = next.nextElementSibling;
            }
          } 
          else if(x > 188) {
            current.style.transformOrigin = 'right' 
            current.style.transition = '300ms'
            while (previous) {
              previous.style.transform =`translateX(-44.9vw)`
              previous.style.transition = '400ms'
              previous = previous.previousElementSibling;
            }
          }
        current.style.transform = `scale(2.003)`
        current.style.transition = '400ms'
      } else if(this.state.width < 400) {
      // console.log(x)
        if(x < 188){
          current.style.transformOrigin = 'left' 
          current.style.transition = '300ms'
          while (next) {
            next.style.transform = `translateX(44.9vw)`
            next.style.transition = '400ms'
            next = next.nextElementSibling;
          }
        } 
        else if(x > 188) {
          current.style.transformOrigin = 'right' 
          current.style.transition = '300ms'
          while (previous) {
            previous.style.transform =`translateX(-44.9vw)`
            previous.style.transition = '400ms'
            previous = previous.previousElementSibling;
          }
        }
      current.style.transform = `scale(2.003)`
      current.style.transition = '400ms'
    }
    const id = e.currentTarget.dataset.id;
    const video_player = this.refs['trailer-'+e.currentTarget.dataset.id]
    // console.log('slide id: ',e.currentTarget.dataset.id)
    // console.log('video_player.style: ',video_player.props.style);
    video_player.playing = true;

    setTimeout(() => {
      const currentStyle = { ...this.state.styles[id-1] };
      currentStyle.display = 'block';
      const styles = [...this.state.styles.slice(0,id-1),currentStyle,...this.state.styles.slice(id)];
      const playingArr = [...this.state.playingArr.slice(0,id-1), true, ...this.state.playingArr.slice(id)];
      this.setState({
        styles,
        playingArr
      })
    }, 4000);
  }
  mouseLeave = e => {
    const id = e.currentTarget.dataset.id;
    const currentStyle = { ...this.state.styles[id-1] };
    currentStyle.display = 'none';
    const styles = [...this.state.styles.slice(0,id-1),currentStyle,...this.state.styles.slice(id)];
    const playingArr = [...this.state.playingArr.slice(0,id-1), false, ...this.state.playingArr.slice(id)];  
    this.setState({
      styles,
      playingArr
    })
    setTimeout(() => {
      const currentStyle = { ...this.state.styles[id-1] };
      currentStyle.display = 'none';
      const styles = [...this.state.styles.slice(0,id-1),currentStyle,...this.state.styles.slice(id)];
      const playingArr = [...this.state.playingArr.slice(0,id-1), false, ...this.state.playingArr.slice(id)];  
      this.setState({
        styles,
        playingArr
      })
    }, 4000);
    // const video_player = this.refs['trailer-'+e.currentTarget.dataset.id]
    // video_player.props.style.display = 'none';
    // video_player.playing = false;

    // let trailerItem = e.currentTarget.lastChild
    // console.log(trailerItem)
    // trailerItem.style.opacity = '0'
    // trailerItem.style.transition = '5000ms'
    let current = e.currentTarget
    current.style.transform = `scale(1)`
    current.style.transition = '400ms'
    let previous = current.previousElementSibling;
    let next = current.nextElementSibling;
    while (previous) {
      previous.style.transform =`translateX(0px)`
      previous.style.transition = '400ms'
      previous = previous.previousElementSibling;
    }
    while (next) {
      next.style.transform = `translateX(0px)`
      next.style.transition = '400ms'
      next = next.nextElementSibling;
    }
  }
  mouseMove = e => {
    const enter = e.currentTarget.children[1]
    const circbx = e.currentTarget.children[2]
      enter.style.opacity = '1'
      circbx.style.opacity = '1'
      enter.style.transition = '500ms'
      circbx.style.transition = '500ms'
      setTimeout(() => {
        enter.style.opacity = '0'
        circbx.style.opacity = '0'
        enter.style.transition = '6000ms'
        circbx.style.transition = '6000ms'
      }, 500);
  }
  boxEnter = e => {
    const enter = e.currentTarget.children[1]
    const circbx = e.currentTarget.children[2]
    // console.log('enter')
    // console.log(enter)
    enter.style.opacity = '1'
    circbx.style.opacity = '1'
    enter.style.transition = '500ms'
    circbx.style.transition = '500ms'
    setTimeout(() => {
      enter.style.opacity = '0'
      circbx.style.opacity = '0'
      enter.style.transition = '6000ms'
      circbx.style.transition = '6000ms'
    }, 500);
  }
  boxLeave = e => {
    const enter = e.currentTarget.children[1]
    const circbx = e.currentTarget.children[2]
    // console.log('leave')
    // console.log(enter)
    enter.style.opacity = '0'
    circbx.style.opacity = '0'
    enter.style.transition = '500ms'
    circbx.style.transition = '500ms'
  }

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
                  data-id={e.id}
                  >
                    <Box
                    onMouseEnter={this.boxEnter}
                    onMouseLeave={this.boxLeave}
                    onMouseMove={this.mouseMove}
                    >
                        <IMG src={e.poster}/>
                        <Summary
                            ref={`summary-${e.id}`}
                            opc={this.state.opcty}
                            >
                              <Play><IMG src='https://img.icons8.com/color/50/000000/play.png'/></Play>
                              <Title>{e.title}</Title>
                              <Details>{e.details}</Details>
                              <Description>{e.description}</Description>
                        </Summary>
                        <CirclesBox>
                            <Circle><IMG src='./images/volume16.png'/></Circle>
                            <Circle><IMG src='./images/dislike16.png'/></Circle>
                            <Circle><IMG src='./images/like16.png'/></Circle>
                            <Circle><IMG src='./images/plus.png'/></Circle>
                        </CirclesBox>
                    </Box>                        
                    <ReactPlayer ref={`trailer-${e.id}`}
                      // dsp={this.state.dsptrlr}
                      // url={e.trailer}
                      url={[
                          {src: './images/IronFist.mp4', type: 'video/mp4'}
                      ]}
                      style={this.state.styles[e.id-1]} 
                      playing={this.state.playingArr[e.id-1]} 
                      wrapper='div'
                      height="100%"
                      width="99%"
                    />
                  </SliderItem>
                )
              })
            }
            </SliderMask>
            <LeftArrow onClick={this.handleOnLeftArrowClick}><LeftArrowIMG src="./images/left256.png" /></LeftArrow>
            <RightArrow onClick={this.handleOnRightArrowClick}><RightArrowIMG src="./images/right256.png" /></RightArrow>
        </Wrapper>
      ); 
    }
  }
}
export default SliderFull;