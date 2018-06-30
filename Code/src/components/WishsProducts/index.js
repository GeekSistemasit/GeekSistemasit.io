// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../Global/css/Wishes.css';


// Data 
import products from '../../data/products.js';
import poll from '../../data/poll.js';



class Wishes extends Component {
	constructor ( props ) {
		super( props );

		this.state = {
			count: 1,
			arrProducts: [],
			listProducts: []
		};

		this.handleLikeClick = this.handleLikeClick.bind( this );
		this.handleNextStep = this.handleNextStep.bind( this );
	}

	componentDidMount ( ) {
			fetch( 'https://ranking-app-nodejs.herokuapp.com/api/products/' ).
  				then(
  					response => response.json()
				).then((repos) => {
					this.setState ({
						arrProducts: repos.response
					});

					console.log( repos.response );
				});

	}

	handleNextStep( e ) {
		poll.products = this.state.listProducts;
		console.log( this.state.arrProducts );
	}

	handleLikeClick( e ) {
		var product = e.target.parentElement;
		var idProduct = product.getAttribute( 'data-id' );
		var name = product.getAttribute( 'data-name' );
		
		var isChecked = product.className;

		isChecked = isChecked.split( ' ' );
		isChecked = isChecked.indexOf( 'check' )
		
		if ( isChecked === 1) {
			
			product.classList.remove("check");

			this.setState ({
				count: this.state.count - 1
			});
			
			document.querySelector( '.box-btn-next a' ).classList.add( 'disabled' );

			this.removeProductToList( idProduct );
			this.renderElementToHtml( name, idProduct );
		} else {
			
			if ( this.state.count  <= 5 ) {	
				product.classList.add("check");

				
				this.setState({
					count: this.state.count + 1
				});

				// Ethis.addProductToList( idProduct, this.state.count );
				this.renderElementToHtml( name, idProduct );

				if ( this.state.count === 5 ) {
					document.querySelector( '.box-btn-next a' ).classList.remove( 'disabled' );
				}
			}
		
		}
	}

	addProductToList ( id, pos ) {
		var newProduct = {};
		newProduct = { id, pos };

		this.setState({
			listProducts: this.state.listProducts.concat( [ newProduct ] )
		})

	}

	removeProductToList ( id ) {
		var products = this.state.listProducts;


		for( let i in  products ) {
			if ( products[i].id === id ){
				products.splice( i, 1 );

				this.setState({
					listProducts: products
				})
			}
		}

		//this.renderProductList();
	}

	renderElementToHtml ( name, id ) {
		var parentList = document.querySelector( '.container-list ol' );
		var children = parentList.children;
		var isChildren; 
		var element = document.createElement('li');

		for ( let i in children ) {

			if (children[i].innerText !== 'undefined' && children[i].innerText === name ) {
				isChildren = children[i];
			}
		}

		if ( isChildren ) {
			isChildren.remove();
		} else {
			element.classList.add("product-wish");
			element.id = id ;
			element.innerHTML = name;
			parentList.append( element );

			var parentListNew = document.querySelectorAll( '.container-list ol li' );
			
			this.renderProductList( parentListNew );
		}
	}

	renderProductList ( arr ) {
		var arrayProducts = [];
		var objectProduct = {};

		for ( let i in arr ) {

			if ( typeof arr[i] === 'object' ) {
				objectProduct = { id: arr[i].id, pos: parseInt( i, 30 ) + 1 }
				arrayProducts.push( objectProduct );
			}
		}

		this.setState({
			listProducts: arrayProducts
		})

	}


	render(){

		return (
			<div className="Wishes" styles="background: url( 'images/pantalla3.jpg' );">
				<p className="step" onClick={ this.handleNextStep } >Paso 1</p>
				<h3>Selecciona tus productos deseados</h3>
				<div className="container-box">
					{
						products && products.map(
							( item, key ) => 
								<div data-id={ item.name }  data-name={ item.name } className="box" key={ key }>
									<img src={ item.img } alt={ item.name } title={ item.name } onClick={ this.handleLikeClick } />
									<div className="content-check">
										<img src="images/done.png" alt="done" />
									</div>
								</div>
						)
					}
				</div>
				<div className="container-list">
					<ol></ol>
				</div>
				<div className="box-btn-home">
					<Link className="btn-own" to="/">
						<img src="images/inicio.png" alt="boton de home"/>

					</Link>
				</div>
				<div className="box-btn-next">
					<Link className="btn-own" to="/intermediate-2" >
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />

					</Link>
				</div>
			</div>
		);
	}
}

export default Wishes;