import type { NextPage } from 'next';
import * as React from 'react';
import {
	Box,
	Container,
	useBreakpointValue,
	Flex,
	ContainerProps,
} from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import OpenGraphHead from '../components/Misc/OpenGraphHead';
import ParticlesBackground from '../components/Misc/ParticlesBackground';
import Menu from '../components/Menu';
import About from '../components/Sections/About';
import Experience from '../components/Sections/Experience';
import Projects from '../components/Sections/Projects';
import Sidebar from '../components/Sidebar';
import Contact from '../components/Sections/Contact';
import { fadeInUp, fadeInRight, fadeInRightSlow } from '../config/animations';
import ReactGA from 'react-ga';
ReactGA.initialize('G-YZZW882NFK');
const MotionSection = dynamic(
	() => import('../components/Misc/MotionContainer'),
	{
		ssr: false,
	}
);

const Section = (props: ContainerProps) => (
	<Container maxW='4xl' py={{ base: '10', md: '30', lg: '50' }} {...props}>
		{props.children}
	</Container>
);

const Home: NextPage = () => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });

	return (
		<>
			<OpenGraphHead />
			<ParticlesBackground />
			<Menu>
				<Flex>
					<Box flexGrow='2'>
						{!isDesktop && (
							<MotionSection
								minH={{ base: '100vh', lg: '100vh' }}
								position='sticky'
								display='flex'
								alignItems='center'
								motionVariant={fadeInUp}
							>
								<Sidebar />
							</MotionSection>
						)}

						<MotionSection
							minH={{ lg: '100vh' }}
							position='sticky'
							display='flex'
							alignItems='center'
							id='about'
							motionVariant={isDesktop ? fadeInRightSlow : fadeInUp}
						>
							<About />
						</MotionSection>
						<MotionSection
							id='experience'
							motionVariant={isDesktop ? fadeInRight : fadeInUp}
						>
							<Experience />
						</MotionSection>
						<Section id='projects'>
							<Projects />
						</Section>
						<MotionSection
							motionVariant={isDesktop ? fadeInRight : fadeInUp}
							id='contact'
						>
							<Contact />
						</MotionSection>
					</Box>
					{isDesktop && (
						<Box flexGrow='1'>
							<Container
								as='aside'
								top='0'
								display='flex'
								alignItems='center'
								minH={{ lg: '100vh' }}
								position='sticky'
								pr={{ base: '0', md: '10' }}
							>
								<Sidebar />
							</Container>
						</Box>
					)}
				</Flex>
			</Menu>
		</>
	);
};

export default Home;
