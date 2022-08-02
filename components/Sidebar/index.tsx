import {
	Button,
	Text,
	useBreakpointValue,
	Container,
	Heading,
	Stack,
} from '@chakra-ui/react';

import * as React from 'react';

const Sidebar = () => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });
	return (
		<Container
			position='sticky'
			top='0'
			h={{ lg: '100vh' }}
			py={{ base: '16', md: '200' }}
			pr={{ base: '12', md: '20' }}
		>
			<Stack spacing={{ base: '8', md: '7' }} align='left'>
				<Text fontSize='md'>Hi! I am</Text>
				<Stack spacing={{ base: '8', md: '2' }} align='left'>
					<Heading as='h3' size='3xl'>
						John Jerome
					</Heading>
					<Heading as='h3' size='4xl' color='#A27B5C'>
						Perez
					</Heading>
				</Stack>
				<Heading as='h4' size='md'>
					Frontend Web Developer
				</Heading>
				<Text fontSize='md'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
					efficitur dapibus odio, a pulvinar orci sodales eu. In elit velit,
					iaculis non aliquet sed, ultrices eget orci.
				</Text>
				<Button variant='outline' size='lg'>
					Get in Touch!
				</Button>
			</Stack>
		</Container>
	);
};

export default Sidebar;
