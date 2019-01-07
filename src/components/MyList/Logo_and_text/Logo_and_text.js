import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeadLine, HeadSix, P, Buttons, Button, IMG, LogoAndTextDiv } from '../MyList.styles'

export default class LogoAndText extends Component {
    state = {

    }
    render() {
        return (
          <LogoAndTextDiv>
          <IMG src={"https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABVjVrYMMB8irYvtVjLMzH7yCh0bReAoy9X92-2_LWsRzPiiZr_-WNfAQyae8fria4a0UAAHcZtLeFfovd3e8FNdiOQ-vAAjXDKyOODeFAzPo7_vVZbJqHYrngrvz5-wbkgcVXL-nov1wT4akEcghGHy41YW2yLlAcX91Z-qPoBUCBpXzjtHszaOOhZvlQ3dAQQ2jbe2IApgxjgRpWfnw7MlRaHtlbskmbPdpx5sJxwyDFcHNdrezu3qGaN3Z-kZn3w0.webp"} alt=""/>
            <Buttons>
                <Button>Play</Button>
                <Link style={{ textDecoration: 'none' }} to="/my-list"><Button>My List</Button></Link>
            </Buttons>
            <br />
            <HeadLine>
                <HeadSix>Watch Season 1 Now</HeadSix>
                <P>The only way to prove himself in the FBI is to identify <br /> and arrest the country's most elusive terrorist.</P>
            </HeadLine>
        </LogoAndTextDiv>
        )
    }
}