import { useTranslations } from 'next-intl';
import { Box, Divider, Paper, Typography } from '@mui/material';

import CodingAnimation from './CodingAnimation';
import SocialLinks from './SocialLinks';

export default function LandingTitle() {
	const t = useTranslations();

	return (
		<Box display="flex" flexWrap="wrap" alignItems="center" pt={[0, 4, 8, 12]}>
			<Box flex={1} p={2} sx={{ textAlign: 'center' }}>
				<Box component="h1" m={0}>
					<Typography variant="h5" component="div">
						{t('hello')}&nbsp;{t('im')}
					</Typography>

					<Typography
						variant="h1"
						component="div"
						fontWeight="bold"
						sx={{ py: 1 }}
					>
						Bruno Bunhak
					</Typography>

					<Divider />

					<Typography
						color="primary"
						variant="h4"
						component="div"
						my={1}
						fontWeight="bold"
						sx={{ py: 1 }}
					>
						{t('developer')}
					</Typography>
				</Box>

				<Box
					display="flex"
					flexWrap="wrap"
					justifyContent="center"
					alignItems="center"
					px={2}
				>
					<SocialLinks />
				</Box>
			</Box>

			<Paper
				elevation={2}
				width="340px"
				sx={{
					'& > *': { width: '100%', height: 'auto' },
					overflow: 'hidden',
					border: (theme) => `2px solid ${theme.palette.divider}`,
					borderRadius: '4px',
					justifySelf: 'center',
					my: 2,
					mx: 'auto',
				}}
			>
				<CodingAnimation />
			</Paper>
		</Box>
	);
}
