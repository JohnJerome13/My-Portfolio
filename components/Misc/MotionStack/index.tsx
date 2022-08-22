import { Stack, StackProps } from '@chakra-ui/react';
import * as React from 'react';

import { motion } from 'framer-motion';
const MotionStack = motion(Stack);

const MotionSection = ({
	motionVariant,
	...props
}: { motionVariant: object } & StackProps) => (
	<MotionStack
		initial='offscreen'
		whileInView='onscreen'
		viewport={{ once: true, amount: 0.8 }}
		variants={motionVariant}
		{...props}
	>
		{props.children}
	</MotionStack>
);

export default MotionSection;
