import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { useTranslations } from 'next-intl';
import { Container, Box } from '@mui/material';

import HeaderToggles from '../components/HeaderToggles';
import LandingTitle from '../components/LandingTitle';
import About from '../components/About';
import Tech from '../components/Tech';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
	const router = useRouter();

	const t = useTranslations();

	return (
		<>
			<Head>
				<title>Bruno Bunhak - {t('developer')}</title>

				<meta name="description" content={t('about')} />

				<meta property="og:locale" content={router.locale} />
				<meta
					property="og:title"
					content={`Bruno Bunhak  - ${t('developer')}`}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.BrunoBunhak.dev" />
				<meta property="og:image" content="/og:image.jpg" />
				<meta property="og:description" content={t('about')} />
			</Head>
			<Container
				component="main"
				maxWidth="lg"
				sx={{
					p: 0,
				}}
			>
				<HeaderToggles />
				<LandingTitle />

				<Box p={2} sx={{ textAlign: 'center' }}>
					<About />

					<Tech />

					<Projects />
				</Box>
			</Container>

			<Footer />
		</>
	);
};

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: (await import(`../../lang/${locale}.json`)).default.index,
		},
	};
}

export default Home;
