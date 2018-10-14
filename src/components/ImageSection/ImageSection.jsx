import React, { Component } from 'react';
import { fetchData } from '../../utils/utils';
import { URL } from '../../domain/urls';
import Slider from 'react-slick';
import '../../css/image-section.css';

class ImageSection extends Component {
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
        
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

        if (!data) {
            return false;
        }
        
        const imgSrc = data[1].source_url;
        const imgArr = data.filter((item) => item.media_type === 'image').map((items => items.source_url));
        console.log(imgArr);

        // Use react-slick!!

        return (
            <section className="image-section">
                <div className="image-section__container">
                    <Slider {...settings}>
                        {imgArr.map((img) => {
                            return (
                                <div>
                                    <img className="image-section__image" src={img} alt=""/>
                                </div>
                            )
                        })}
                    </Slider>
                    {/* <img className="image-section__image" src={imgSrc} alt=""/> */}
                </div>
            </section>
        )
    }
}

export default ImageSection;