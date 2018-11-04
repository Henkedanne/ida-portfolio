import React, { Component, Fragment } from 'react';
import Header from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import Current from './components/Current/Current';
import ImageSection from './components/ImageSection/ImageSection';
import About from './components/About/About';
import VideoReel from './components/VideoReel/VideoReel';


class App extends Component {

  	render() {
    	return (
			<Fragment>
				<Header />
				<Hero />
				<Current />
				<ImageSection />
				<About />
				<VideoReel />
			</Fragment>
    	);
  	}
}

export default App;
