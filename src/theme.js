import React from 'react';

import { responsiveFontSizes, createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils';

export const ColorModeContext = React.createContext({
	toggleColorMode: () => {},
});

const baseTheme = {
	typography: {
		fontFamily: 'Outfit',
		fontSize: 16,
		h1: {
			fontSize: '5rem',
		},
		button: {
			textTransform: 'none',
		},
	},
	shape: {
		borderRadius: 6,
	},
	components: {
		MuiButton: {
			styleOverrides: {
				outlined: { borderWidth: '4px', '&:hover': { borderWidth: '4px' } },
			},
		},
	},
};

let themeLight = createTheme(baseTheme, {
	palette: {
		mode: 'light',
		primary: {
			//main: '#275dbf',
			main: '#007FFF',
		},
		secondary: {
			main: '#27a8bf',
		},
		info: {
			main: '#3e27bf',
		},
		background: {
			default: '#fbfbfb',
		},
	},
});

themeLight = responsiveFontSizes(
	createTheme(themeLight, {
		components: {
			MuiPaper: {
				variants: [
					{
						props: { variant: 'gradient' },
						style: {
							background: `linear-gradient(to right bottom, ${themeLight.palette.primary.main}, ${themeLight.palette.primary.dark} 120%)`,
							boxShadow:
								'0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
						},
					},
				],
			},
		},
	})
);

let themeDark = responsiveFontSizes(
	createTheme(
		deepmerge(baseTheme, {
			palette: {
				mode: 'dark',
				primary: {
					//main: '#275dbf',
					main: '#007FFF',
				},
				secondary: {
					main: '#27a8bf',
				},
				info: {
					main: '#3e27bf',
				},
				background: {
					default: '#24292e',
				},
			},
		})
	)
);

themeDark = createTheme(themeDark, {
	components: {
		MuiPaper: {
			variants: [
				{
					props: { variant: 'gradient' },
					style: {
						background: `linear-gradient(to right bottom, ${themeDark.palette.primary.main}, ${themeDark.palette.primary.dark} 120%)`,
						boxShadow:
							'0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
					},
				},
			],
		},
	},
});

export { themeLight, themeDark };
