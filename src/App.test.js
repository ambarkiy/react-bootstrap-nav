import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render Home', () => {
	const { debug } = render(<App />);
	debug();
});
