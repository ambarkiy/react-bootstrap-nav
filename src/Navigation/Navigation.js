import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrandNav } from './BrandNav';

const Navigation = ({ alt, src }) => {
	return (
		<Navbar expand='sm'>
			<BrandNav alt={alt} src={src} />
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'/>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
