// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Questions.css';

// Data 
import poll from '../../data/poll.js';


class AskFour extends Component {
	constructor () {
		super();

		this.state = {
			questionFour: ''
		}

		this.handleCheck = this.handleCheck.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.questionFour = this.state.questionFour;

		console.log( poll );
	}

	handleCheck ( e ) {
		var value = e.target.getAttribute( 'value' );

		this.setState({
			questionFour: value
		});
	}

	render(){
		return (
			<div className="main-question ask-four">
				<img src="images/pantalla8.jpg" alt="background step two"/>
				<div className="content-with-background">
					<label>
						<input type="radio" name="targets" value="Si" onClick={ this.handleCheck } /> 
				    	<img src="images/dot-naranja.png" alt="dot naranja check"/>
						<br />
						<span>Si</span>
					</label>
					<label>
						<input type="radio" name="targets" value="No" onClick={ this.handleCheck } /> 
				    	<img src="images/dot-naranja.png" alt="dot naranja check"/>
						<br />
						<span>No</span>
					</label>
				</div>

				<div className="box-btn-home">
					<Link className="btn-own" to="/">
						<img src="images/inicio.png" alt="boton de home"/>
					</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own" to="/ask-five" onClick={ this.handleNextStep }>
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AskFour;