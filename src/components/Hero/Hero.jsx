import React, { Component } from 'react'
import '../../css/hero.scss';

export default class Hero extends Component {
    render() {
        return (
            <div>
                <img className="hero__image" src="../../../assets/images/ida_hero.jpg" alt="ida"/>
            </div>
        )
    }
}
