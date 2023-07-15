import React, { Component } from 'react';
import Right_navbar from '../common/Right_navbar';
import Card_list from './Card_list';
import Right_footer from '../common/Right_footer';
import Mainheader from '../common/Mainheader';

class Right_container extends Component {
    render() {
        return (
            <div>
                <Right_navbar/>
                <Mainheader/>
                <div className="main_content">
                  <Card_list/>
                  <Card_list/>
                  <Card_list/>
                    <Right_footer/>
                </div>
            </div>
        );
    }
}

export default Right_container;