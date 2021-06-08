import React, { Component } from 'react'

import facebook from './assets/fb-icon.png';
import twitter from './assets/twit-icon.png';
import gp from './assets/gp-icon.png';
import gram from './assets/insta-icon.png';
import flicker from './assets/flic-icon.png';
import pinterest from './assets/pint-icon.png';

import rss from "./assets/rss-icon.png";
import mail from './assets/mail-icon.png';

export default class Buttons extends Component {
    render() {
        return (
            <>
            <div className= "images-1">
                <img src= { facebook } alt= "facebook icon"/>
                <img src= { twitter } alt= "twitter icon"/>
                <img src= { gp } alt= "gp icon"/>
                <img src= { gram } alt= "instagram icon"/>
                <img src= { flicker } alt= "flicker icon"/>
                <img src= { pinterest } alt= "pinterest icon"/>
            </div>

            <div className = "images-2">
                <img src= { rss } alt= "rss icon"/>
                <img src= { mail } alt= "mail icon"/>
            </div>

            </>
        )
    }
}
