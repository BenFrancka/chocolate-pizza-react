import React, { Component } from 'react'


export default class Ingredients extends Component {
    render() {
        console.log(this.props.name);
        return (
            <div>
                <li>{this.props.amount}{this.props.name}</li>
            </div>
        )
    }
}
