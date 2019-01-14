import React, { Component } from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Filtering from './Filtering';
import {FilterClass, FilterIcon, FilterInputMobile, Filtered, ContentBox, IMG, FilterHeader, Carret} from './Filter.styles'
// import '../Profile/Profile'; 


export default class Filter extends Component {

    state = {
        InputOn: false,        
        // navbgclr: 'opacity: 0',
        // cntctbox:'opacity: 0',
        dspflx: 'none',
        data: [],
        original_list: [],
        displayed_list: [],
        profile_data: {}
        // list_data: [],
        // filtered_list: [],

        // original_list:data,
        // displayed_list: data,
    }

    async componentDidMount() {
        const res = await fetch('./MOCK_DATAfull.json')
        const data = await res.json();
        this.setState({ 
            data,
            original_list:data,
            displayed_list: data,
            profile_data: data[0]
        })
        // console.log(data.length)
      }

    update_list_state(filtered_list){
        // console.log('update_list_state',filtered_list.length)
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

    toggleInput = (e) => {
        const filterToggle = e.currentTarget.nextElementSibling
        console.log(filterToggle)
        if (this.state.InputOn) {
            // filterToggle.style.transition = `translateX(-550px)`
            // filterToggle.style.transitionDelay = '1000ms'
            // filterToggle.style.transformOrigin = 'right'
            // filterToggle.style.transition = '600ms'
            // console.log('works')
            this.setState({
                // navbgclr: 0,
                // cntctbox: 0,
                dspflx: 'none',
                InputOn: false
            })
        } else {
            // console.log('doesnt work')
            // filterToggle.style.transition =`translateX(550px)`
            // filterToggle.style.transition = '.5s'
            this.setState({
                // navbgclr: 1,
                // cntctbox: 1,
                dspflx: 'flex',
                InputOn: true
            })
        }
    }
    update_profile = item => {
        console.log('update_profile: ', item)
        this.setState({
            profile_data: item
        })
    }
    render() {
        return <FilterClass>
                    {this.state.InputOn && (
                        <Filtering list_data={this.state.original_list} on_filter={(fl)=>this.update_list_state(fl)}/>
                    )}
                    <FilterIcon onClick={this.toggleInput} alt="" />
                    <FilterInputMobile type="text" placeholder="Search" list_data={this.state.original_list} on_filter={(fl)=>this.update_list_state(fl)}/>
               
                            
                        <ContentBox
                        dsp={this.state.dspflx}
                        pick={(item)=> this.update_profile(item)}
                        >
                            <FilterHeader>{this.state.displayed_list.length} Items found</FilterHeader>
                            <Carret>^</Carret>
                            {
                                this.state.displayed_list.map((e, i) => {
                                    return (
                                       <Filtered key={i}>
                                        <IMG src={e.poster} alt="" />
                                            {e.title}
                                       </Filtered>
                                    )
                                })
                            }
                            </ContentBox>
                    {/* <FilterBox>
                    </FilterBox> */}
                    {/* <Profile {...this.state.profile_data} /> */}
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

        
        // cntctbx={this.state.cntctbox}