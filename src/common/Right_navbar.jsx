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
            <div className="right_navbar_container" ref={this.props.barsbtn}>
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
                    <RxCross1  onClick={()=>{
                        if (this.props.barsbtn.current.style.display="flex") {
                            
                            this.props.barsbtn.current.style.display="none";
                        }
                        else{
                            this.props.barsbtn.current.style.display="flex";
                        }
                    }}/>
                </div>
            </div>
            </>
        );
    }
}

export default Right_navbar;