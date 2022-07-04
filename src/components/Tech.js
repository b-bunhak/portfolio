import { useTranslations } from 'next-intl';
import { Box, useTheme } from '@mui/material';

import SectionHeading from './SectionHeading';

import randomColor from 'randomcolor';

const tech = [
	'ReactJS',
	'JavaScript',
	'NodeJS',
	'NextJS',
	'Firebase',
	'PostgreSQL',
	'Hasura',
	'CSS',
	'TailwindCSS',
	'MUI',
];

export default function Tech() {
	const t = useTranslations();

	const theme = useTheme();

	return (
		<>
			<SectionHeading>{t('techHeading')}</SectionHeading>

			<Box
				display="flex"
				flexWrap="wrap"
				sx={{ '& > *': { flex: '1 1 0%', minWidth: ['40%', '20%'], p: 1 } }}
			>
				{tech.map((x) => {
					const background = randomColor({
						hue: theme.palette.primary.main,
						seed: x,
					});

					return (
						<div key={x}>
							<Box
								sx={{
									p: 1.5,
									background,
									borderRadius: 2,
									color: theme.palette.getContrastText(background),
								}}
							>
								{x}
							</Box>
						</div>
					);
				})}
				<div />
				<div />
				<div />
				<div />
			</Box>
		</>
	);
}
