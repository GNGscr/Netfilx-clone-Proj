import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {FilterClass, FilterIcon , FilterInput, FilterInputMobile} from './Filter.styles'

export default class Filter extends Component {

    state = {
        InputOn: false,        
        navbgclr: 'opacity: 1'
    }

    update_list(e) {
        console.log(e.target.value)
        // const { list_data, on_filter } = this.props;
        // let txt = event.target.value;

        // let filter_list = list_data.filter( item =>
        //     item.first_name.toLowerCase().includes(txt.toLowerCase())
        // )
        // on_filter(filter_list)
    }

    toggleInput = () => {
        console.log('responsive')
        // const iconopacity = this.refs.iconopacity;
        // iconopacity.style.transition = 'opacity(0)';
        if (this.state.InputOn) {
            // console.log('works')
            this.setState({
                navbgclr: 0,
                InputOn: false
            })
        } else {
            // console.log('doesnt work')
            this.setState({
                navbgclr: 1,
                InputOn: true
            })
        }
    }

    render() {
        return <FilterClass>
                    <FilterInput type="text" placeholder="Titles, people, genres" onChange={(e) => this.update_list(e)}/>
                    <FilterIcon bgclr={this.state.navbgclr} onClick={this.toggleInput} src="https://img.icons8.com/ios-glyphs/26/000000/search.png" alt="" />
                    <FilterInputMobile type="text" placeholder="Search" onChange={(e) => this.update_list(e)}/>
               </FilterClass>
    }
}

// Filter.PropTypes = {
//         on_filter: PropTypes.func.isRequired,
//         list_data: PropTypes.arrayOf(PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             first_name: PropTypes.string.isRequired,
//             last_name: PropTypes.string.isRequired,
//             avatar: PropTypes.string.isRequired
//         })).isRequired
// }