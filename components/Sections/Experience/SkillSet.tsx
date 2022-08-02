import * as React from 'react';
import {
	useBreakpointValue,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	List,
	ListItem,
	ListIcon,
	SimpleGrid,
} from '@chakra-ui/react';
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
	SiAntdesign,
	SiStyledcomponents,
	SiNextdotjs,
	SiNodedotjs,
	SiPhp,
	SiGraphql,
	SiSocketdotio,
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
	SiAdobexd,
} from 'react-icons/si';
import { FaOpencart } from 'react-icons/fa';

const About = () => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });
	return (
		<>
			<Tabs>
				<TabList>
					<Tab>Frontend</Tab>
					<Tab>Backend</Tab>
					<Tab>Database</Tab>
					<Tab>CMS</Tab>
					<Tab>Design</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<SimpleGrid columns={3} spacing={4}>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiJavascript} fontSize='2em' />
									Javascript (ES6+)
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiTypescript} fontSize='2em' />
									Typescript
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiReact} fontSize='2em' />
									React
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiRedux} fontSize='2em' />
									Redux
								</ListItem>
							</List>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiNextdotjs} fontSize='2em' />
									NextJS
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiMaterialui} fontSize='2em' />
									MUI
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiChakraui} fontSize='2em' />
									Chakra UI
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiAntdesign} fontSize='2em' />
									Ant Design
								</ListItem>
							</List>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiStyledcomponents} fontSize='2em' />
									Styled Components
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiHtml5} fontSize='2em' />
									HTML 5
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiCss3} fontSize='2em' />
									CSS 3
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiSass} fontSize='2em' />
									Sass
								</ListItem>
							</List>
						</SimpleGrid>
					</TabPanel>
					<TabPanel>
						<SimpleGrid columns={2} spacing={4}>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiNodedotjs} fontSize='2em' />
									NodeJs
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiExpress} fontSize='2em' />
									Express
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiSocketdotio} fontSize='2em' />
									Socket.IO
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiFirebase} fontSize='2em' />
									Firebase
								</ListItem>
							</List>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiGraphql} fontSize='2em' />
									Graphql
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiPhp} fontSize='2em' />
									PHP
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiCodeigniter} fontSize='2em' />
									CodeIgniter
								</ListItem>
							</List>
						</SimpleGrid>
					</TabPanel>
					<TabPanel>
						<List spacing={3}>
							<ListItem fontSize='small' display='flex' alignItems='center'>
								<ListIcon as={SiMongodb} fontSize='2em' />
								MongoDB
							</ListItem>
							<ListItem fontSize='small' display='flex' alignItems='center'>
								<ListIcon as={SiMysql} fontSize='2em' />
								MySQL
							</ListItem>
						</List>
					</TabPanel>
					<TabPanel>
						<SimpleGrid columns={2} spacing={4}>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiWordpress} fontSize='2em' />
									WordPress
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiJoomla} fontSize='2em' />
									Joomla
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiShopify} fontSize='2em' />
									Shopify
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiWoocommerce} fontSize='2em' />
									WooCommerce
								</ListItem>
							</List>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={FaOpencart} fontSize='2em' />
									OpenCart
								</ListItem>
							</List>
						</SimpleGrid>
					</TabPanel>
					<TabPanel>
						<SimpleGrid columns={2} spacing={4}>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiFigma} fontSize='2em' />
									Figma
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiCanva} fontSize='2em' />
									Canva
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiAdobephotoshop} fontSize='2em' />
									Adobe Photoshop
								</ListItem>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiAdobeillustrator} fontSize='2em' />
									Adobe Illustrator
								</ListItem>
							</List>
							<List spacing={3}>
								<ListItem fontSize='small' display='flex' alignItems='center'>
									<ListIcon as={SiAdobexd} fontSize='2em' />
									Adobe Xd
								</ListItem>
							</List>
						</SimpleGrid>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</>
	);
};

export default About;
