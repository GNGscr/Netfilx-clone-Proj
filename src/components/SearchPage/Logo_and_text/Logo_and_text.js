import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { HeadLine, HeadSix, P, Buttons, Button, IMG, LogoAndTextDiv} from '../SearchPage.styles'

export default class LogoAndText extends Component {
    state = {

    }
    render() {
        return (
          <LogoAndTextDiv>
          <IMG src={"https://occ-0-1390-2774.1.nflxso.net/dnm/api/v5/rendition/25247fca08ea5e68662f1fd0bcbb48bf95617a4a/AAAABW0P1dvSOEtf-UXnP0n-X6bglkKF0Rp9KtkdNZH0TriOslaV7MqQhwQEsaProE1s_kGyizA1ttWxANUv6rgOrE-XkQqEcVSh9k3b-9Sd2fCHsAoGTBGRKLEIyANmMaYAFWKZJvK8TdWnlhakUITc9veyQfkV0LfZjOJIe2-dBc8-HMUQVP1SkpIgFPVNXQqGXDXQFM3bt6LUPU5L2JxNHQGi-wgL4ltSSGRVtqeIDQooJl2t8mUUCTebqG9_sjKlaKA.webp"} alt=""/>
            <Buttons>
                <Button>Play</Button>
                <Link style={{ textDecoration: 'none' }} to="/my-list"><Button>My List</Button></Link>
            </Buttons>
            <br />
            <HeadLine>
                <HeadSix></HeadSix>
                <P>Stay silent. Stay alert. Stay blindfolded. As a terrifying force lies in wait, a mother leads her children on a harrowing journey.</P>
            </HeadLine>
        </LogoAndTextDiv>
        )
    }
}