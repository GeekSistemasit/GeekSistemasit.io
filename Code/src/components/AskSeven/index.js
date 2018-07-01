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
			descripcion: ''
		}

		this.handleTypeText = this.handleTypeText.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	handleNextStep() {
		poll.descripcion = this.state.descripcion; 

		fetch('https://ranking-app-nodejs.herokuapp.com/api/ranking/', {
		    method: 'post',
		    headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify(poll)
		}).then(function(response) {
		    return response.json();
		}).then(function(data) {
		   console.log("posteo correcto: "+JSON.stringify(poll));
		});
	}

	handleTypeText ( e ) {
		var value = e.target.value;

		this.setState({
			descripcion: value
		});
		
		document.querySelector( '.box-btn-next a' ).classList.remove( 'disabled' );
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
					<Link className="btn-own disabled" to="/end" onClick={ this.handleNextStep }>
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AskSeven;