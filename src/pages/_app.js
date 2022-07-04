import React from 'react';
import Head from 'next/head';
import { NextIntlProvider } from 'next-intl';
import { CssBaseline, ThemeProvider, useTheme } from '@mui/material';

import { themeLight, themeDark, ColorModeContext } from '../theme';

export default function App({ Component, pageProps }) {
	const [mode, setMode] = React.useState('dark');

	return (
		<NextIntlProvider messages={pageProps.messages}>
			<ColorModeContext.Provider value={setMode}>
				<ThemeProvider theme={mode === 'light' ? themeLight : themeDark}>
					<CssBaseline />
					<AppInner Component={Component} pageProps={pageProps} />
				</ThemeProvider>
			</ColorModeContext.Provider>
		</NextIntlProvider>
	);
}

function AppInner({ Component, pageProps }) {
	const theme = useTheme();

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

				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color={theme.palette.primary.main}
				/>

				<meta name="msapplication-TileColor" content="#24292e" />

				<meta name="theme-color" content={theme.palette.background.default} />
			</Head>

			<Component {...pageProps} />
		</>
	);
}
