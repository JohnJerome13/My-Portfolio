import * as React from 'react';
import {
	Stack,
	Text,
	List,
	ListIcon,
	ListItem,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	SlideFade,
	useColorModeValue,
} from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import jobDetails from './experienceData';
import HeadingTitle from '../../Misc/Heading';

const Experience = () => {
	type jobsType = {
		job: {
			title: string;
			dateDuration: string;
			tasks: any;
		};
	};

	const ListTasks = ({ task }: { task: string }) => {
		return (
			<ListItem display='flex' alignItems='center' justifyContent='flex-start'>
				<ListIcon as={FiArrowRight} display='block' />
				<Text as='span' display='block' variant='description'>
					{task}
				</Text>
			</ListItem>
		);
	};

	const JobDetails = ({ job: { title, dateDuration, tasks } }: jobsType) => {
		return (
			<Stack key={title} spacing={0}>
				<Text
					as='span'
					fontSize='lg'
					fontWeight='bold'
					variant='description'
					color={useColorModeValue('gray.700', 'gray.300')}
				>
					{title}
				</Text>
				<Text fontSize='smaller'>{dateDuration}</Text>
				<List spacing={3} pt={5}>
					{tasks.map((task: string, value: React.Key | null | undefined) => {
						return <ListTasks key={value} task={task} />;
					})}
				</List>
			</Stack>
		);
	};

	return (
		<>
			<HeadingTitle title="Where I've Worked" />
			<Tabs
				colorScheme='brand'
				isLazy
				minH={{ lg: 460 }}
				py={{ base: 5, md: 10 }}
			>
				<TabList>
					<Tab textAlign='left'>Online Thinkers Technology</Tab>
					<Tab textAlign='left'>Land Bank of the Philippines</Tab>
				</TabList>

				<TabPanels>
					{jobDetails.map((jobDetails) => {
						return (
							<TabPanel key={jobDetails.company}>
								<SlideFade in={true} offsetY='20px'>
									<Stack spacing={7}>
										{jobDetails.jobs.map((job, value) => {
											return <JobDetails key={value} job={job} />;
										})}
									</Stack>
								</SlideFade>
							</TabPanel>
						);
					})}
				</TabPanels>
			</Tabs>
		</>
	);
};

export default Experience;
