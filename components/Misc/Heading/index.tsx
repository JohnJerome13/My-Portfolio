import * as React from 'react';
import { Text, useColorModeValue } from '@chakra-ui/react';

const HeadingTitle = ({ title }: { title: string }) => {
	return (
		<Text
			as='h2'
			fontSize={['4xl', '5xl']}
			position='relative'
			fontWeight={600}
			_after={{
				content: '""',
				width: '18%',
				height: '5%',
				position: 'absolute',
				bottom: -1,
				left: 0,
				bg: useColorModeValue('brand.600', 'brand.300'),
				zIndex: -1,
			}}
			mb={[5, 0]}
		>
			{title}
		</Text>
	);
};

export default HeadingTitle;
