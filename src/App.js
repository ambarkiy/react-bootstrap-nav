import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';
import { brandLogoSrc as src } from './Navigation/BrandNav';

function App() {
	const brandLogo = { src, alt: 'brand logo' };

	return (
		<React.Fragment>
			<Navigation {...brandLogo} />
			<BrowserRouter>
				<Switch>
					<Route path='/' component={Home} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
