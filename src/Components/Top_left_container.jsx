import React, { Component } from 'react';
import {LiaHomeSolid} from 'react-icons/lia'
import {BiSearch} from 'react-icons/bi'
class Top_left_container extends Component {
    render() {
        return (
            <div className='top_left_container'>
                <ul>
                    <li><a href=""><LiaHomeSolid/><span>Home</span></a></li>
                    <li><a href=""><BiSearch/><span>Search</span></a></li>
                </ul>
            </div>
        );
    }
}

export default Top_left_container;