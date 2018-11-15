import React, { Component } from 'react';
import { fetchDataOnTag } from '../../utils/utils';
import { setHtml } from '../../utils/utils';

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {};
    }

    componentDidMount() {
        // fetchData(URL.ABOUTPAGE).then((data) => {
        //     this.setState({data: data})
        // })
        fetchDataOnTag('about').then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const { data } = this.state;
        
        if ( !data ) {
            return null;
        }

        return (
            <section className="about__container">
                <h2 className="section__container--title">{data[1].title.rendered}</h2>
                <span className="section__container--text" dangerouslySetInnerHTML={setHtml(data[0].content.rendered)}></span>
            </section>
        )
    }
}

export default About;
