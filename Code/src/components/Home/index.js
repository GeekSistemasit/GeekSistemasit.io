// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Home.css';

class Home extends Component {
	render(){
		return (
			<Link to="/intermediate">
				<div className="Home">
					<video autoPlay loop>
						<source src="images/pantalla1.mov" type="video/mov" />
						<source src="images/pantalla1.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</Link>
		);
	}
}

export default Home;