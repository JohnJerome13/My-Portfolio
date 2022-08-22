import {
	Button,
	Text,
	Heading,
	Stack,
	HStack,
	Link,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import styles from './styles.module.css';

import { SocialMedia, SocialMedias, MyInfo } from './sidebar';

const SocialMediaLinks = ({ socialMedia }: { socialMedia: SocialMedia }) => {
	return (
		<Link
			variant='description'
			color={useColorModeValue('gray.600', 'gray.300')}
			key={socialMedia.label}
			aria-label={socialMedia.label}
			rel='noreferrer'
			width={8}
			href={socialMedia.href}
			target='_blank'
			_focus={{ boxShadow: 'none' }}
		>
			<Icon w={6} h={6} as={socialMedia.icon} />
		</Link>
	);
};

const Sidebar = () => {
	return (
		<Stack
			spacing={{ base: '5', md: '7' }}
			align='left'
			className={`${styles.animatedBox} ${styles.in}`}
		>
			<Text fontSize='md'>Hey there, my name is</Text>
			<Stack spacing={{ base: '1', md: '2' }} align='left'>
				<Heading as='h3' fontWeight={800} size='4xl'>
					{MyInfo.firstName}
				</Heading>
				<Heading
					as='h3'
					size='4xl'
					fontWeight={800}
					color={useColorModeValue('brand.600', 'brand.300')}
				>
					{MyInfo.lastName}
				</Heading>
			</Stack>
			<Heading as='h4' size='md'>
				{MyInfo.jobTitle}
			</Heading>
			<Text fontSize='md'>{MyInfo.description}</Text>
			<Link
				color={useColorModeValue('gray.600', 'gray.300')}
				// aria-label={socialMedia.label}
				href={'/files/john-jerome-perez-resume.pdf'}
				target='_blank'
				_hover={{ textDecoration: 'none' }}
			>
				<Button
					variant='outline'
					size='lg'
					width='50%'
					color={useColorModeValue('gray.700', 'gray.300')}
					borderColor={useColorModeValue('gray.300', 'whiteAlpha.300')}
					_hover={{
						bg: useColorModeValue('gray.200', 'whiteAlpha.200'),
					}}
					leftIcon={<FiExternalLink color={'gray.300'} />}
				>
					My Resume
				</Button>
			</Link>

			<HStack>
				{SocialMedias.map((data) => (
					<SocialMediaLinks key={data.label} socialMedia={data} />
				))}
			</HStack>
		</Stack>
	);
};

export default Sidebar;
