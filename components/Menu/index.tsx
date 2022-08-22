import React, { ReactNode } from 'react';

import {
	Box,
	Button,
	Flex,
	IconButton,
	useColorMode,
	useDisclosure,
	CloseButton,
	Icon,
	Link,
	Drawer,
	DrawerContent,
	BoxProps,
	FlexProps,
	useColorModeValue,
} from '@chakra-ui/react';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { FiUser, FiMenu } from 'react-icons/fi';
import {
	MdWorkOutline,
	MdOutlineComputer,
	MdOutlineEmail,
} from 'react-icons/md';
import { IconType } from 'react-icons';

import Logo from '../Logo';

interface LinkItemProps {
	name: string;
	href: string;
	icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
	{ name: 'About', href: '#about', icon: FiUser },
	{ name: 'Experience', href: '#experience', icon: MdWorkOutline },
	{ name: 'Projects', href: '#projects', icon: MdOutlineComputer },
	{ name: 'Contact', href: '#contact', icon: MdOutlineEmail },
];

const Menu = ({ children }: { children: ReactNode }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box minH='100vh'>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size='full'
			>
				<DrawerContent bg={useColorModeValue('#e9eaea', '#273033')}>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
			<Box ml={{ base: 0, md: 40 }} zIndex={100}>
				{children}
			</Box>
		</Box>
	);
};

interface SidebarProps extends BoxProps {
	onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box pos='fixed' h='full' {...rest}>
			<Flex
				h='20'
				alignItems='center'
				mx='8'
				my='18'
				justifyContent='space-between'
			>
				<Logo />
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem key={link.name} href={link.href} icon={link.icon}>
					{link.name}
				</NavItem>
			))}
			<Button
				mx='4'
				variant='ghost'
				aria-label='Toggle Color Mode'
				onClick={toggleColorMode}
				color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
				_focus={{ boxShadow: 'none' }}
				w='fit-content'
				_hover={{
					bg: colorMode === 'light' ? 'gray.200' : 'whiteAlpha.200',
				}}
			>
				{colorMode === 'light' ? <BsMoonStars /> : <BsSun />}
			</Button>
		</Box>
	);
};

interface NavItemProps extends FlexProps {
	icon: IconType;
	href: string;
	children: ReactNode;
}
const NavItem = ({ icon, href, children, ...rest }: NavItemProps) => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Link
			href={href}
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align='center'
				p='4'
				mx='4'
				borderRadius='lg'
				role='group'
				cursor='pointer'
				variant='ghost'
				color={colorMode === 'light' ? 'gray.600' : 'gray.300'}
				fontWeight={400}
				_hover={{
					bg: colorMode === 'light' ? 'gray.200' : 'whiteAlpha.200',
				}}
				{...rest}
			>
				{icon && <Icon mr='4' fontSize='16' as={icon} />}
				{children}
			</Flex>
		</Link>
	);
};

interface MobileProps extends FlexProps {
	onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 24 }}
			height='20'
			alignItems='center'
			justifyContent='flex-start'
			{...rest}
		>
			<IconButton
				variant='outline'
				onClick={onOpen}
				aria-label='open menu'
				icon={<FiMenu />}
			/>

			<Logo />
		</Flex>
	);
};
export default Menu;
