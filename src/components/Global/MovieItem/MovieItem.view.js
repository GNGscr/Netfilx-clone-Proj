import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
// const imgUrl ='https://occ-0-1390-2774.1.nflxso.net/art/47638/780b712076293b7e35f7778263f8282978647638.webp';

const divStyle = {
  // color: 'blue',
  // backgroundImage: 'url(' + imgUrl + ')',
  // backgroundRepeat: 'no-repeat',
  // width: '100vw'
  position: 'absolute',
  left: 0,
  // transform: 'display',
  // display: `${props => props.dsp}`
};

class MovieItem extends Component {
  render () {
    return <ReactPlayer 
              url='https://youtu.be/o2AsIXSh2xo' 
              style={divStyle} 
              height="60vw" 
              width="100vw" 
              playing
              light="true"
              wrapper='div'
              // suppressHydrationWarning={true}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }}}
              // volume='0.3' 
              // onEnded 

            />
  }
}
export default MovieItem;

