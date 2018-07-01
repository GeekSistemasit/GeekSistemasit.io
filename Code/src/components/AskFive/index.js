// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Questions.css';

// Data 
import poll from '../../data/poll.js';


class AskFive extends Component {
	constructor () {
		super();

		this.state = {
			questionFive: ''
		}

		this.handleCheck = this.handleCheck.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.pregunta2 = this.state.questionFive;

		console.log( poll );
	}

	handleCheck ( e ) {
		var value = e.target.getAttribute( 'value' );

		this.setState({
			questionFive: value
		});
	}

	render(){
		return (
			<div className="main-question ask-five">
				<img src="images/pantalla9.jpg" alt="background step five"/>
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
					<Link className="btn-own" to="/ask-six" onClick={ this.handleNextStep }>
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AskFive;