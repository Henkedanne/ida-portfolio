import React, { Component } from 'react';
import { URL } from '../../domain/urls';
import { fetchData } from '../../utils/utils';
import { setHtml } from '../../utils/utils';


class Current extends Component {
    
    constructor(props) {
        super(props)

        this.state = {};
    }
    componentDidMount() {
        fetchData(URL.POST).then((data) => {
            
            this.setState({ data: data });
        });
    }
    
    render() {
        const { data } = this.state;
        
        if (!data) {
            return null;
        }
        const currentData = data.filter((item) => item.title.rendered === 'Aktuellt')
        
        return (
            <section id="current" className="current__container">
                <h2 className="section__container--title">{currentData[0].title.rendered}</h2>
                <span className="section__container--text" dangerouslySetInnerHTML={setHtml(currentData[0].content.rendered)}></span>
            </section>
        )
    }
}


export default Current;