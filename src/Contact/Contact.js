import React from 'react';
import { Adresse } from './Adresse';

const Contact = ({ raisonSociale, rueNumeroVoie, codePostal, ville }) => {
	return (
		<React.Fragment>
			<h1>CONTACT</h1>
			<Adresse
				raisonSociale={raisonSociale}
				rueNumeroVoie={rueNumeroVoie}
				codePostal={codePostal}
				ville={ville}
			/>
		</React.Fragment>
	);
};

export default Contact;
