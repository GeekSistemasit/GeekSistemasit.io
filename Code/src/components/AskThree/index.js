// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Questions.css';

// Data 
import poll from '../../data/poll.js';


class AskThree extends Component {
	constructor () {
		super();

		this.state = {
			ranking: ''
		}

		this.handleCheck = this.handleCheck.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.ranking = this.state.ranking;

		console.log( poll );
	}

	handleCheck ( e ) {
		var value = parseInt( e.target.getAttribute( 'value' ), 30);

		this.setState({
			ranking: value
		});
	}

	render(){
		return (
			<div className="main-question">
				<p className="step">Paso 4</p>
				<h3>¿Lorem ipsum dolor sit amet, consectetur adipisicing.?</h3>

				<input type="radio" name="ranking" value="1" onClick={ this.handleCheck } /> 1<br />
				<input type="radio" name="ranking" value="2" onClick={ this.handleCheck } /> 2<br />
				<input type="radio" name="ranking" value="3" onClick={ this.handleCheck } /> 3<br />
				<input type="radio" name="ranking" value="4" onClick={ this.handleCheck } /> 4<br />
				<input type="radio" name="ranking" value="5" onClick={ this.handleCheck } /> 5
				
				<div className="box-btn-home">
					<Link className="btn-own" to="/">Home</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own" to="/" onClick={ this.handleNextStep }>Next</Link>
				</div>
			</div>
		);
	}
}

export default AskThree;