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
			<div className="main-question ask-three">
				<img src="images/pantalla7.jpg" alt="background step two"/>
				<div className="content-with-background">
					<label>
						<input type="radio" name="ranking" value="1" onClick={ this.handleCheck } />
				    	<img src="images/aro.png" alt="dot naranja check"/>
					</label>
					<label>
						<input type="radio" name="ranking" value="2" onClick={ this.handleCheck } />
				    	<img src="images/aro.png" alt="dot naranja check"/>
					</label>
					<label>
						<input type="radio" name="ranking" value="3" onClick={ this.handleCheck } />
				    	<img src="images/aro.png" alt="dot naranja check"/>
					</label>
					<label>
						<input type="radio" name="ranking" value="4" onClick={ this.handleCheck } />
				    	<img src="images/aro.png" alt="dot naranja check"/>
					</label>
					<label>
						<input type="radio" name="ranking" value="5" onClick={ this.handleCheck } />
				    	<img src="images/aro.png" alt="dot naranja check"/>
					</label>
				</div>

				<div className="box-btn-home">
					<Link className="btn-own" to="/">
						<img src="images/inicio.png" alt="boton de home"/>
					</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own" to="/ask-four" >
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default AskThree;