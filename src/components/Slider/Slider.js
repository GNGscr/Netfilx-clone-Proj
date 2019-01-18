import React, { Component } from 'react';
import '../../styled/App.css';
import { setTimeout } from 'timers';
import {
  Wrapper, PageHead, SliderMask, SliderItem,
  IMG, LeftArrow, RightArrow, P, Circle, Play, Box,
  RightArrowIMG, LeftArrowIMG, scale_duration,
  Title, Details, Summary, CirclesBox, 
  Description,
  // TrailerWrapper
} from './Slider.styles';
import ReactPlayer from 'react-player'

const divStyle = {
  // color: 'blue',
  // backgroundImage: 'url(' + imgUrl + ')',
  // backgroundRepeat: 'no-repeat',
  // width: '100vw'
  position: 'absolute',
  left: 0,
  zIndex: '15',
  // display: 'none',
  // transform:`${props => props.dsp}`
  // display: `${props => props.dsp}`
};

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
      slider: 0,
      opcty: 'opacity: 0',
      on: false,
      dsptrlr: 'none'
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
    // const start = new Date().getTime();
    // setTimeout(() => {
    //   const end = new Date().getTime();
    //   // console.log('end', end)
    //   const add = end - start
    //   console.log('time passed from entering: ', add,'ms')
    // }, 4000);
    let x = e.clientX
    // console.log(x)
    // let trailerItem = e.currentTarget.lastChild
    // console.log(trailerItem)
    // trailerItem.style.opacity = '1'
    // trailerItem.style.transition = '5000ms'
    // const trailer = this.refs.trailer
    // trailer.style.transform = 'display'
    let current = e.currentTarget
    let previous = current.previousElementSibling;
    let next = current.nextElementSibling
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
    // setTimeout(() => {
    //   this.setState({
    //     on: !this.state.on,
    //     dsptrlr: 'flex'
    //   })
    // }, 4000);
  }
  mouseLeave = e => {
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
    // this.setState({
    //   on: false,
    //   dsptrlr: 'none'
    // })
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
      }, 3500);
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
    }, 3500); 
    // this.setState({
    //   on: !this.state.on
    // })
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
    // this.setState({
    //   on: false
    // })
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
                  {/* <TrailerWrapper> */}
                        {this.state.on && (
                          <ReactPlayer ref={`trailer-${e.id}`}
                          dsp={this.state.dsptrlr}
                          // url={e.trailer}
                          url={[
                              {src: './images/Ozark.mp4', type: 'video/mp4'}
                          ]}
                          style={divStyle} 
                          wrapper='div'
                          playing
                          height="105%"
                          width="100%"
                          />
                        )}
                 {/* </TrailerWrapper> */}
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
export default Slider;

// {/* {this.state.on && (
//   <ReactPlayer
//   ref={`trailer-${e.id}`}
//     // url={e.trailer}
//     url={[
//       {src: './images/Ozark.mp4', type: 'video/mp4'}
//     ]}
//     style={divStyle} 
//     wrapper='div'
//     playing
//     height="100%"
//     width="100%"
//     />
// )} */}

