import React, { Component } from 'react'
import { fetchData } from '../../utils/utils';
import { URL } from '../../domain/urls';


class VideoReel extends Component {


    constructor(props) {
        super(props) 

        this.state = {}

    }

    componentDidMount() {
        fetchData(URL.MEDIA).then((data) => {
            if (data.length < 0) {
                return null
            }
            this.setState({ data: data })
        });
    }

    render() {
        const { data } = this.state;
        
        if (!data || data.length < 0) {
            return null;
        }
        
        const videoItem = data.filter((item) => item.media_type === 'file');
        const videoSrc = videoItem.length > 0 && videoItem[0].source_url;
        return (
            <section className="videoreel">
                <div className="videoreel__container">
                    <video className="videoreel__video" src={videoSrc} alt=""/>
                </div>
            </section>
        )
    }
}

export default VideoReel;
