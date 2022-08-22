import * as React from 'react';
import { Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';

const Introduction = () => {
	return (
		<>
			<Stack spacing={{ base: '1', md: '2' }}>
				<Heading
					as='h3'
					fontSize={['2xl', '3xl']}
					position={'relative'}
					color={useColorModeValue('brand.600', 'brand.300')}
				>
					I&apos;m a
				</Heading>

				<Heading as='h1' size='3xl'>
					Front-End / Java
					<span style={{ color: useColorModeValue('#A27B5C', '#b4957c') }}>
						Script
					</span>
					<br />
					Developer
				</Heading>
			</Stack>
			<Text fontSize='md'>
				I am passionately dedicated to building user-friendly web-based products
				with great quality.
			</Text>
			<Text fontSize='md'>
				My main focus is to expand my expertise on front-end development and
				technologies. I am always looking for opportunities to learn more and do
				interesting things that matter.
			</Text>
			<Text fontSize='md'>
				Here are the technologies that I use and constantly learning.
			</Text>
		</>
	);
};

export default Introduction;
