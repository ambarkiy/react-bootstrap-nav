const LinkType = {
	NAV: 'nav',
	CONNEXION: 'connexion'
};

const [
	vehiculeLink,
	servicesLink,
	contactLink,
	connexionLink
] = [
	{ id: '1', type: LinkType.NAV, text: 'VEHICULES', href: '/vehicules' },
	{ id: '2', type: LinkType.NAV, text: 'NOS SERVICES', href: '/services' },
	{ id: '3', type: LinkType.NAV, text: 'NOUS CONTACTER', href: '/contact' },
	{ id: '4', type: LinkType.CONNEXION, text: 'CONNEXION', href: '/connexion' }
];

const NAV_LINKS = [
	vehiculeLink,
	servicesLink,
	contactLink,
	connexionLink
];

export default NAV_LINKS;
export { LinkType, connexionLink };
