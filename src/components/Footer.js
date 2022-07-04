import { useTranslations } from 'next-intl';
import { Typography, Box } from '@mui/material';

import SocialLinks from './SocialLinks';

export default function Footer() {
	const t = useTranslations();

	return (
		<Box
			component="footer"
			sx={{
				background: (theme) =>
					`linear-gradient(to right bottom, ${theme.palette.primary.main}, ${theme.palette.primary.dark} 120%)`,
				color: 'primary.contrastText',
			}}
		>
			<Typography
				variant="h1"
				component="div"
				textAlign="center"
				fontWeight="bold"
				sx={{ pt: 8, pb: 4 }}
			>
				{'<BB/>'}
			</Typography>
			<Typography
				variant="h4"
				component="p"
				textAlign="center"
				sx={{ pb: 8, px: 2, maxWidth: '500px', m: 'auto' }}
			>
				{t('living')}
			</Typography>

			<Typography
				variant="h6"
				component="p"
				textAlign="center"
				sx={{ display: 'block', pb: 8, px: 2 }}
			>
				{t('thanks')}
			</Typography>
			<Box sx={{ textAlign: 'center', pb: 8 }}>
				<SocialLinks />
			</Box>
		</Box>
	);
}
