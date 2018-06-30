// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Intermediate.css';

class Intermediate extends Component {
	render(){
		return (
			<div className="Intermediate">
				<img src="images/pantalla2.jpg" alt="fondo de pantalla 2"/>
				<div className="box-btn-home">
					<Link className="btn-own" to="/">
						<img src="images/inicio.png" alt="boton de home"/>
					</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own" to="/wishes-products" >
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default Intermediate;