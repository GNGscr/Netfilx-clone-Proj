import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {FilterClass, FilterIcon , FilterInput, FilterInputMobile} from './Filter.styles'

export default class Filter extends Component {

    state = {
        InputOn: false,        
        navbgclr: 'opacity: 0',
        data: [],
        list_data: [],
        filter_list: [],

        // original_list:data,
        // displayed_list: data,
        // profile_data: data[0]
    }

    async componentDidMount() {
        const res = await fetch('./MOCK_DATA.json')
        const data = await res.json();
        this.setState({ 
          data
        })
        console.log(data.length)
      }

    // update_list_state(filtered_list){
    //     console.log('update_list_state',filtered_list.length)
    //     this.setState({
    //         displayed_list: filtered_list
    //     })
    // }
    // update_profile(item){
    //     console.log('update_profile',item)
    //     this.setState({
    //         profile_data: item
    //     })
    // }

    update_list(e) {
        console.log(e.target.value)
        const { list_data, on_filter } = this.props;
        let txt = e.target.value;
        let filter_list = list_data.filter( item =>
            item.first_name.toLowerCase().includes(txt.toLowerCase())
        )
        on_filter(filter_list)
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
                    {/* <Filter className="filter" list_data={this.state.original_list} on_filter={(fl)=>this.update_list_state(fl)}/> */}
                    <FilterInput bgclr={this.state.navbgclr} type="text" placeholder="Titles, people, genres" onChange={(e) => this.update_list(e)}/>
                    <FilterIcon onClick={this.toggleInput} src="https://img.icons8.com/ios-glyphs/26/000000/search.png" alt="" />
                    <FilterInputMobile type="text" placeholder="Search" onChange={(e) => this.update_list(e)}/>
               
                    {/* <div className="content-box">
                    <Profile {...this.state.profile_data}/>
                    <List list_data={this.state.displayed_list}
                        pick={(item)=> this.update_profile(item)}/>
                    </div> */}
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