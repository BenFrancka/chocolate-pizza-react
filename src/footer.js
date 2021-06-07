import React, { Component } from 'react'
import author from './assets/van-pic.png';
import smallLogo from './assets/small-logo.png';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <section className= "bottom-section">
        <section className="author">
            <div className="about">
                <img className="author-img" src= { author } alt= "author portrait"/>
                <div className="author-info">
                    <p className="author-text"><span>Vanessa Stevenson</span><br></br><br></br>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
                </div>
            </div>
            <button>
                Share Recipe
            </button>
        </section>
        <footer>
            <section className="hr-logo-hr">
                <div className="hr-left">
                </div>
                <div>
                    <img src= { smallLogo} alt= "logo"/>
                </div>
                <div className="hr-right">
                </div>
            </section>
            <section>
                <p>Delicious © 2013 · All Rights Reserved.</p>
                <p>Proudly published with Ghost.</p>
            </section>
        </footer>
    </section>
            </div>
        )
    }
}
