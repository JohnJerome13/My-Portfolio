// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
};

const darkModeBg = '#2C3639';
const primary = '#3F4E4F';
const secondary = '#A27B5C';
const textColor = '#DCD7C9';

const style = {
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				bg: mode('gray.100', darkModeBg)(props),
			},
		}),
	},
};

// 3. extend the theme
const theme = extendTheme(config, style);

export default theme;
