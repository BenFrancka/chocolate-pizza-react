import React, { Component } from 'react'
import Ingredients from './ingredients.js';
export default class List extends Component {
   
    
    render() {
        const ingredients = [
            {name: 'milk', amount: '1 1/2 cups'},
            {name: 'mascarpone', amount: '1/2 cup'},
            {name: 'pink salt', amount: '1/2 tsp'},
            {name: 'Black Mission Figs', amount: '1 lb'},
            {name: 'brown sugar', amount: '1/2 cup'},
            {name: 'water', amount: '2-4 tbsp'},
            {name: 'heavy cream', amount: '1 1/2 cups'},
            {name: 'granulated sugar', amount: '4/3'},
            {name: 'egg yolks', amount: '2'},
            {name: 'lemon juice', amount: '1 lemon'},
            {name: 'butter', amount: '2 tbsp'},
            {name: 'chopped honey-roasted pecans', amount: '1cup'}

            
        ]
        return (
            <div className= "index-card">
            <ul className= "instructions">
                {
                    ingredients.map( ingredient => {
                        return <Ingredients name= {ingredient.name}amount= {ingredient.amount} />
                    })
                }
            </ul>
            </div>
        )
    }
}
