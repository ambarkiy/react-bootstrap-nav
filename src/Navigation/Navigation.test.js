import React from 'react';
import { render } from '@testing-library/react';
import Navigation from './Navigation';

test('render Navigation p element', () => {
	const { getByText } = render(<Navigation />);
	const pElement = getByText(/Navigation/i);
	expect(pElement).toBeInTheDocument();
});
