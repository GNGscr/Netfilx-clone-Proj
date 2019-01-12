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
              // fileConfig="./images/BirdBox.mp4"
              // forceVideo="./images/BirdBox.mp4"
              // url='https://youtu.be/o2AsIXSh2xo' 
// src="./images/BirdBox.mp4"  
              url={[
                {src: './images/BirdBox.mp4', type: 'video/mp4'}
              ]}
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
    
    // <video
    // autoplay
    // type="video/webm"
    // src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    // poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
    // width="100vw"
    // />
