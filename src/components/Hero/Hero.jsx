import React, { Component } from 'react'

export class Hero extends Component {
    render() {
        return (
            <div className="hero__image-container">
                <img className="hero__image" src="../../../assets/images/ida_hero.jpg" alt="ida"/>
            </div>
        )
    }
}
export class First extends Component {
    render() {
        return (
            <div className="hero__container">
                <h1>Ida Löfholm</h1>
            </div>
        )
    }
}
