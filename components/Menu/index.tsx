import {
	Box,
	Button,
	ButtonGroup,
	Container,
	Flex,
	HStack,
	VStack,
	IconButton,
	useBreakpointValue,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import * as React from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from '../Logo';

const Menu = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const isDesktop = useBreakpointValue({ base: false, lg: true });
	return (
		<Box as='section' pl={{ base: '12', md: '13', lg: '20' }}>
			<Box
				as='nav'
				bg='bg-surface'
				boxShadow={useColorModeValue('sm', 'sm-dark')}
			>
				<Container py={{ base: '4', lg: '5' }}>
					<VStack spacing={4} align='flex-start'>
						<Logo />
						{isDesktop ? (
							<>
								{['About', 'Experience', 'Education', 'Work', 'Contact'].map(
									(item) => (
										<Button key={item} variant='ghost'>
											{item}
										</Button>
									)
								)}
								<Button onClick={toggleColorMode} variant='ghost'>
									{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
								</Button>
							</>
						) : (
							<IconButton
								variant='ghost'
								icon={<FiMenu fontSize='1.25rem' />}
								aria-label='Open Menu'
							/>
						)}
					</VStack>
				</Container>
			</Box>
		</Box>
	);
};

export default Menu;