// import React, { Component } from 'react';
// import '../../styled/App.css';
// import { setTimeout } from 'timers';
// import {
  //   Wrapper, PageHead, SliderMask, SliderItem,
  //   IMG, LeftArrow, RightArrow, P, Circle, Play, Box,
  //   RightArrowIMG, LeftArrowIMG, scale_duration,
  //   Title, Details, Summary, CirclesBox, SummaryWrapper,
  //   Description
  // } from './Slider.styles';
  
  
  // class Slider extends Component {
    
    //   constructor(props) {
      //     super(props);
      //     this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
      //     this.handleOnRightArrowClick = this.rightArrowClick.bind(this);
      //     this.state = {
        //       showItems: 1,
        //       width: window.innerWidth,
        //       data: [],
        //       fade_duration: scale_duration,
        //       fade_anim: null,
        //       slider: 0,
        //       opcty: 'opacity: 0'
        //       };
        //     this.updateDimensions = this.updateDimensions.bind(this);
        //   }
        
        //   async componentDidMount() {
          //     const res = await fetch('./MOCK_DATA.json')
          //     // console.log('res: ',res)
          //     const data = await res.json();
          //     // console.log('data: ',data)
          //     this.setState({ 
            //       data 
            //     })
            //   }
            
            //   componentWillMount() {
              //     this.updateSliderState()
              //     window.addEventListener('resize', this.updateDimensions);
              //   }
              //   componentWillUnmount() {
                //     window.removeEventListener('resize', this.updateDimensions)
                //   }
                //   updateDimensions() {
                  //     this.setState({
                    //       width: window.innerWidth
                    //       // console.log(this.state.width);
                    //     });
                    //   }
                    
                    //   // Updates the amount of shows to display according to the window's width
                    //   updateSliderState() {
                      //     let showItems = 2
                      //     if (this.state.width > 1400) {
                        //       showItems = 6
                        //     } else if (this.state.width > 1100) {
                          //       showItems = 5
                          //     } else if (this.state.width > 800) {
                            //       showItems = 4
                            //     } else if (this.state.width > 500) {
                              //       showItems = 3
                              //     }
                              //     this.setState({
                                //       showItems
                                //     })
                                //   }
                                
                                //   // ---------------------------------------------------------------------------------
                                //   // * * ======= Scrolling Animation & Items Shuffle - left & right clicks ======= * *
                                //   // ---------------------------------------------------------------------------------
                                
                                //   leftArrowClick() {
                                  //     const slider = this.refs.slider;
                                  //     slider.style.transform = `translateX(${this.state.width -35}px)`
                                  //     if(this.state.width > 1400) {
                                    //       slider.style.transform = `translateX(${this.state.width-115.5}px)`
                                    //     } else if (this.state.width > 1250) {
                                      //       slider.style.transform = `translateX(${this.state.width-128}px)`
                                      //     } else if (this.state.width > 1100) {
                                        //       slider.style.transform = `translateX(${this.state.width-139}px)`
                                        //     } else if (this.state.width > 1000) {
                                          //       slider.style.transform = `translateX(${this.state.width-123}px)`
                                          //     } else if (this.state.width > 800) {
                                            //       slider.style.transform = `translateX(${this.state.width -114}px)`
                                            //     } else if (this.state.width > 765) {
                                              //       slider.style.transform = `translateX(${this.state.width -54}px)`
                                              //     } else if (this.state.width > 500) {
                                                //       slider.style.transform = `translateX(${this.state.width -49}px)`
                                                //     } else if (this.state.width > 412) {
                                                  //       slider.style.transform = `translateX(${this.state.width -45.2}px)`
                                                  //     }  else if (this.state.width > 400) {
                                                    //       slider.style.transform = `translateX(${this.state.width-45}px)`
                                                    //     } else if (this.state.width > 365) {
                                                      //       slider.style.transform = `translateX(${this.state.width -41.8}px)`
                                                      //     } else if (this.state.width > 355) {
                                                        //       slider.style.transform = `translateX(${this.state.width -39}px)`
                                                        //     }
                                                        //     slider.style.transition = '700ms'
                                                        //     setTimeout(() => {
                                                          //       slider.style.transform = `translateX(0px)`
                                                          //       slider.style.transition = '0ms'    
                                                          //     }, 700);
                                                          //     setTimeout(()=> {
                                                            //       let item = {};
                                                            //       let items = [];
                                                            //       for(let i = 0; i < this.state.showItems; i++) {
                                                              //         item = this.state.data.pop();  
                                                              //         items.unshift(item)
                                                              //       }
                                                              //       this.setState({
                                                                //         data: [...items, ...this.state.data]
                                                                //       })    
                                                                //     }, 700)
                                                                //   }
                                                                //   rightArrowClick() {
                                                                  //     const slider = this.refs.slider;
                                                                  //     slider.style.transform = `translateX(-${this.state.width -35}px)`
                                                                  //     if(this.state.width > 1400) {
                                                                    //       slider.style.transform = `translateX(-${this.state.width-115.5}px)`
                                                                    //     } else if (this.state.width > 1250) {
                                                                      //       slider.style.transform = `translateX(-${this.state.width-128}px)`
                                                                      //     } else if (this.state.width > 1100) {
                                                                        //       slider.style.transform = `translateX(-${this.state.width-139}px)`
                                                                        //     } else if (this.state.width > 1000) {
                                                                          //       slider.style.transform = `translateX(-${this.state.width-123}px)`
                                                                          //     } else if (this.state.width > 800) {
