import * as React from 'react';
import { Stack, Heading, Text, useBreakpointValue } from '@chakra-ui/react';

const Introduction = () => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });
	return (
		<>
			<Stack spacing={{ base: '4', md: '2' }}>
				<Heading as='h3' size='xl'>
					I&apos;m a
				</Heading>
				<Heading as='h1' size='3xl'>
					Frontend / JavaScript Developer
				</Heading>
			</Stack>
			<Text fontSize='md'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				efficitur dapibus odio, a pulvinar orci sodales eu. In elit velit,
				iaculis non aliquet sed, ultrices eget orci. Nulla arcu nisl, vulputate
				sed nulla ut, aliquam egestas eros. Sed nisi sem, ultricies ut venenatis
				a, lacinia in ligula. Curabitur nec libero felis.
			</Text>
			<Text fontSize='md'>
				Here are the technologies that I use and constantly learning.
			</Text>
		</>
	);
};

export default Introduction;
