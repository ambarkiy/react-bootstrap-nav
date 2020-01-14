import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('Home header', () => {
	const { getByText } = render(<Home />);
	const headerElement = getByText(/Home/i);
	expect(headerElement).toBeInTheDocument();
});
