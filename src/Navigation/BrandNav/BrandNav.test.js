import React from 'react';
import { render } from '@testing-library/react';
import BrandNav from './BrandNav';

test('testing brand navigation', () => {
	const altProp = 'message to show if image unavailable',
		srcProp = 'relativeFilePath',
		host = window.location;

	const { getByAltText } = render(<BrandNav alt={altProp} src={srcProp} />);

	const brandLogo = getByAltText(altProp);
	expect(brandLogo.src).toEqual(`${host}${srcProp}`);
});
