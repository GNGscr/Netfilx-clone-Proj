import React, { Component } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
// import Filtering from './Filtering'

import {FilterClass, FilterIcon , FilterInput, FilterInputMobile, Filtered, ContentBox, IMG, FilterHeader, Carret} from './Filter.styles'

export default class Filter extends Component {

    state = {
        InputOn: false,        
        navbgclr: 'opacity: 0',
        cntctbox: 'opacity: 0',
        data: [],
        original_list: [],
        // list_data: [],
        displayed_list: []
        // filtered_list: [],

        // original_list:data,
        // displayed_list: data,
        // profile_data: data[0]
    }

    async componentDidMount() {
        const res = await fetch('./MOCK_DATAfull.json')
        const data = await res.json();
        this.setState({ 
            data,
            original_list:data,
            displayed_list: data,
            // list_data: data,
            // filtered_list: data
        })
        // console.log(data.length)
      }

    update_list_state(filtered_list){
        console.log('update_list_state',filtered_list.length)
        this.setState({
            displayed_list: filtered_list
        })
    }
    // update_profile(item){
    //     console.log('update_profile',item)
    //     this.setState({
    //         profile_data: item
    //     })
    // }

    // update_list(event) {
    //     console.log(event.target.value)
    //     const { list_data, on_filter } = this.props;
    //     let txt = event.target.value;
    //     let filtered_list = list_data.filter( item =>
    //         item.first_name.toLowerCase().includes(txt.toLowerCase())
    //     )
    //     on_filter(filtered_list)
    // }
    toggleInput = () => {
        // console.log('responsive')
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
    render() {
        return <FilterClass>
                    {/* <Filter className="filter" list_data={this.state.original_list} on_filter={(fl)=>this.update_list_state(fl)}/> */}
                    <FilterInput ref="slideit" bgclr={this.state.navbgclr} type="text" placeholder="Search TV Shows, Movies"  list_data={this.state.original_list} on_filter={(fl)=>this.update_list_state(fl)}/>
                    <FilterIcon onClick={this.toggleInput} src="https://img.icons8.com/ios-glyphs/26/000000/search.png" alt="" />
                    <FilterInputMobile type="text" placeholder="Search" list_data={this.state.original_list} on_filter={(fl)=>this.update_list_state(fl)}/>
               
                        <ContentBox cntctbx={this.state.cntctbox}>
                            <FilterHeader>{this.state.data.length} Items found</FilterHeader>
                            <Carret>^</Carret>
                            {
                                this.state.displayed_list.map((e, i) => {
                                    return (
                                       <Filtered>
                                        <IMG src={e.poster} alt="" />
                                            {e.title}
                                       </Filtered>
                                    )
                                })
                            }
                            </ContentBox>
                    {/* <FilterBox>
                    </FilterBox> */}
               </FilterClass>
    }
}
// {this.state.original_list}
// on_filter={(fl)=>this.update_list_state(fl)}
// Filter.PropTypes = {
    //         on_filter: PropTypes.func.isRequired,
    //         list_data: PropTypes.arrayOf(PropTypes.shape({
        //             id: PropTypes.number.isRequired,
        //             first_name: PropTypes.string.isRequired,
        //             last_name: PropTypes.string.isRequired,
        //             avatar: PropTypes.string.isRequired
        //         })).isRequired
        // }