// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Home.css';

class Home extends Component {
	render(){
		return (
			<div className="Home">
				<p>Logo</p>
				<h1>Name company</h1>
				<p>Intrucciones</p>
				<ul>
					<li>1. Seleccionar productos deseados</li>
					<li>2. Seleccionar productos no deseados</li>
					<li>3. Dejar comentario</li>
					<li>4. Muchas gracias</li>
				</ul>
				<Link className="btn-own" to="/wishes-products">Empezar</Link>
			</div>
		);
	}
}

export default Home;