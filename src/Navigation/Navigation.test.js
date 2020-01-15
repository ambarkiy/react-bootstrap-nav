import React from 'react';
import Navigation from './Navigation';
import { render } from '@testing-library/react';
import { LinkType } from '../constant';
import { MemoryRouter } from 'react-router-dom';

beforeEach(() => {
	jest.mock('./BrandNav/BrandNav', () => () => <mock-brand />);
});

//is there any way to make test user centric and not test implementation with css class ?

test('navbar-expand-sm should be present in md lg device', () => {
	// window.resizeTo(800, 900);
	const { container } = render(
		<MemoryRouter>
			<Navigation />
		</MemoryRouter>
	);
	const navIntoMdLgDevice = container.querySelector('nav');
	expect(navIntoMdLgDevice).toHaveClass('navbar-expand-sm');
});

test('navbar-expand-sm should not be present in sm device', () => {
	const { container, debug } = render(
		<MemoryRouter>
			<Navigation />
		</MemoryRouter>
	);
	debug();
	// window.resizeTo(150, 150);
	const navIntoSmDevice = container.querySelector('nav');
	expect(navIntoSmDevice).not.toHaveClass('navbar-expand-sm');
});

test('links navs should to be present', () => {
	const [
		firstNavLink,
		secondNavLink,
		thirdNavLink
	] = [
		{ id: '1', type: LinkType.NAV, text: 'FIRST', href: '/first' },
		{ id: '2', type: LinkType.NAV, text: 'SECOND', href: '/second' },
		{ id: '3', type: LinkType.NAV, text: 'THIRD', href: '/third' }
	];
	const navLinks = [
		firstNavLink,
		secondNavLink,
		thirdNavLink
	];

	const { getByText } = render(
		<MemoryRouter>
			<Navigation navLinks={navLinks} />
		</MemoryRouter>
	);

	expect(getByText(firstNavLink.text)).toBeInTheDocument();
	expect(getByText(secondNavLink.text)).toBeInTheDocument();
	expect(getByText(thirdNavLink.text)).toBeInTheDocument();
});
