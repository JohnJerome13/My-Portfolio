import * as React from 'react';
import { Stack } from '@chakra-ui/react';

import Introduction from './Introduction';
import SkillSet from './SkillSet';

const About = () => {
	return (
		<Stack spacing={{ base: '4', md: '8' }}>
			<Introduction />
			<SkillSet />
		</Stack>
	);
};

export default About;
