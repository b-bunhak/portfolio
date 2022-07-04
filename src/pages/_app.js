import React from 'react';
import Head from 'next/head';
import { NextIntlProvider } from 'next-intl';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { themeLight, themeDark, ColorModeContext } from '../theme';

function MyApp({ Component, pageProps }) {
	const [mode, setMode] = React.useState('dark');
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

				<link rel="manifest" href="/site.webmanifest" />

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

				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#007fff" />

				<meta name="msapplication-TileColor" content="#24292e" />
			</Head>
			<NextIntlProvider messages={pageProps.messages}>
				<ColorModeContext.Provider value={colorMode}>
					<ThemeProvider theme={mode === 'light' ? themeLight : themeDark}>
						<CssBaseline />
						<Component {...pageProps} />
					</ThemeProvider>
				</ColorModeContext.Provider>
			</NextIntlProvider>
		</>
	);
}

export default MyApp;
