import { IconType } from 'react-icons';

import {
	SiHtml5,
	SiCss3,
	SiSass,
	SiRedux,
	SiJavascript,
	SiTypescript,
	SiExpress,
	SiReact,
	SiMaterialui,
	SiChakraui,
	SiStyledcomponents,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiGraphql,
	SiFirebase,
	SiCodeigniter,
	SiMongodb,
	SiMysql,
	SiWordpress,
	SiJoomla,
	SiShopify,
	SiWoocommerce,
	SiFigma,
	SiCanva,
	SiAdobephotoshop,
	SiAdobeillustrator,
} from 'react-icons/si';

import { FaOpencart } from 'react-icons/fa';

export type SkillCategory =
	| 'backend'
	| 'frontend'
	| 'database'
	| 'cms'
	| 'design';

export type Skill = {
	name: string;
	icon: IconType;
};

export const Skills: {
	[key in SkillCategory]: Skill[];
} = {
	frontend: [
		{
			name: 'JavaScript (ES6+)',
			icon: SiJavascript,
		},
		{
			name: 'TypeScript',
			icon: SiTypescript,
		},
		{
			name: 'ReactJs',
			icon: SiReact,
		},
		{
			name: 'Redux',
			icon: SiRedux,
		},
		{
			name: 'NextJs',
			icon: SiNextdotjs,
		},
		{
			name: 'MUI',
			icon: SiMaterialui,
		},
		{
			name: 'Chakra UI',
			icon: SiChakraui,
		},
		{
			name: 'Styled Components',
			icon: SiStyledcomponents,
		},
		{
			name: 'HTML 5',
			icon: SiHtml5,
		},
		{
			name: 'CSS 3',
			icon: SiCss3,
		},
		{
			name: 'Sass',
			icon: SiSass,
		},
	],
	backend: [
		{
			name: 'NodeJs',
			icon: SiNodedotjs,
		},
		{
			name: 'Express',
			icon: SiExpress,
		},
		{
			name: 'Firebase',
			icon: SiFirebase,
		},
		{
			name: 'Graphql',
			icon: SiGraphql,
		},
		{
			name: 'PHP',
			icon: SiPhp,
		},
		{
			name: 'CodeIgniter',
			icon: SiCodeigniter,
		},
	],
	database: [
		{
			name: 'MongoDb',
			icon: SiMongodb,
		},
		{
			name: 'MySQL',
			icon: SiMysql,
		},
	],
	cms: [
		{
			name: 'WordPress',
			icon: SiWordpress,
		},
		{
			name: 'Joomla',
			icon: SiJoomla,
		},
		{
			name: 'Shopify',
			icon: SiShopify,
		},
		{
			name: 'WooCommerce',
			icon: SiWoocommerce,
		},
		{
			name: 'OpenCart',
			icon: FaOpencart,
		},
	],
	design: [
		{
			name: 'Figma',
			icon: SiFigma,
		},
		{
			name: 'Canva',
			icon: SiCanva,
		},
		{
			name: 'Adobe Photoshop',
			icon: SiAdobephotoshop,
		},
		{
			name: 'Adobe Illustrator',
			icon: SiAdobeillustrator,
		},
	],
};

export default Skills;
