import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render First Test p element', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/First Test/i);
	expect(linkElement).toBeInTheDocument();
});