//       slider.style.transform = `translateX(-${this.state.width -114}px)`
//     } else if (this.state.width > 765) {
//       slider.style.transform = `translateX(-${this.state.width -54}px)`
//     } else if (this.state.width > 500) {
//       slider.style.transform = `translateX(-${this.state.width -49}px)`
//     } else if (this.state.width > 412) {
//       slider.style.transform = `translateX(-${this.state.width -45.2}px)`
//     }  else if (this.state.width > 400) {
//       slider.style.transform = `translateX(-${this.state.width-45}px)`
//     } else if (this.state.width > 365) {
//       slider.style.transform = `translateX(-${this.state.width -41.8}px)`
//     } else if (this.state.width > 355) {
//       slider.style.transform = `translateX(-${this.state.width -39}px)`
//     }
//     slider.style.transition = '700ms'
//     setTimeout(() => {
//       slider.style.transform = `translateX(0px)`
//       slider.style.transition = '0ms'    
//     }, 700);
//     setTimeout(() => {
//       let item = {};
//       let items = [];
//       for(let i = 0; i < this.state.showItems; i++) {
//         item = this.state.data.shift();  
//         items.push(item)
//       }
//       this.setState({
//         data: [...this.state.data, ...items]
//       })    
//     }, 700);
//   }

//   // -----------------------------------------------------------------------------
//   // * * ========= Events - Mouse Enter || Mouse Leave & Mouse Move  ========= * *
//   // -----------------------------------------------------------------------------

//   // timeout = null;
//   // move_timeout = null;
  
//   mouseEnter = e => {
//     let x = e.clientX
//     // console.log(x)
//     let current = e.currentTarget
//     let previous = current.previousElementSibling;
//     let next = current.nextElementSibling
//     if(this.state.width > 1400) {
//       if(x < 278){
//         current.style.transformOrigin = 'left' 
//         current.style.transition = '400ms'
//           // Targeting all the next elements that comes after the current
//           while (next) {
//             next.style.transform = `translateX(15vw)`
//             next.style.transition = '400ms'
//             next = next.nextElementSibling;
//           }
//         } else if(x > 1162){
//         current.style.transformOrigin = 'right' 
//         current.style.transition = '400ms'
//         // Targeting all the previous elements that comes before the current        
//           while (previous) {
//             previous.style.transform =`translateX(-15vw)`
//             previous.style.transition = '400ms'
//             previous = previous.previousElementSibling;
//           }
//         } else {
//           while (previous) {
//             previous.style.transform =`translateX(-7.5vw)`
//             previous.style.transition = '400ms'
//             previous = previous.previousElementSibling;
//           }
//           while (next) {
//             next.style.transform = `translateX(7.5vw)`
//             next.style.transition = '400ms'
//             next = next.nextElementSibling;
//           }
//         }
//         current.style.transform = `scale(2)`
//         current.style.transition = '400ms'

//       } else if(this.state.width < 400) {
//       // console.log(x)
//         if(x < 188){
//           current.style.transformOrigin = 'left' 
//           current.style.transition = '400ms'
//           while (next) {
//             next.style.transform = `translateX(44.9vw)`
//             next.style.transition = '400ms'
//             next = next.nextElementSibling;
//           }
//         } 
//         else if(x > 188) {
//           current.style.transformOrigin = 'right' 
//           current.style.transition = '400ms'
//           while (previous) {
//             previous.style.transform =`translateX(-44.9vw)`
//             previous.style.transition = '400ms'
//             previous = previous.previousElementSibling;
//           }
//         }
//       current.style.transform = `scale(2.003)`
//       current.style.transition = '400ms'
//     }
//   }
//   mouseLeave = e => {
//     let current = e.currentTarget
//     // e.currentTarget.style.margin = '0'
//     current.style.transform = `scale(1)`
//     current.style.transition = '400ms'
//     let previous = current.previousElementSibling;
//     let next = current.nextElementSibling;
//     while (previous) {
//       previous.style.transform =`translateX(0px)`
//       previous.style.transition = '400ms'
//       previous = previous.previousElementSibling;
//     }
//     while (next) {
//       next.style.transform = `translateX(0px)`
//       next.style.transition = '400ms'
//       next = next.nextElementSibling;
//     }
//   }
//   mouseMove = e => {
//     const enter = e.currentTarget.children[1]
//     const circbx = e.currentTarget.children[2]
//       enter.style.opacity = '1'
//       circbx.style.opacity = '1'
//       enter.style.transition = '500ms'
//       circbx.style.transition = '500ms'
//       // this.boxLinger()
//       setTimeout(() => {
//         enter.style.opacity = '0'
//         circbx.style.opacity = '0'
//         enter.style.transition = '6000ms'
//         circbx.style.transition = '6000ms'
//       }, 3500);
//     };
    
//   //     // this.move_timeout = setTimeout(() => {
//   //     //   this.move_timeout = null;
//   //     //   clearTimeout(this.timeout);
//   //     //   this.timeout = setTimeout(this.boxLinger, 2000);
//   //     // }, 400);

