import React from 'react';

const Adresse = ({ raisonSociale, rueNumeroVoie, codePostal, ville }) => {
	return (
		<React.Fragment>
			<p>{raisonSociale}</p>
			<br />
			<p>{rueNumeroVoie}</p>
			<br />
			<p>
				{codePostal} {ville}
			</p>
		</React.Fragment>
	);
};

export default Adresse;
