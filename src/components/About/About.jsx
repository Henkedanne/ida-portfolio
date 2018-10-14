import React, { Component } from 'react';
import { fetchData } from '../../utils/utils';
import { URL } from '../../domain/urls';
import { setHtml } from '../../utils/utils';


class About extends Component {
    constructor(props) {
        super(props)

        this.state = {};
    }

    componentDidMount() {
        fetchData(URL.ABOUTPAGE).then((data) => {
            this.setState({data: data})
        })
    }

    render() {
        const { data } = this.state;

        if ( !data ) {
            return null;
        }

        return (
           <section className="current">
            <div className="current__container">
                <h2 className="current__container-title">{data[0].title.rendered}</h2>
                <span className="current__container-text" dangerouslySetInnerHTML={setHtml(data[0].content.rendered)}></span>
            </div>
        </section>
        )
    }
}

export default About;
