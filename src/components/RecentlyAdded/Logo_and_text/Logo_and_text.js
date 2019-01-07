import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeadLine, HeadSix, P, Buttons, Button, IMG, LogoAndTextDiv } from '../RecentlyAdded.styles'

export default class LogoAndText extends Component {
    state = {

    }
    render() {
        return (
          <LogoAndTextDiv>
          <IMG src={"https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABauvh6P8xAljO4RcTc4kvf_K-yhKm2ivzoAixXnuXGCKJLVZJpcAFNPjAvMZdFUdVoWrbZdOQnPiv5rpZEaskVwBGfKA77lmcU8CIF6kdLJbOzH_f5kqYc6gGmCLcsgsODQDiycAIPSc8qkBj3pOn977Zq7XWVr1mlIvtw7fJyoYu9rIPsEltcvSblwcPfYmKs7Oc7elqOAY7B4UvnPEeVyIMKEFHmHxHAIvixOFbniLbak64b76ABeG3kAkV_nz9AI.webp"} alt=""/>
            <Buttons>
                <Button>Play</Button>
                <Link style={{ textDecoration: 'none' }} to="/my-list"><Button>My List</Button></Link>
            </Buttons>
            <br />
            <HeadLine>
                <HeadSix>Watch Season 1 Now</HeadSix>                
                <P>His charm, impeccable. His tricks, astounding. But make <br /> no mistake -- with these stunts, life and death is no <br /> exaggeration.</P>
            </HeadLine>
        </LogoAndTextDiv>
        )
    }
}