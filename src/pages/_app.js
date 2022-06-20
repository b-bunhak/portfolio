import {
	CssBaseline,
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from '@mui/material';

let theme = responsiveFontSizes(
	createTheme({
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
		typography: {
			fontSize: 16,
			fontFamily: 'Quicksand',
			fontWeightMedium: 600,
			fontWeightRegular: 500,
			fontWeightLight: 400,
			fontWeightBold: 800,
			h1: {
				fontWeight: 700,
			},
		},
		shape: {
			borderRadius: 10,
		},
	})
);

theme = createTheme(theme, {
	components: {
		MuiPaper: {
			variants: [
				{
					props: { variant: 'gradient' },
					style: {
						background: `linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark} 120%)`,
						boxShadow:
							'0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
					},
				},
			],
		},
	},
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
