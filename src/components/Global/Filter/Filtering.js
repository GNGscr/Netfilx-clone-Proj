import React, { Component } from 'react';
import {Inputer} from './Filter.styles'

export default class Filtering extends Component {

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