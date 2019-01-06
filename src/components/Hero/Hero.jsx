import React, { Component, Fragment } from 'react'

export class Hero extends Component {
    render() {
        return (
            <Fragment>
                <div className="hero__image-container">
                    <picture >
                        <source className="hero__image" media="(max-width: 599px)" srcset="../../../assets/images/ida-small.png" />
                        <img className="hero__image" src="../../../assets/images/ida-large.png" alt="ida" />
                    </picture>
                </div>
                
                <h1 className="hero__title">IDA LÖFHOLM</h1>
            </Fragment>
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
