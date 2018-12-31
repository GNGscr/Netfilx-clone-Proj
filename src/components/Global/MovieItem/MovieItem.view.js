import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
// const imgUrl ='https://occ-0-1390-2774.1.nflxso.net/art/47638/780b712076293b7e35f7778263f8282978647638.webp';

const divStyle = {
  // color: 'blue',
  // backgroundImage: 'url(' + imgUrl + ')',
  // backgroundRepeat: 'no-repeat',
  // width: '100vw'

};

class MovieItem extends Component {
  render () {
    return <ReactPlayer 
              url='https://youtu.be/o2AsIXSh2xo' 
              // url='https://youtu.be/o2AsIXSh2xo' 
              // url='https://www.youtube.com/embed/MPWMBITCudM' 

              // url='https://www.youtube.com/embed/0vHziRrCYqA' 
              style={divStyle} 
              height="60vw" 
              width="100vw" 
              playing
              config 
              // volume='0.3' 
              onEnded 
            />
  }
}
export default MovieItem;

