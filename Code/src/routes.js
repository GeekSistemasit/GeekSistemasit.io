// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import Intermediate from './components/Intermediate';
import Wishes from './components/WishsProducts';
import IntermediateTwo from './components/IntermediateTwo';
import AskOne from './components/AskOne';
import AskTwo from './components/AskTwo';
import AskThree from './components/AskThree';
import AskFour from './components/AskFour';
import AskFive from './components/AskFive';
import AskSix from './components/AskSix';
import AskSeven from './components/AskSeven';

const AppRoutes = () =>
	<App>
		<Switch>
			<Route exact path="/" component={ Home } />
			<Route exact path="/intermediate" component={ Intermediate } />
			<Route exact path="/wishes-products" component={ Wishes } />
			<Route exact path="/intermediate-2" component={ IntermediateTwo } />
			<Route exact path="/ask-one" component={ AskOne } />
			<Route exact path="/ask-two" component={ AskTwo } />
			<Route exact path="/ask-three" component={ AskThree } />
			<Route exact path="/ask-four" component={ AskFour } />
			<Route exact path="/ask-five" component={ AskFive } />
			<Route exact path="/ask-six" component={ AskSix } />
			<Route exact path="/ask-seven" component={ AskSeven } />
		</Switch>
	</App>;

export default AppRoutes;
