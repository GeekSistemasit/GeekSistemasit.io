// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Intermediate.css';

class IntermediateTwo extends Component {

	componentDidMount ( ) {
		setTimeout(() => {
         	this.props.history.push("/ask-one");
        }, 2000);
        
	}

	render(){
		return (
			<Link to="/ask-one">
				<div className="Intermediate">
					<img src="images/pantalla4.jpg" alt="backgroun step two"/>
					<div className="box-btn-home">
						<Link className="btn-own" to="/">
							<img src="images/inicio.png" alt="boton de home"/>
						</Link>
					</div>
					<div className="box-btn-next hide">
						<Link className="btn-own" to="/ask-one" >
							<img src="images/siguiente.png"  alt="boton del siguiente paso" />
						</Link>
					</div>
				</div>
			</Link>
		);
	}
}

export default IntermediateTwo;