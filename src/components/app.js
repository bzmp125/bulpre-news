import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from './home';
import Category from './news/category'
//const Category = () => import(/*webpackChunkNames: category*/'./news/categories')
const Profile = () => import(/*webpackChunkNames: profile*/'./profile');

export default class App extends Component {
	state = {
		category:''
	}
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;

		if(e.router.base){
			this.setState({category:e.router.base.baseURI.split("/").reverse()[0]})
		}
	};

	render(props,state) {
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/"/>
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}

/*					<Category path="/category/:category" category={state.category} />
*/