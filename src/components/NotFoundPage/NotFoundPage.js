import React, { Component } from 'react'

import '../../styled/App.css'

// import NavBar from '../Global/NavBar';
// import Links from '../Global/Links';

import { Lander, HeadOne, HeadThree, Anker, HomeBtn } from './NotFoundPage.styles'

class NotFoundPage extends Component {
    state = {

    }
    render() {
        return (
            <Lander>
                <HeadOne>Whoop's... 404</HeadOne>
                <HeadThree>Wrong routing!!  Try another route..</HeadThree>
                <Anker href=""><HomeBtn>Back Home</HomeBtn></Anker>
            </Lander>
        )
    }
}

export default NotFoundPage;