import React, { Component } from 'react';
import './App.css'
import Top_left_container from './Components/Top_left_container';
import Bottom_left_container from './Components/Bottom_left_container';
import Right_container from './Components/Right_container';
import Spotify_preview from './Components/Spotify_preview';


class App extends Component {
    render() {
        return (
            <>
                <div className="main_container">
                        <div className="left_container">
                            <Top_left_container />
                            <Bottom_left_container />
                        </div>
                        <div className="right_container">
                            <Right_container />
                        </div>
                <Spotify_preview />
                </div>
            </>
        );
    }
}

export default App;