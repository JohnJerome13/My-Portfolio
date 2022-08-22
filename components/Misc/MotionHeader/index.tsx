import { Box, BoxProps } from '@chakra-ui/react';
import * as React from 'react';

import { motion } from 'framer-motion';
const MotionBox = motion(Box);

const MotionSection = ({
	motionVariant,
	...props
}: { motionVariant: object } & BoxProps) => (
	<MotionBox
		initial='offscreen'
		whileInView='onscreen'
		viewport={{ once: true, amount: 0.8 }}
		variants={motionVariant}
		{...props}
	>
		{props.children}
	</MotionBox>
);

export default MotionSection;
