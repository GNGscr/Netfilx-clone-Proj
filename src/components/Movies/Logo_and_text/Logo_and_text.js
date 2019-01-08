import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { HeadLine, HeadSix, P, Buttons, Button, IMG, LogoAndTextDiv } from '../Movies.styles'

export default class LogoAndText extends Component {
    state = {

    }
    render() {
        return (
          <LogoAndTextDiv>
          <IMG src={"https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABYjBLuY59dYIFz7k28id19tIbxpbiwPDb-JAUQH3-LpqkqkY8VAA4yx9IWIhk8fdGzxKJM0AKNoKqmRK8fRyVkL1cZsyEtKx5dmLpP25fzmZEf5kePrWWiSfzXdD1mDrdAEWzx2Diz2shwgShSo0DDVTUYYMDoIiJqveT4uf2pAhmgcuoNrExvS5IS9UfN4knWIW5v_oOlcPv4xcdM_ZUL7flNjpigEq5GMMr5BnUJVIcNhMNXdEJCX9_4wU8rrzVc8.webp"} alt=""/>
            <Buttons>
                <Button>Play</Button>
                <Link style={{ textDecoration: 'none' }} to="/tv-shows"><Button>TV Shows</Button></Link>
            </Buttons>
            <br />
            <HeadLine>
                <HeadSix>Watch Season 1 Now</HeadSix>
                <P>Torn between two worlds, he's on a treacherous quest to <br />  discover who he really is -- and the hero he's meant to <br />  become.</P>
            </HeadLine>
        </LogoAndTextDiv>
        )
    }
}