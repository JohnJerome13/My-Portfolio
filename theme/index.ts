// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
	initialColorMode: 'dark',
	disableTransitionOnChange: false,
	useSystemColorMode: false,
};

const darkModeBg = '#273033';
const lightModeBg = '#e9eaea';
const primary = '#3F4E4F';
const secondaryDark = '#A27B5C';
const secondaryLight = '#ab886c';
const textColor = '#DCD7C9';

const colors = {
	brand: {
		300: '#b4957c',
		600: '#A27B5C',
		800: '#816249',
		secondary: '#3F4E4F',
	},
};

const styles = {
	global: (props: StyleFunctionProps) => ({
		html: {
			scrollBehavior: 'smooth',
		},
		body: {
			bg: mode(lightModeBg, darkModeBg)(props),
			transitionProperty: 'all',
			transitionDuration: 'slow',
		},
		h4: {
			color: mode('gray.700', 'gray.300')(props),
		},
		h3: {
			color: mode('gray.700', 'gray.300')(props),
		},
		h2: {
			color: mode('gray.700', 'gray.300')(props),
		},
		h1: {
			color: mode('gray.700', 'gray.300')(props),
		},
		p: {
			color: mode('gray.700', 'gray.300')(props),
		},
		li: {
			color: mode('gray.700', 'gray.300')(props),
		},
		button: {
			color: mode('gray.700', 'gray.300')(props),
		},
		svg: {
			color: mode('brand.dark', 'brand.light')(props),
		},
	}),
};

const overrides = {
	config,
	styles,
	colors,
	// Other foundational style overrides go here
};
// 3. extend the theme
const theme = extendTheme(overrides);

export default theme;
