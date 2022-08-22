import dynamic from 'next/dynamic';
import { useBreakpointValue } from '@chakra-ui/react';
import ProjectContainer from './ProjectContainer';
import projectData from './projectData';
import { fadeInUp, fadeInRight } from '../../../config/animations';
import HeadingTitle from '../../Misc/Heading';

const MotionHeader = dynamic(() => import('../../Misc/MotionHeader'), {
	ssr: false,
});

const Projects = () => {
	const isDesktop = useBreakpointValue({ base: false, lg: true });

	return (
		<>
			<MotionHeader motionVariant={isDesktop ? fadeInRight : fadeInUp}>
				<HeadingTitle title='My Recent Works' />
			</MotionHeader>

			{projectData.map((data) => {
				return (
					<ProjectContainer
						key={data.id}
						id={data.id}
						title={data.title}
						description={data.description}
						githubLink={data.githubLink}
						projectLink={data.projectLink}
						imageUrl={data.imageUrl}
						isLeftImage={data.isLeftImage}
					/>
				);
			})}
		</>
	);
};

export default Projects;
