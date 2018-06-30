// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Questions.css';

// Data 
import poll from '../../data/poll.js';


class AskSeven extends Component {
	constructor () {
		super();

		this.state = {
			questionSeven: ''
		}

		this.handleTypeText = this.handleTypeText.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.questionSeven = this.state.questionSeven;

		console.log( poll );
	}

	handleTypeText ( e ) {
		var value = e.target.value;

		this.setState({
			questionSeven: value
		});
	}

	render(){
		return (
			<div className="main-question ask-seven">
				<img src="images/pantalla11.jpg" alt="background step two"/>
				<div className="content-with-background">
					<textarea onChange={ this.handleTypeText }></textarea>
				</div>

				<div className="box-btn-home">
					<Link className="btn-own" to="/">
						<img src="images/inicio.png" alt="boton de home"/>
					</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own" to="/ask-seven" onClick={ this.handleNextStep }>
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AskSeven;