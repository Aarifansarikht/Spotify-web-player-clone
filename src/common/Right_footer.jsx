import React, { Component } from 'react';
import {BiLogoInstagram,BiLogoFacebook,BiLogoTwitter} from 'react-icons/bi'
class right_footer extends Component {
    render() {
        return (
          <>
          
          <div className="footer_container">
            <div className="footer_content">
                <div className="l1 fl">
                    <ul>
                        <li><a href="">Company</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Jobs</a></li>
                        <li><a href="">For&nbsp;the&nbsp;Record</a></li>
                    </ul>
                </div>
                <div className="l2 fl">
                    <ul>
                        <li><a href="">Communities</a></li>
                        <li><a href="">For&nbsp;Artists</a></li>
                        <li><a href="">Developers</a></li>
                        <li><a href="">Advertising</a></li>
                        <li><a href="">Investors</a></li>
                        <li><a href="">Vendors</a></li>
                        <li><a href="">Spotify&nbsp;for&nbsp;Work</a></li>
                    </ul>
                </div>
                <div className="l3 fl">
                    <ul>
                        <li><a href="">Useful&nbsp;links</a></li>
                        <li><a href="">Support</a></li>
                        <li><a href="">Free&nbsp;Mobile&nbsp;App</a></li>
                    </ul>
                </div>
                <div className="l4 fl">
                    <div className="insta si">
                    <BiLogoInstagram/>
                    </div>
                    <div className="twitter si">
                        <BiLogoTwitter/>
                    </div>
                    <div className="facebook si">
                    <BiLogoFacebook/>
                    </div>
                </div>
            </div>
          </div>
          <div className="f_year">
                &copy;2023 Spotify AB
            </div>
          </>
        );
    }
}

export default right_footer;