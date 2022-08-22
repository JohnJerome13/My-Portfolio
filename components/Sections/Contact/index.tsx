import {
	Icon,
	Box,
	Link,
	Text,
	Flex,
	useColorModeValue,
	Stack,
} from '@chakra-ui/react';
import { FaHeart, FaRegCopyright } from 'react-icons/fa';

import HeadingTitle from '../../Misc/Heading';
import Logo from '../../Logo';

export default function Contact() {
	return (
		<>
			<Stack spacing={{ base: '4', md: '8' }}>
				<HeadingTitle title='Get in Touch' />
				<Text variant='description'>
					I&apos;m currently open for opportunities. If you have questions or
					just want to say hi, feel free to email me at{' '}
					<Link
						href='mailto:johnjeromeperez@gmail.com'
						target='_blank'
						rel='noreferrer'
						fontWeight='bold'
					>
						johnjeromeperez@gmail.com
					</Link>
					.
				</Text>
			</Stack>
			<Box pt={20}>
				<Flex
					align={'center'}
					_before={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: useColorModeValue('gray.400', 'whiteAlpha.400'),
						flexGrow: 1,
						mr: 7,
					}}
					_after={{
						content: '""',
						borderBottom: '1px solid',
						borderColor: useColorModeValue('gray.400', 'whiteAlpha.400'),
						flexGrow: 1,
						ml: 7,
					}}
				>
					<Logo />
				</Flex>
				<Text pt={6} fontSize={'sm'} textAlign={'center'}>
					Made with <Icon as={FaHeart} /> by John Jerome Perez{' '}
					<Icon as={FaRegCopyright} /> 2022
				</Text>
			</Box>
		</>
	);
}
