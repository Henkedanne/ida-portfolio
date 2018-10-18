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
            return false;
        }

        const currentData = data.filter((item) => item.title.rendered === 'Aktuellt')

        return (
            <section>
                <div className="current__container">
                    <h2 className="current__container-title">{currentData[0].title.rendered}</h2>
                    <span className="current__container-text" dangerouslySetInnerHTML={setHtml(currentData[0].content.rendered)}></span>
                </div>
            </section>
        )
    }
}


export default Current;