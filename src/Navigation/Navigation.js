import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrandNav } from './BrandNav';
import { Link } from 'react-router-dom';
import { LinkType } from '../constant';

const Navigation = ({ alt, src, navLinks, connexionLink }) => {
	const navElementLinks = navLinks
		? navLinks.filter((link) => link.type === LinkType.NAV).map((link) => (
				<Nav.Link key={link.id} as={Link} to={link.href}>
					{link.text}
				</Nav.Link>
			))
		: null;

	const connexionElementLink = connexionLink ? (
		<Nav>
			<Nav.Link key={connexionLink.id} as={Link} to={connexionLink.href}>
				{connexionLink.text}
			</Nav.Link>
		</Nav>
	) : null;

	return (
		<Navbar expand='sm'>
			<BrandNav alt={alt} src={src} />
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav' className='justify-content-between'>
				<Nav>{navElementLinks}</Nav>
				<Nav>{connexionElementLink}</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
