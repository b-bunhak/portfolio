import React from 'react';

import Link from 'next/link';

import { useRouter } from 'next/router';

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
	const colorMode = React.useContext(ColorModeContext);

	return (
		<Box display="flex" p={2}>
			<ToggleButtonGroup
				value={router.locale}
				color="primary"
				size="medium"
				sx={{
					mr: 'auto',

					//bgcolor: 'background.default',
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
				value={theme.palette.mode}
				onChange={colorMode.toggleColorMode}
				color="primary"
				size="medium"
				sx={{
					ml: 'auto',
					//bgcolor: 'background.default',
				}}
			>
				<ToggleButton value="light">
					<LightMode />
				</ToggleButton>
				<ToggleButton value="dark">
					<DarkMode />
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
}
