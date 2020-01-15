import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './Home';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './Navigation';
import { brandLogoSrc as src } from './Navigation/BrandNav';
import LINKS, { connexionLink } from './constant';
import { NotFound } from './NotFound';
import { Vehicule } from './Vehicule';
import { Service } from './Service';
import { Contact } from './Contact';

function App() {
	const brandLogo = { src, alt: 'brand logo' };

	return (
		<React.Fragment>
			<BrowserRouter>
				<Navigation {...brandLogo} links={LINKS} connexionLink={connexionLink} />
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/vehicules' component={Vehicule} />
					<Route path='/services' component={Service} />
					<Route path='/contact' component={Contact} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
