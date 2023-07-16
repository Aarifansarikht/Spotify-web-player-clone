import React, { Component } from 'react';
import Play from '../Components/Play';

class Card extends Component {
constructor(props){
super(props);
console.log(props.data);
}
    render() {
        
        return (
            <div className="card_main">
                <div className="card_top_container">
                <div className="c_img">
                    <Play/>
                </div>
                <h2>{this.props.data.h1}</h2>
                <p >Lorem ipsum dolor sit amet consectetur  elit. </p>
                </div>
            </div>
        );
    }
}

export default Card;