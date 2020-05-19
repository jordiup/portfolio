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
					fill="currentColor"
					fillRule="evenodd"
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
					fill="currentColor"
					fillRule="evenodd"
					d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
				/>
			</svg>
		),
		viewBox: '0 0 10 16'
	},
	github: {
		path: (
			<svg xmlns="http://www.w3.org/2000/svg">
				<path
					fill="#38D39F"
					d="M33.2 8.9a17.7 17.7 0 00-6.5-6.5 17.4 17.4 0 00-9-2.4A17.4 17.4 0 009 2.4a17.7 17.7 0 00-6.5 6.5A17.4 17.4 0 000 17.8a17.3 17.3 0 003.4 10.4 17.4 17.4 0 008.8 6.4 1 1 0 00.9-.1 1 1 0 00.3-.7v-3.3h-.6a6.8 6.8 0 01-1.3.2 9.8 9.8 0 01-1.6-.2 3.6 3.6 0 01-1.5-.7 3 3 0 01-1-1.4l-.3-.6a5.8 5.8 0 00-.7-1.1 2.8 2.8 0 00-1-1h-.2a1.7 1.7 0 01-.3-.3 1.3 1.3 0 01-.2-.3l.1-.3a1.5 1.5 0 01.7-.1H6a3.4 3.4 0 011.1.6 3.7 3.7 0 011.1 1.2A4 4 0 009.5 28a2.7 2.7 0 001.5.5 6.6 6.6 0 001.4-.1 4.6 4.6 0 001-.4 3.8 3.8 0 011.1-2.4 15.8 15.8 0 01-2.3-.4 9.4 9.4 0 01-2.2-.9 6.2 6.2 0 01-2-1.5 7.5 7.5 0 01-1-2.5 11.6 11.6 0 01-.5-3.4A6.8 6.8 0 018.3 12a6.2 6.2 0 01.1-4.7 3.2 3.2 0 012 .3 14 14 0 012 .9l1 .6a16.7 16.7 0 018.8 0l.9-.6a12.5 12.5 0 012.1-1 3 3 0 011.9-.2 6.2 6.2 0 01.2 4.7 6.8 6.8 0 011.8 4.8 11.7 11.7 0 01-.5 3.4 7.2 7.2 0 01-1.2 2.5 6.5 6.5 0 01-1.9 1.5 9.5 9.5 0 01-2.1.9 15.8 15.8 0 01-2.4.4 4.1 4.1 0 011.2 3.3v4.9a1 1 0 00.3.7 1 1 0 00.9.1 17.4 17.4 0 008.8-6.4 17.3 17.3 0 003.3-10.4 17.4 17.4 0 00-2.3-9z"
					data-name="Path 291"
				/>
			</svg>
		),
		viewBox: '0 0 35.5 34.7'
	},
	linkedin: {
		path: (
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
				<path
					fill="#38D39F"
					d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
				/>
			</svg>
		),
		viewBox: '0 0 24 24'
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
