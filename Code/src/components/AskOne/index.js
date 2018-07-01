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
		
		document.querySelector( '.box-btn-next a' ).classList.remove( 'disabled' );
	}

	render(){
		return (
			<div className="main-question ask-one">
				<img src="images/pantalla5.jpg" alt="background step two"/>
				<div className="content-with-background">
					<label>
						<input type="radio" name="target" value="niños" onClick={ this.handleCheck } /> 
				    	<img src="images/dot-naranja.png" alt="dot naranja check"/>
						<br />
						<span>Niños</span>
					</label>
					<label>
						<input type="radio" name="target" value="publico en general" onClick={ this.handleCheck } /> 
				    	<img src="images/dot-naranja.png" alt="dot naranja check"/>
						<br />
						<span>Público <br /> en general</span>
					</label>
					<label>
						<input type="radio" name="target" value="Adolescentes" onClick={ this.handleCheck } /> 
				    	<img src="images/dot-naranja.png" alt="dot naranja check"/>
						<br />
						<span>Adolescentes</span>
					</label>
				</div>

				<div className="box-btn-home">
					<Link className="btn-own" to="/">
						<img src="images/inicio.png" alt="boton de home"/>
					</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own disabled" to="/ask-two" onClick={ this.handleNextStep } >
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AskOne;