import React, { Component, Fragment } from 'react';
import Navigation from './components/Navigation/Navigation'
import { Hero } from './components/Hero/Hero'
import Current from './components/Current/Current';
import ImageSection from './components/ImageSection/ImageSection';
import About from './components/About/About';
import VideoReel from './components/VideoReel/VideoReel';


class App extends Component {

  	render() {
    	return (
			<Fragment>
				<Navigation />
				<div className="main__container">
					<Hero />
					<Current />
					<ImageSection />
					<About />
					<VideoReel />
				</div>
			</Fragment>
    	);
  	}
}

export default App;
