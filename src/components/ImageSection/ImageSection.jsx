import React, { Component } from 'react';
import { fetchData } from '../../utils/utils';
import { URL } from '../../domain/urls';
import Slider from 'react-slick';

class ImageSection extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            data: null,
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    }

    componentDidMount() {
        fetchData(URL.MEDIA).then((data) => {
            this.setState({ data: data })
        });
    }

    render() {
        const { data, settings } = this.state;
        
        if (!data) {
            return false;
        }
        
        const imgArr = data.filter((item) => item.media_type === 'image').map((items => items.source_url));

        return (
            <section className="main__container main__container--grey">
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
                </div>
            </section>
        )
    }
}

export default ImageSection;