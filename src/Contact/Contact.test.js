import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

beforeEach(() => {
	jest.mock('./Adresse/Adresse', () => 'something');
});

test('it should contain h1 header title', () => {
	const { getByText, debug } = render(<Contact />);
	debug();
	expect(getByText(/CONTACT/)).toBeInTheDocument();
});
