import React, { Component } from 'react';
import {FaBars} from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import './header.css';
import Right_navbar from './Right_navbar';
class Mainheader extends Component {
    constructor(){
        super()
        this.barsbtn = React.createRef("none");
    }   
   handlebars = ()=>{
        this.barsbtn.current.style.display ="flex";
   }
    render() {
        return (
          <> 
           <header>
            <div className="head">
            <div className="logo" ref={this.barsbtn}>
                    Spotify
                </div>
                <div className="right_nav">
                    <div className="search">
                    <BiSearch/>
                    </div>
                    <button>
                        OPEN&nbsp;APP
                    </button>
                    <div  className="bars" onClick={this.handlebars}>
                    <FaBars/>
                    </div>
                </div>
            </div>
            </header>
            <Right_navbar barsbtn = {this.barsbtn}/>
          </>
        );
    }
}

export default Mainheader;