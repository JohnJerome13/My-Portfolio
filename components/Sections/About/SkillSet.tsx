import * as React from 'react';
import {
	Box,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	List,
	ListItem,
	ListIcon,
	SimpleGrid,
	SlideFade,
	useColorModeValue,
} from '@chakra-ui/react';

import { IconType } from 'react-icons';

import { Skill, Skills } from './skillsData';

const { frontend, backend, database, cms, design } = Skills;

const SkillItem = ({ name, icon }: { name: string; icon: IconType }) => {
	return (
		<List spacing={3}>
			<ListItem display='flex' alignItems='center'>
				<ListIcon
					as={icon}
					fontSize='2em'
					color={useColorModeValue('brand.600', 'brand.300')}
				/>
				{name}
			</ListItem>
		</List>
	);
};

const SkillTab = ({ skillCategory }: { skillCategory: Skill[] }) => {
	return (
		<SlideFade in={true} offsetY='20px'>
			<SimpleGrid columns={3} spacing={4}>
				{skillCategory.map((data) => {
					return (
						<SkillItem key={data.name} name={data.name} icon={data.icon} />
					);
				})}
			</SimpleGrid>
		</SlideFade>
	);
};

const SkillSet = () => {
	return (
		<Box>
			<Tabs colorScheme='brand' isLazy minH={{ lg: 250 }}>
				<TabList>
					<Tab>Front-end</Tab>
					<Tab>Back-end</Tab>
					<Tab>Database</Tab>
					<Tab>CMS</Tab>
					<Tab>Design</Tab>
				</TabList>

				<TabPanels>
					<TabPanel>
						<SkillTab skillCategory={frontend} />
					</TabPanel>
					<TabPanel>
						<SkillTab skillCategory={backend} />
					</TabPanel>
					<TabPanel>
						<SkillTab skillCategory={database} />
					</TabPanel>
					<TabPanel>
						<SkillTab skillCategory={cms} />
					</TabPanel>
					<TabPanel>
						<SkillTab skillCategory={design} />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
};

export default SkillSet;
