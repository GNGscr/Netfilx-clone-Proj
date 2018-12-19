import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
const imgUrl ='https://occ-0-1390-2774.1.nflxso.net/art/b22b1/6ba4d7d1ac9eca044cc84278f18b8cd3057b22b1.webp';

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')'
};

class MovieItem extends Component {
  render () {
    return <ReactPlayer 
              url='https://www.youtube.com/embed/0vHziRrCYqA' 
              style={divStyle} 
              height="360px" 
              width="640px" 
              playing
              config 
              volume='0.3' 
              // onEnded 
            />
  }
}
export default MovieItem;