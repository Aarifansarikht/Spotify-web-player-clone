import React, { Component } from 'react';
import {LuLibrary} from 'react-icons/lu'
import {AiOutlinePlus} from 'react-icons/ai'
import Library_card from './Library_card';
import Left_footer from '../common/Left_footer';
class Bottom_left_container extends Component {
    render() {
        return (
            <div className='bottom_left_container'>
                <div className="add_library">
                    <ul>
                        <li>
                            <a ><LuLibrary/><span>Your&nbsp;Library</span></a>
                            <a ><AiOutlinePlus/></a>
                        </li>
                    </ul>
                </div>
                <div className="lib_card">
                <Library_card/>
                <Library_card/>
                </div>
                <Left_footer/>
                
            </div>
        );
    }
}

export default Bottom_left_container;