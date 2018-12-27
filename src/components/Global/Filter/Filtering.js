import React, { Component } from 'react';
import {Inputer} from './Filter.styles'

export default class Filtering extends Component {
    state = {
        InputOn: false,        
        navbgclr: 'opacity: 0',
        cntctbox: 'opacity: 0'
    }
    toggleInput = () => {
        // console.log('responsive')
        // const { bgclr, navbgclr } = this.props;
        // const slideit = this.refs.slideit; 
        // slideit.style.transform = 'translateX(-250px)'
        if (this.state.InputOn) {
            // console.log('works')
            this.setState({
                navbgclr: 0,
                cntctbox: 0,
                InputOn: false
            })
        } else {
            // console.log('doesnt work')
            this.setState({
                navbgclr: 1,
                cntctbox: 1,
                InputOn: true
            })
        }
    }
    update_list(event) {
        //console.log('update_list')
        const { list_data , on_filter } = this.props;
        let txt = event.target.value;

        let filtered_list = list_data.filter( item =>
            item.title.toLowerCase().includes(txt.toLowerCase()) 
        )
        on_filter(filtered_list)
    }
    render() {
        return <Inputer placeholder="TV Shows, Movies" type="text" className="filter" onChange={(e) => this.update_list(e)} />
    }
}