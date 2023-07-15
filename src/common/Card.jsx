import React, { Component } from 'react';
import Play from '../Components/Play';

class Card extends Component {

    render() {
        
        return (
            <div className="card_main">
                <div className="c_img">
                    <Play/>
                </div>
                <h2>Peaceful&nbsp;piano</h2>
                <p >Lorem ipsum dolor sit amet consectetur  elit. </p>
            </div>
        );
    }
}

export default Card;