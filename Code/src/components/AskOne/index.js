// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Questions.css';

// Data 
import poll from '../../data/poll.js';


class AskOne extends Component {
	constructor () {
		super();

		this.state = {
			category: ''
		}

		this.handleCheck = this.handleCheck.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.category = this.state.category;

		console.log( poll );
	}

	handleCheck ( e ) {
		var value = e.target.getAttribute( 'value' );

		this.setState({
			category: value
		});
	}

	render(){
		return (
			<div className="main-question">
				<p className="step">Paso 2</p>
				<h3>¿Lorem ipsum dolor sit amet, consectetur adipisicing.?</h3>

				<input type="radio" name="categories" value="category1" onClick={ this.handleCheck } /> This is category 1<br />
				<input type="radio" name="categories" value="category2" onClick={ this.handleCheck } /> This is category 2<br />
				<input type="radio" name="categories" value="category3" onClick={ this.handleCheck } /> This is category 3
				
				<div className="box-btn-home">
					<Link className="btn-own" to="/">Home</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own" to="/ask-two" onClick={ this.handleNextStep }>Next</Link>
				</div>
			</div>
		);
	}
}

export default AskOne;