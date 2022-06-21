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

	return (
		<>
			<Head>
				<title>Bruno Bunhak - Software Developer</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
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
