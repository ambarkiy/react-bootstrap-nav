import React from 'react';
import { Navbar } from 'react-bootstrap';

const BrandNav = ({ alt, src }) => {
	return (
		<Navbar.Brand>
			<img alt={alt} src={src} width='150' height='50' />
		</Navbar.Brand>
	);
};

export default BrandNav;
