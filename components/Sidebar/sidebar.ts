import { IconType } from 'react-icons';

import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

type MyInfo = {
	firstName: string;
	lastName: string;
	jobTitle: string;
	description: string;
	email: string;
	resumeLink: string;
};

export type SocialMedia = {
	label: string;
	href: string;
	icon: IconType;
};

export const SocialMedias: SocialMedia[] = [
// 	{
// 		label: 'LinkedIn',
// 		href: 'https://www.linkedin.com/in/john-jerome-perez/',
// 		icon: FaLinkedin,
// 	},
	{
		label: 'Github',
		href: 'https://github.com/JohnJerome13',
		icon: FaGithub,
	},
	{
		label: 'Email',
		href: 'mailto:johnjeromeperez@gmail.com',
		icon: FiMail,
	},
];

export const MyInfo: MyInfo = {
	firstName: 'John Jerome',
	lastName: 'Perez',
	jobTitle: 'Front-End Developer',
	description:
		'I enjoy building interactive web apps using ReactJs. Also likes to work with back-end technologies as well.',
	email: 'johnjeromeperez@gmail.com',
	resumeLink: 'johnjeromeperez@gmail.com',
};
