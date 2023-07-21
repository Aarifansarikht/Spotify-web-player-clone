import React, { Component } from 'react';
import {BiChevronRight} from 'react-icons/bi'
import {BiChevronLeft} from 'react-icons/bi'
import {RxCross1} from 'react-icons/rx'
class Right_navbar extends Component {
    constructor(props){
        super(props)
        console.log(props);
    }
   
    render() {
        return (
            <>
            <div className="right_navbar_container" style={{display: this.props.ham?"flex":"none"}}>
                <div className="left_btns">
                    <div className="lbtn">
                        <BiChevronLeft/>
                    </div>
                    <div className="rbtn" >
                    <BiChevronRight/>
                    </div>
                </div>
                <div className="right_btns">
                    <div className="signup">
                        <button>Sign&nbsp;up</button>
                    </div>
                    <div className="login">
                            <button>Log&nbsp;in</button>
                    </div>
                </div>
                <div className="crossicon" style={{color:"white",fontSize:"1.5rem",fontWeight:"700",position:"absolute",top:"15px",right:"15px"}}>
                    <RxCross1 onClick={this.props.func}/>
                </div>
            </div>
            </>
        );
    }
}

export default Right_navbar;