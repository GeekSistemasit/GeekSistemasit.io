// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Questions.css';

// Data 
import poll from '../../data/poll.js';


class AskTwo extends Component {
	constructor () {
		super();

		this.state = {
			target: ''
		}

		this.handleCheck = this.handleCheck.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.target = this.state.target;

		console.log( poll );
	}

	handleCheck ( e ) {
		var value = e.target.getAttribute( 'value' );

		this.setState({
			target: value
		});
	}

	render(){
		return (
			<div className="main-question">
				<p className="step">Paso 3</p>
				<h3>¿Lorem ipsum dolor sit amet, consectetur adipisicing.?</h3>

				<input type="radio" name="targets" value="target1" onClick={ this.handleCheck } /> This is target 1<br />
				<input type="radio" name="targets" value="target2" onClick={ this.handleCheck } /> This is target 2<br />
				<input type="radio" name="targets" value="target3" onClick={ this.handleCheck } /> This is target 3
				
				<div className="box-btn-home">
					<Link className="btn-own" to="/">Home</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own" to="/ask-three" onClick={ this.handleNextStep }>Next</Link>
				</div>
			</div>
		);
	}
}

export default AskTwo;