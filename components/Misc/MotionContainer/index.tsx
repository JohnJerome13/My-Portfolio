import { Container, ContainerProps } from '@chakra-ui/react';

import { motion } from 'framer-motion';

const MotionContainer = motion(Container);

const MotionSection = ({
	motionVariant,
	...props
}: { motionVariant: object } & ContainerProps) => (
	<MotionContainer
		initial='offscreen'
		whileInView='onscreen'
		viewport={{ once: true, amount: 0.8 }}
		variants={motionVariant}
		maxW='4xl'
		py={{ base: '10', md: '30', lg: '50' }}
		{...props}
	>
		{props.children}
	</MotionContainer>
);

export default MotionSection;
