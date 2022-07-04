import React from 'react';

import Link from 'next/link';

import { useRouter } from 'next/router';

import { useTranslations } from 'next-intl';

import { Box, ToggleButton, ToggleButtonGroup, useTheme } from '@mui/material';

import { LightMode, DarkMode } from '@mui/icons-material';

import { ColorModeContext } from '../theme';

const ToggleLink = ({ href, locale, ...props }) => (
	<Link passHref href={href} locale={locale}>
		<ToggleButton component="a" {...props} />
	</Link>
);

export default function HeaderToggles() {
	const router = useRouter();

	const theme = useTheme();
	const setColorMode = React.useContext(ColorModeContext);

	const t = useTranslations();

	return (
		<Box display="flex" p={2}>
			<ToggleButtonGroup
				value={router.locale}
				color="primary"
				size="medium"
				sx={{
					mr: 'auto',
				}}
			>
				<ToggleLink value="en-US" href="/" locale="en-US">
					EN
				</ToggleLink>

				<ToggleLink value="pt-BR" href="/" locale="pt-BR">
					PT
				</ToggleLink>
			</ToggleButtonGroup>

			<ToggleButtonGroup
				exclusive
				value={theme.palette.mode}
				onChange={(_, mode) => {
					if (mode) {
						setColorMode(mode);
					}
				}}
				color="primary"
				size="medium"
				sx={{
					ml: 'auto',
				}}
			>
				<ToggleButton value="light" aria-label={t('lightLabel')}>
					<LightMode />
				</ToggleButton>
				<ToggleButton value="dark" aria-label={t('darkLabel')}>
					<DarkMode />
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
}
