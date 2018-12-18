import React, { Component } from 'react';

export default class MovieItem extends Component {
  state = {

  }
  render() {
    return <video controls
    src="https://www.youtube.com/embed/0vHziRrCYqA"
    poster="https://occ-0-1390-2774.1.nflxso.net/art/b22b1/6ba4d7d1ac9eca044cc84278f18b8cd3057b22b1.webp"
    width="620">

Sorry, your browser doesn't support embedded videos, 
but don't worry, you can <a href="https://archive.org/details/BigBuckBunny_124">download it</a> 
and watch it with your favorite video player!

</video>
  }
}








// import '../../../../node_modules/video-react/dist/video-react.css' // import css
// // import styled from 'styled-components';
// import React from 'react';
// import { Player, ControlBar, ReplayControl,
//   ForwardControl, CurrentTimeDisplay,
//   TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
// } from 'video-react';

// export default (props) => {
//   return (
//     <Player
//       poster="https://occ-0-1390-2774.1.nflxso.net/art/b22b1/6ba4d7d1ac9eca044cc84278f18b8cd3057b22b1.webp"
//     >
//       <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
//       <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

//       <ControlBar>
//         <ReplayControl seconds={10} order={1.1} />
//         <ForwardControl seconds={30} order={1.2} />
//         <CurrentTimeDisplay order={4.1} />
//         <TimeDivider order={4.2} />
//         <PlaybackRateMenuButton
//           rates={[5, 2, 1, 0.5, 0.1]}
//           order={7.1}
//         />
//         <VolumeMenuButton />
//       </ControlBar>
//     </Player>
//   );
// };


// class Slider extends Component {

//   constructor (props) {
//     super(props);
//     this.handleOnLeftArrowClick = this.leftArrowClick.bind(this);
//     this.handleOnRightArrowClick = this.rightArrowClick.bind(this);
//     this.state = {
//       moving: false,
//       mv: 0,
//       startId: 0,
//       showItems: 1,
//       totalItems: 0,
//       SliderItems: [],
//       width: window.innerWidth
//     };
//     this.updateDimensions = this.updateDimensions.bind(this);
//   }
//   componentDidMount(){
//     this.updateSliderState()  
//     this.setState({
//       totalItems: Shows.length
//     })  
//   }
//   componentWillMount() {
//     window.addEventListener('resize', this.updateSliderState.bind(this) );
//     // window.addEventListener('resize', this.updateDimensions);
//   }
//   updateSliderItems(baseShowItem = this.state.showItems) {
//     let { SliderItems, startId } = this.state;

//     // left + center + right
//     // [1] + [4] + [4] + [4] + [1]
//     // [5] + [4] + [5]
//     let centerDataId = []
//     for(var i = 0; i < baseShowItem; i++){
//       let x = startId + i
//       if(x < this.state.totalItems) {
//         centerDataId.push(x)
//       } else {
//         centerDataId.push(x - this.state.totalItems)
//       }
//     }

//     let leftDataId = []
//     for(var i = 0; i < baseShowItem + 1; i++){
//       let x = startId - i - 1
//       if(x >= 0) {
//         leftDataId.push(x)
//       } else {
//         leftDataId.push(this.state.totalItems + x)
//       }
//     }

//     let rightDataId = []
//     for(var i = 0; i < baseShowItem + 1; i++){
//       let x = startId + baseShowItem + i
//       if(x < this.state.totalItems - baseShowItem + baseShowItem) {
//         rightDataId.push(x)
//       } else {
//         rightDataId.push(x - this.state.totalItems)
//       }
//     }

//     console.log('left', leftDataId)
//     console.log('center', centerDataId)
//     console.log('right', rightDataId)

//   }
//   updateDimensions() {
//     this.setState({
//       width: window.innerWidth
//     });
//     console.log(this.state.width);
//   }
//   // get data total
//   updateSliderState() {
//     let windowWidth = window.innerWidth
//     let showItems = 2
//     // Same as the css
//     if (windowWidth > 1400) {
//       showItems = 6
//     } else if (windowWidth > 1100) {
//       showItems = 5
//     } else if (windowWidth > 800) {
//       showItems = 4
//     } else if (windowWidth > 500) {
//       showItems = 3
//     } 
//     let mv = 100/showItems
//     this.setState({
//       showItems, mv
//     })
//   }
//   componentWillUnmount() {
//     window.removeEventListener('resize', this.updateDimensions)
//   }
  
//   leftArrowClick() {
//     // const slidermask = this.refs.slidermask;
//     // slidermask.style.transform = `translateX(-${this.state.width}px)`
//     const { showItems, startId, totalItems, mv } = this.state;
//     let plusNext = startId + showItems
//     let resetStartId = 0
//     if(plusNext >= totalItems) {
//       resetStartId = plusNext - totalItems
//     } else {
//       resetStartId = plusNext
//     }
//     this.updateSliderItems()
//     console.log('left')
//   }
//   rightArrowClick() {
//     // const slidermask = this.refs.slidermask;
//     // slidermask.style.transform = `translateX(${this.state.width}px)`

//     this.updateSliderItems()
//     console.log('right')
//   }
