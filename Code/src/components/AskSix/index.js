// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Questions.css';

// Data 
import poll from '../../data/poll.js';


class AskSix extends Component {
	constructor () {
		super();

		this.state = {
			questionSix: ''
		}

		this.handleCheck = this.handleCheck.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.questionSix = this.state.questionSix;

		console.log( poll );
	}

	handleCheck ( e ) {
		var value = e.target.getAttribute( 'value' );

		this.setState({
			questionSix: value
		});
	}

	render(){
		return (
			<div className="main-question ask-six">
				<img src="images/pantalla10.jpg" alt="background step six"/>
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
					<Link className="btn-own" to="/ask-seven" >
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AskSix;