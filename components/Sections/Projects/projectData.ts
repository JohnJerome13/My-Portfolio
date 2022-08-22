export type project = {
	id: number;
	title: string;
	description: string;
	githubLink: string;
	projectLink: string;
	imageUrl: string;
	isLeftImage?: boolean;
};

const projectData: project[] = [
	{
		id: 1,
		title: 'WeConnect',
		description:
			'A simple social media application with functionalities of users, posts, likes, comments, private messages and friends - developed using React, Express, Node and MongoDB.',
		githubLink: 'https://github.com/jerome813/WeConnect-Social-Media-App',
		projectLink: 'https://we-connect-social-media.herokuapp.com/',
		imageUrl: '/project-images/we-connect-sign-in-page.png',
		isLeftImage: true,
	},
	{
		id: 2,
		title: 'My Portfolio',
		description:
			'My personal website I created to showcase my skills, experiences and the projects I built in one place.',
		githubLink: '',
		projectLink: 'Quizzical',
		imageUrl: '/project-images/my-portfolio.png',
		isLeftImage: false,
	},
	{
		id: 3,
		title: 'Quizzical',
		description:
			'A trivia app that I built with API I used from Open Trivia Database. This app generates questions based on selected category and difficulty.',
		githubLink: 'https://github.com/jerome813/quizzical',
		projectLink: 'https://jerome813.github.io/quizzical/',
		imageUrl: '/project-images/quizzical.png',
		isLeftImage: true,
	},
];

export default projectData;
