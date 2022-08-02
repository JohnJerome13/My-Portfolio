import * as React from 'react';
import { Container, Stack, useBreakpointValue } from '@chakra-ui/react';

import Introduction from './Introduction';
import SkillSet from './SkillSet';

const About = () => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });
	return (
		<Container maxW='container.md' py={{ base: '16', md: '150', lg: '150' }}>
			<Stack spacing={{ base: '4', md: '8' }}>
				<Introduction />
				<SkillSet />
			</Stack>
		</Container>
	);
};

export default About;