//   // };
//   boxEnter = e => {
//     const enter = e.currentTarget.children[1]
//     const circbx = e.currentTarget.children[2]
//     // console.log('enter')
//     // console.log(enter)
//     enter.style.opacity = '1'
//     circbx.style.opacity = '1'
//     enter.style.transition = '500ms'
//     circbx.style.transition = '500ms'
//     setTimeout(() => {
//       enter.style.opacity = '0'
//       circbx.style.opacity = '0'
//       enter.style.transition = '6000ms'
//       circbx.style.transition = '6000ms'
//     }, 3500);
    
//     // this.short_fade_in();
//     // clearTimeout(this.timeout);
//     // this.timeout = setTimeout(this.long_fade_out, 2000);
    
//   }
//   boxLeave = e => {
//     const enter = e.currentTarget.children[1]
//     const circbx = e.currentTarget.children[2]
//     // console.log('leave')
//     // console.log(enter)
//     enter.style.opacity = '0'
//     circbx.style.opacity = '0'
//     enter.style.transition = '500ms'
//     circbx.style.transition = '500ms'
//     // clearTimeout(this.timeout);
//     // clearTimeout(this.move_timeout);
//     // this.move_timeout = null;
//     // this.short_fade_out();
//   }

//   // ----------------------------------------------------------------------
//   // * * ========================= Faders ============================= * *
//   // ----------------------------------------------------------------------

//   // short_fade_in = e => {
//   //   this.setState({
//   //     fade_duration: '250ms',
//   //     fade_anim: FADE_IN
//   //   });
//   // };
//   // short_fade_out = e => {
//   //   this.setState({
//   //     fade_duration: '400ms',
//   //     fade_anim: FADE_OUT
//   //   });
//   // };
//   // long_fade_out = e => {

//   //   this.setState({
//   //     fade_duration: '4000ms',
//   //     fade_anim: FADE_OUT
//   //   });
//   // };
  
//   render() {
//     // console.log(this.state.data)
//     if(this.state.data === []) {
//       return (
//         <>
//         <P>loading......</P>
//         </>
//       )
//     } else {
//       return (
//         <Wrapper>
//           <PageHead />
//           <SliderMask ref="slider">
//             {
//               this.state.data.map((e, i) => {
//                 // console.log(e)
//                 return (
//                   <SliderItem key={i} ref={`sliderItem-${e.id}`}
//                   onMouseEnter={this.mouseEnter}
//                   onMouseLeave={this.mouseLeave}
//                   // onMouseMove={this.mouseMove}
//                   data-id={e.id}
//                   >
//                   <Box 
//                   // opc={this.state.opcty}
//                   onMouseEnter={this.boxEnter}
//                   onMouseLeave={this.boxLeave}
//                   onMouseMove={this.mouseMove}
//                   >
//                       <IMG src={e.poster}/>
//                       <Summary
//                           ref={`summary-${e.id}`}
//                           opc={this.state.opcty}
//                           // anim={this.state.fade_anim}
//                           // duration={this.state.fade_duration}
//                           >
//                           <SummaryWrapper>
//                             <Play><IMG src='https://img.icons8.com/color/50/000000/play.png'/></Play>
//                             <Title>{e.title}</Title>
//                             <Details>{e.details}</Details>
                            
//                             <Description>{e.description}</Description>
//                           </SummaryWrapper>
//                       </Summary>
//                       <CirclesBox
//                           // ref={`circleBox-${e.id}`}
//                           // anim={this.state.fade_anim}
//                           // duration={this.state.fade_duration}
//                           >
//                           {/* <Circle><IMG src='https://img.icons8.com/color/48/000000/mute.png'/></Circle> */}
//                           <Circle><IMG src='https://img.icons8.com/color/48/000000/medium-volume.png'/></Circle>
//                           <Circle><IMG src='https://img.icons8.com/ios-glyphs/48/000000/thumb-up.png'/></Circle>
//                           <Circle><IMG src='https://img.icons8.com/ios-glyphs/48/000000/thumbs-down.png'/></Circle>
//                           <Circle><IMG src='https://img.icons8.com/ios/48/000000/plus-math-filled.png'/></Circle>
//                       </CirclesBox>
//                   </Box>
//                   </SliderItem>
//                 )
//               })
//             }
//             </SliderMask>
//             <LeftArrow onClick={this.handleOnLeftArrowClick}><LeftArrowIMG src="https://img.icons8.com/ios/96/000000/back-filled.png" /></LeftArrow>
//             <RightArrow onClick={this.handleOnRightArrowClick}><RightArrowIMG src="https://img.icons8.com/ios/96/000000/forward-filled.png" /></RightArrow>
//         </Wrapper>
//       ); 
//     }
//   }
// }
// export default Slider;

