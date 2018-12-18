import React, { Component } from 'react';
import NameInput from '../NameInput';
import TopBar from '../TopBar';
import React, { 
    Page,
    Box,
    Title,
    BookedBox
 } from './styles';
import React, { Button, Subtitle, Hline, GlobalStyle } from '../../common/global.styles';

class App extends Component {

    state = { booked_items: 0 }

    book_item = () => {
        let booked = this.state.booked_items + 1
        this.setState({ booked_items: booked })
    } 

    render() {
        console.log('this.state.booked_items: ', this.state.booked_items)
        return (
            <Page>
                <Box>
                    <TopBar>React Components are state machines</TopBar>
                    <Title>What is the STATE of affairs?</Title>
                    <BookedBox>
                            <Subtitle>Items booked: {this.state.booked_items}</Subtitle>
                            <Button onClick={ this.book_item}>
                                Book Item!
                            </Button>
                    </BookedBox>
                    <Hline />
                    <NameInput />
                </Box>
                <GlobalStyle />
            </Page>
        )
    }
}

export default App