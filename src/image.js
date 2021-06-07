import React, { Component } from 'react'
import print from './assets/print-icon.png';
import pizza from './assets/choco-pizza.png';

export default class Image extends Component {
    render() {
        return (
            <div>
                 <section className="title-section">
            <div>
                <h1>
                Chocolate Pizza
                </h1>
                <h4>
                    POSTED ON 15 DEC 2013 / DESSERTS
                </h4>
            </div>
            <div className="print">
                <img src= { print } alt= "print icon" />
                print
            </div>
        </section>

        <section className="main-image">
            <img src= { pizza } alt= "chocolate pizza" />
        </section>
            </div>
        )
    }
}
