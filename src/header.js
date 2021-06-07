import React, { Component } from 'react'
import Buttons from './header-buttons.js';
import LeftHeader from './header-left.js';

export default class Header extends Component {
    render() {
        return (
            <div className= "top-section">
                 <header>
                     <LeftHeader />
              <div className = "right">
                  <Buttons />
              </div>
          </header>

          <div className= "hr-bottom">
              
          </div>
            </div>
        )
    }
}
