import React, { Component } from 'react';
import {BiChevronRight} from 'react-icons/bi'
import {BiChevronLeft} from 'react-icons/bi'
class Right_navbar extends Component {
    render() {
        return (
            <>
            <div className="right_navbar_container">
                <div className="left_btns">
                    <div className="lbtn">
                        <BiChevronLeft/>
                    </div>
                    <div className="rbtn">
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
            </div>
            </>
        );
    }
}

export default Right_navbar;