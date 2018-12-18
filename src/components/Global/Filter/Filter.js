import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {FilterClass, FilterIcon1, FilterIcon2, FilterInput, FilterInputMobile, FilterInputWrapper} from './Filter.styles'

export default class Filter extends Component {

    state = {
        InputOn: false,        
        navbgclr: 'opacity: 1',
        InputOn2: false,
        navbgclr2: 'opacity: 0'
        // clrOpen: false
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
        this.toggleInput2()
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

        // if(this.state.InputOn === false){
        //     this.setState({

        //         InputOn: true
        //     })
        // } else {
        //     this.setState({
        //         InputOn: false
        //     })
        // }
    }
    toggleInput2 = () => {
        console.log('responsive2')

        if (this.state.InputOn2) {
            // console.log('works')
            this.setState({
                navbgclr2: 0,
                InputOn2: false
            })
        } else {
            // console.log('doesnt work')
            this.setState({
                navbgclr2: 1,
                InputOn2: true
            })
        }
    }

    render() {
        return <FilterClass>
                    <FilterInputWrapper>
                        <FilterIcon2 bgclr2={this.state.navbgclr2} onClick={this.toggleInput2} src="https://img.icons8.com/ios-glyphs/26/000000/search.png" alt="" />
                        <FilterInput type="text" placeholder="Titles, people, genres" onChange={(e) => this.update_list(e)}/>
                    </FilterInputWrapper>
                    <FilterIcon1 bgclr={this.state.navbgclr} onClick={this.toggleInput} src="https://img.icons8.com/ios-glyphs/26/000000/search.png" alt="" />
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