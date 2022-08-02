import { chakra, HTMLChakraProps, Image } from '@chakra-ui/react';
import * as React from 'react';

const Logo = (props: HTMLChakraProps<'img'>) => (
	<Image src='../../logoipsum-logo-8.svg' alt='logo' />
);

export default Logo;
