import React, { Component } from 'react';
import '../../styled/App.css';
import {
  Wrapper, PageHead, Sliderer, SliderMask, SliderItem,
  SliderItemInner, IMG, LeftArrow, RightArrow, P,
  RightArrowIMG, LeftArrowIMG
} from './Slider.styles'
// import ListItem from '../ListItem/ListItem.view'



class Slider extends Component {

  constructor(props) {
    super(props);
    this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
    this.handleOnRightArrowClick = this.rightArrowClick.bind(this);
    this.state = {
      showItems: 1,
      width: window.innerWidth,
      data: [] 
      };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('./MOCK_DATA.json')
    const data = await res.json();
    this.setState({ data })
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
    // const sliderItem = this.refs.sliderItem;
    // let windowWidth = window.innerWidth
    // console.log(windowWidth)
    // sliderItem.style.transform = `translateX(${windowWidth}px)`
    console.log('left')
    let item = {};
    let items = [];
    for(let i = 0; i < this.state.showItems; i++) {
      item = this.state.data.pop();  
      items.unshift(item)
    }
    this.setState({
      data: [...items, ...this.state.data]
    })
  }

  rightArrowClick() {
    // const sliderItem = this.refs.sliderItem;
    // console.dir(sliderItem)
    // sliderItem.style.transform = `translateX(-400px)`
    console.log('right')
    let item = {};
    let items = [];
    for(let i = 0; i < this.state.showItems; i++) {
      item = this.state.data.shift();  
      items.push(item)
    }
    this.setState({
      data: [...this.state.data, ...items]
    })
  }
  

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
                    <SliderItemInner >
                      <IMG src={e.poster} />
                    </SliderItemInner>
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
