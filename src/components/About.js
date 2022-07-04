import Image from 'next/image';

import { useTranslations } from 'next-intl';
import { Typography, Paper, Box } from '@mui/material';

import SectionHeading from './SectionHeading';

import profilePic from '../../public/me.jpg';

export default function About() {
	const t = useTranslations();

	return (
		<>
			<SectionHeading>{t('aboutHeading')}</SectionHeading>

			<Box
				display="flex"
				flexWrap="wrap-reverse"
				justifyContent="center"
				alignItems="center"
				mb={4}
			>
				<Paper
					elevation={0}
					sx={{
						m: 2,
						width: '300px',
						height: '300px',
						objectFit: 'cover',
						borderRadius: '25%',
						overflow: 'hidden',
						'& > *': {
							top: '-20%',
						},
					}}
				>
					<Image layout="responsive" src={profilePic} alt={t('pictureAlt')} />
				</Paper>

				<Typography
					variant="h6"
					component="p"
					sx={{ py: 1, maxWidth: '480px' }}
				>
					{t('about')}
				</Typography>
			</Box>
		</>
	);
}
