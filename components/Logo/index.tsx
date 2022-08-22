import { HTMLChakraProps, Image, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

const Logo = (props: HTMLChakraProps<'img'>) => (
	<Image
		boxSize='100px'
		src={useColorModeValue(
			'../logo/jjp-logo-dark.png',
			'../logo/jjp-logo-light.png'
		)}
		alt='jjp-logo'
	/>
);

export default Logo;
