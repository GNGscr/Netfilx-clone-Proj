import React, { Component } from 'react';
import { HeadLine, HeadSix, P, Buttons, Button, IMG, LogoAndTextDiv } from '../TvShows.styles';

export default class LogoAndText extends Component {
    state = {

    }
    render() {
        return (
          <LogoAndTextDiv>
          <IMG src={"https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABQmIVbZmAAD5ywmC6eWnJszKyw58mISBJ0tAzyYObDKyr_aJAus2isEow-9YocAmK2r82gtIJIkdY36ASRvqPWGt0qENcxfgJHYZWomwsn-S4raser7q5ukxZIOnfnKy7IQRctUo5YIKWmVqmLBG9NWU243drniRBUprUtABWXLN09w1d-8z_y_1aFicFURAkQ-fwvCUkGbAw9vqBHu9vkpcPxtAs6G-IjxnLvPYq_SXLGCviIzFYgrDwlg-1Lu6_Tc.webp"} alt=""/>
            <Buttons>
                <Button>Play</Button>
                <Button>My List</Button>
            </Buttons>
            <br />
            <HeadLine>
                <HeadSix>Watch Season 1 Now</HeadSix>
                <P>Desperate times call for family unity. Now family night means stacking millions in drug cash inside a cabin's walls..</P>
            </HeadLine>
        </LogoAndTextDiv>
        )
    }
}