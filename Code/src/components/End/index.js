// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Home.css';

class End extends Component {
	componentDidMount ( ) {
		setTimeout(() => {
         this.props.history.push("/")  
        }, 1500);
	}

	render(){
		return (
			<Link to="/">
				<div className="Home">
					<img src="images/pantalla12.jpg" alt="background step two"/>
				</div>
			</Link>
		);
	}
}

export default End;