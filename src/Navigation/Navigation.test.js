import React from 'react';
import Navigation from './Navigation';
import { render } from '@testing-library/react';
import matchMediaPolyfill from 'mq-polyfill';

beforeAll(() => {
	matchMediaPolyfill(window);
	window.resizeTo = function resizeTo(width, height) {
		Object.assign(this, {
			innerWidth: width,
			innerHeight: height,
			outerWidth: width,
			outerHeight: height
		}).dispatchEvent(new this.Event('resize'));
	};
	jest.mock('./BrandNav/BrandNav', () => () => <mock-brand />);
});

//is there any way to make test user centric and not test implementation with css class ?

test('navbar-expand-sm should be present in md lg device', () => {
	window.resizeTo(800, 900);
	const { container, debug } = render(<Navigation />);
	const navIntoMdLgDevice = container.querySelector('nav');
	debug(navIntoMdLgDevice);

	expect(navIntoMdLgDevice).toHaveClass('navbar-expand-sm');
});

test('navbar-expand-sm should not be present in sm device', () => {
	const { container, debug } = render(<Navigation />);
	window.resizeTo(150, 150);
	const navIntoSmDevice = container.querySelector('nav');
	debug(navIntoSmDevice);

	// this should to be true for sm device
	expect(navIntoSmDevice).not.toHaveClass('navbar-expand-sm');
});
