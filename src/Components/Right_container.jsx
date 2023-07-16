import React, { Component } from 'react';
import Right_navbar from '../common/Right_navbar';
import Card_list from './Card_list';
import Right_footer from '../common/Right_footer';
import Mainheader from '../common/Mainheader';

class Right_container extends Component {

    constructor(){
        super()
    }

    state={
        Card_list:[
            {heading:"Focus",show:"Show all"},
            {heading:"Spotify Playlists",show:"Show all"},
            {heading:"Sound of Spotify",show:"Show all"}


        ]
    }
    render() {
        return (
            <div>
                <Right_navbar/>
                <Mainheader/>
                <div className="main_content">
                    {
                        // console.log(this.state.Card_list)
                        this.state.Card_list.map((data)=>{
                            return(
                                <>
                                <Card_list data={data}/>
                                </>
                                ) 
                                
                        })
                    }
                <Right_footer/>
                </div>
            </div>
        );
    }
}

export default Right_container;