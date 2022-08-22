import * as React from 'react';
import {
	Stack,
	Flex,
	Box,
	Text,
	Button,
	Image,
	Icon,
	IconProps,
	Link,
	useColorModeValue,
	useBreakpointValue,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { project } from './projectData';
import { fadeInUp, fadeInRight } from '../../../config/animations';

const MotionStack = dynamic(() => import('../../Misc/MotionStack'), {
	ssr: false,
});

const ProjectContainer = ({
	id,
	title,
	description,
	githubLink,
	projectLink,
	imageUrl,
	isLeftImage,
}: project) => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });

	const CoverImage = () => (
		<Flex
			flex={1}
			justify={'center'}
			align={'center'}
			position={'relative'}
			w={'full'}
		>
			<Blob
				w={'110%'}
				h={'110%'}
				position={'absolute'}
				top={'-3%'}
				left={-5}
				zIndex={-100}
				color={useColorModeValue('brand.600', 'brand.300')}
			/>
			<Box
				position={'relative'}
				height={'300px'}
				rounded={'xl'}
				boxShadow={'2xl'}
				width={'full'}
				overflow={'hidden'}
			>
				<Image
					alt={title}
					fit={'cover'}
					align={'center'}
					w={'100%'}
					h={'100%'}
					src={imageUrl}
				/>
			</Box>
		</Flex>
	);
	return (
		<MotionStack
			align={'center'}
			spacing={{ base: 8, md: 10 }}
			py={{ base: 35, md: 16 }}
			direction={{ base: 'column', md: 'row' }}
			motionVariant={isDesktop ? fadeInRight : fadeInUp}
		>
			{(isLeftImage || !isDesktop) && <CoverImage />}
			<Stack flex={1} spacing={{ base: 5, md: 10 }}>
				<Box>
					<Text
						as={'span'}
						position={'relative'}
						fontSize={['lg', '2xl']}
						color={useColorModeValue('gray.700', 'gray.300')}
						_after={{
							content: "''",
							width: 'full',
							height: '15%',
							position: 'absolute',
							bottom: 1,
							left: 0,
							bg: useColorModeValue('brand.600', 'brand.300'),
							zIndex: -1,
						}}
					>
						#{id}
					</Text>

					<Text
						fontSize={{ base: '3xl', lg: '4xl' }}
						fontWeight={600}
						color={useColorModeValue('gray.700', 'gray.300')}
						as={'span'}
					>
						&nbsp;{title}
					</Text>
				</Box>
				<Text>{description}</Text>

				<Stack
					spacing={{ base: 4, sm: 6 }}
					direction={{ base: 'column', sm: 'row' }}
				>
					<Link
						href={githubLink}
						isExternal
						_hover={{
							textDecoration: 'none',
						}}
					>
						<Button
							variant='solid'
							size={'lg'}
							fontWeight={'normal'}
							px={6}
							colorScheme={'#DCD7C9'}
							bg={useColorModeValue('brand.600', 'brand.300')}
							_hover={{
								bg: useColorModeValue('brand.800', 'brand.600'),
							}}
							leftIcon={<FiGithub color={'gray.300'} />}
						>
							View Github
						</Button>
					</Link>
					<Link
						href={projectLink}
						isExternal
						_hover={{
							textDecoration: 'none',
						}}
					>
						<Button
							size={'lg'}
							fontWeight={'normal'}
							px={6}
							leftIcon={<FiExternalLink color={'gray.300'} />}
						>
							View Project
						</Button>
					</Link>
				</Stack>
			</Stack>
			{!isLeftImage && isDesktop && <CoverImage />}
		</MotionStack>
	);
};

export const Blob = (props: IconProps) => {
	return (
		<Icon
			width={'109%'}
			viewBox='0 0 578 440'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z'
				fill='currentColor'
			/>
		</Icon>
	);
};
export default ProjectContainer;
