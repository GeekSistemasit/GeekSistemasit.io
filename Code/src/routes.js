// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import Wishes from './components/WishsProducts';
import AskOne from './components/AskOne';
import AskTwo from './components/AskTwo';
import AskThree from './components/AskThree';

const AppRoutes = () =>
	<App>
		<Switch>
			<Route exact path="/" component={ Home } />
			<Route exact path="/wishes-products" component={ Wishes } />
			<Route exact path="/ask-one" component={ AskOne } />
			<Route exact path="/ask-two" component={ AskTwo } />
			<Route exact path="/ask-three" component={ AskThree } />
		</Switch>
	</App>;

export default AppRoutes;
