import React from 'react';
import colors from './colors';
import sizes, { baseSizes } from './sizes';
import typography from './typography';
import chakraIcons from '@chakra-ui/core/dist/IconPaths';

const space = baseSizes;

const shadows = {
	sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
	md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
	lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
	xl:
		'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
	'2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
	outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
	inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
	none: 'none'
};

const breakpoints = ['30em', '48em', '62em', '80em'];
// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const zIndices = {
	hide: -1,
	auto: 'auto',
	base: 0,
	docked: 10,
	dropdown: 1000,
	sticky: 1100,
	banner: 1200,
	overlay: 1300,
	modal: 1400,
	popover: 1500,
	skipLink: 1600,
	toast: 1700,
	tooltip: 1800
};

const radii = {
	none: '0',
	sm: '0.125rem',
	md: '0.25rem',
	lg: '0.5rem',
	full: '9999px'
};

const opacity = {
	'0': '0',
	'20%': '0.2',
	'40%': '0.4',
	'60%': '0.6',
	'80%': '0.8',
	'100%': '1'
};

const borders = {
	none: 0,
	'1px': '1px solid',
	'2px': '2px solid',
	'4px': '4px solid'
};

// const borderWidths = {
//   xl: "2rem",
//   lg: "1rem",
//   md: "0.5rem",
//   sm: "0.25rem",
//   xs: "0.125rem",
//   "2xs": "0.0625rem",
//   none: 0
// };

const customIcons = {
	star: {
		path: (
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16">
				<path
					fill-rule="evenodd"
					d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"
				/>
			</svg>
		),
		viewBox: '0 0 14 16'
	},
	gitFork: {
		path: (
			<svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
				<path
					fill-rule="evenodd"
					d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
				/>
			</svg>
		),
		viewBox: '0 0 10 16'
	}
};

const theme = {
	breakpoints,
	zIndices,
	radii,
	opacity,
	borders,
	colors,
	...typography,
	sizes,
	shadows,
	space,
	icons: {
		...chakraIcons,
		...customIcons
	}
};

export default theme;
