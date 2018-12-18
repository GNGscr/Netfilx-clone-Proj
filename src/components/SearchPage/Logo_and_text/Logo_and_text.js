import React, { Component } from 'react'

import { HeadLine, HeadSix, P, Buttons, Button, IMG, LogoAndTextDiv} from '../SearchPage.styles'

export default class LogoAndText extends Component {
    state = {

    }
    render() {
        return (
          <LogoAndTextDiv>
          <IMG src={"https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABSnR5FkuUbn8fBT9yJc3EkMXC9rFDuk3oLGUroKY6_iDeHj6wT1pr3Ntf5Ce0CxAl6TXk6RoCWF7WwKNMBrVjyEevpbYYvvR58NzXa9h0zOG_H4y4xvxaINwy-hNvQfe8Dih0BAjPnvJb6mpE7TukO0n7LX0_6ti8DXRdUglc63c9bw6cXZc0B0rvrL8LcS6euzk3KCuEEpYV_tGFMR02bg7ddzbYxNBoocrU1J7w-33AARYWGQ0Ijb42lK4JTQ1ZC8.webp"} alt=""/>
            <Buttons>
                <Button>Play</Button>
                <Button>My List</Button>
            </Buttons>
            <br />
            <HeadLine>
                <HeadSix>Watch Season 1 Now</HeadSix>
                <P>Raging hormones, unruly bodies, awkward romances: <br /> Puberty is coming. And it's a filthy beast.</P>
            </HeadLine>
        </LogoAndTextDiv>
        )
    }
}