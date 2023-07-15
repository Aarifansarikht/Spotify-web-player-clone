import React, { Component } from 'react';
import Card from '../common/Card';

class Card_list extends Component {

    render() {
        return (
          <>
          <div className="list_container">
          <div className="list_head">
            <div className="heading">
                    <h1>Focus</h1>
            </div>
            <div className="show_list">
                    <p>Show&nbsp;all</p>
            </div>
          </div>
          </div>
            <div className="card_container">
                <Card/>
                <Card />
                <Card/>
                <Card/>
            </div>
          </>
        );
    }
}

export default Card_list;