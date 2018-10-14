import React, { Component } from 'react'
import { fetchData } from '../../utils/utils';
import { URL } from '../../domain/urls';
import '../../css/videoreel.css';


class VideoReel extends Component {


    constructor(props) {
        super(props) 

        this.state = {}

    }

    componentDidMount() {
        fetchData(URL.MEDIA).then((data) => {
            this.setState({ data: data })
        });
    }

    render() {
        const { data } = this.state;
        
        if (!data) {
            return null;
        }
        
        console.log(data);
        const videoItem = data.filter((item) => item.media_type === 'file');
        const videoSrc = videoItem[0].source_url;
                console.log(videoItem);
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
