import React, { Component } from 'react'
import logo from './assets/logo.png';


export default class LeftHeader extends Component {
    render() {
        return (
            <div className= "left">
                <section className= "logo-top">
                      <img src= { logo } alt= "logo png"/>
                  </section>
                  <section className= "logo-text">
                      <p><span>Delicious</span><br></br>
                      THE BEST FOOD BLOG ON THE WEB.
                      </p>
                  </section>
            </div>
        )
    }
}
