import React, { Component } from 'react';
import {FaBars} from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import './header.css';
import Right_navbar from './Right_navbar';
class Mainheader extends Component {
    constructor(){
        super()
        this.state ={
            ham:true
        }
    }
    
   
    func = ()=>{
        this.setState({ham: !this.state.ham})
       
    }
    render() {
        return (
          <> 
           <header>
            <div className="head">
            <div className="logo">
                    Spotify
                </div>
                <div className="right_nav">
                    <div className="search">
                    <BiSearch/>
                    </div>
                    <button>
                        OPEN&nbsp;APP
                    </button>
                    <div className="bars" onClick={this.func}>
                    <FaBars/>
                    </div>
                </div>
            </div>
            </header>
            <Right_navbar ham = {this.state.ham} func = {this.func}/>
          </>
        );
    }
}

export default Mainheader;