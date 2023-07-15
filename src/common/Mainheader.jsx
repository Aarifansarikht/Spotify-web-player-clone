import React, { Component } from 'react';
import {FaBars} from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import './header.css';
class Mainheader extends Component {
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
                        Open&nbsp;App
                    </button>
                    <div className="bars">

                    <FaBars/>
                    </div>
                </div>

            </div>
             
            </header>
          </>
        );
    }
}

export default Mainheader;