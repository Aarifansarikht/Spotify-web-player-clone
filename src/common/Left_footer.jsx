import React, { Component } from 'react';
import{TbWorld} from 'react-icons/tb'

class Left_footer extends Component {
    render() {
        return (
            <>
            <div className="left_footer_container">
                <ul>
                    <li><a href="">Legal</a></li>
                    <li><a href="">Privacy&nbsp;Center</a></li>
                    <li><a href="">Privacy&nbsp;Policy</a></li>
                    <li><a href="">Cookies</a></li>
                    <li><a href="">About&nbsp;Ads</a></li>
                    <li><a href="">Accessbility</a></li>
                    <li><a href="">Cookies</a></li>
                </ul>
                <div className="btns">
                    <div className="btn_1">
                        <button><TbWorld/><span>English</span></button>
                    </div>
                </div>
            </div>
            
            </>
        );
    }
}

export default Left_footer;