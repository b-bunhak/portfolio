import React from 'react';
import Head from 'next/head';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { themeLight, themeDark, ColorModeContext } from '../theme';

function MyApp({ Component, pageProps }) {
	const [mode, setMode] = React.useState('light');
	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	console.log(mode === 'dark' ? themeDark : themeLight);

	return (
		<>
			<Head>
				<title>Bruno Bunhak - Software Developer</title>
			</Head>
			<ColorModeContext.Provider value={colorMode}>
				<ThemeProvider theme={mode === 'dark' ? themeDark : themeLight}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</ColorModeContext.Provider>
		</>
	);
}

export default MyApp;
