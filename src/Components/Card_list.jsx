import React, { Component } from 'react';
import Card from '../common/Card';

class Card_list extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    section1:[
      {
        card:[
          {img: "red",h1:"blue",p:"lorem"},
          {img: "red2",h1:"blue1",p:"lorem"},
          {img: "red3",h1:"blue2",p:"lorem"},
          {img: "red3",h1:"blue3",p:"lorem"},
        ],
      }
    ],
    section2:[
      {
        card:[
          {img: "red",h1:"blue",p:"lorem"},
          {img: "red2",h1:"blue1",p:"lorem"},
          {img: "red3",h1:"blue2",p:"lorem"},
          {img: "red3",h1:"blue3",p:"lorem"}
        ],
      }
    ],

  }
  
    render() {
        return (
          <>
         
          <div className="list_container">
            {/* <h1 style={{color:'red'}}>{this.state[0]}</h1> */}
          <div className="list_head">
            <div className="heading">
                    <h1>{this.props.data.heading}</h1>
            </div>
            <div className="show_list">
                    <p>{this.props.data.show}</p>
            </div>
          </div>
          </div>
          <div className="card_top_container">
          <div className="card_container">
           {
            // console.log(this.state.section1[0].card)
            // this.state.card[0].img
            this.state.section1[0].card.map((data)=>{
              return(
                <>
                  <Card data={data}/>
                </>
              )
              
            })
          }
            </div>
          </div>
          
            
          </>
        );
    }
}

export default Card_list;