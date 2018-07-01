// Dependecies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Assets
import '../Global/css/Wishes.css';
import backgroundImage from '../../images/pantalla3.jpg';


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

				console.log( 'api', repos.response );
			});

	}

	handleNextStep( e ) {
		poll.products = this.state.listProducts;
	}

	handleLikeClick( e ) {
		var product = e.target.parentElement;
		var idProduct = product.getAttribute( 'data-id' );
		var name = product.getAttribute( 'data-name' );
		var img = product.getAttribute( 'data-img' );
		
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
			this.renderElementToHtml( name, img, idProduct );
		} else {
			
			if ( this.state.count  <= 5 ) {	
				product.classList.add("check");

				
				this.setState({
					count: this.state.count + 1
				});

				this.renderElementToHtml( name, img, idProduct );

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
	}

	renderElementToHtml ( name, img, id ) {
		var parentList = document.querySelector( '.container-list ol' );
		var children = parentList.children;
		var isChildren; 
		var element = document.createElement( 'li' );
		var templateList = "";

		for ( let i in children ) {
			if (children[i].innerText !== 'undefined' && children[i].id === id ) {
				isChildren = children[i];
			}
		}

		if ( isChildren ) {
			isChildren.remove();
		} else {
			templateList += "<div class='container-img'>";
			templateList += 	"<img src='"+ img +"' />";
			templateList += "</div>";
			templateList += "<div class='container-text'>";
			templateList += 	"<p>"+ name +"</p>";
			templateList += "</div>";

			element.classList.add("product-wish");
			element.id = name;
			element.innerHTML = templateList;
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

	    const settings = {
			verticalSwiping: true,
			arrow: true,
			speed: 500,
			infinite: false,
			slidesToShow: 5,
			swipeToSlide: true,
			vertical: true
	    };
		const  divStyle = {
			background: 'url(' + backgroundImage + ')'
		};

		return (
			<div className="Wishes" style={ divStyle } >
				<div className="container-box">

					<Slider {...settings}>
						{
							this.state.arrProducts.map(
								( item, key ) => 
									<div data-id={ item._id }  data-name={ item.nombre }  data-img={ item.imagen } className="box" key={ key }>
										<img src={ item.imagen } alt={ item.nombre } title={ item.nombre } onClick={ this.handleLikeClick } />
									</div>
							)
						}
					</Slider>
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
					<Link className="btn-own disabled" to="/intermediate-2" onClick={ this.handleNextStep }>
						<img src="images/siguiente.png"  alt="boton del siguiente paso" />
					</Link>
				</div>
			</div>
		);
	}
}

export default Wishes;