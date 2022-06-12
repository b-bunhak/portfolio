import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme();

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
