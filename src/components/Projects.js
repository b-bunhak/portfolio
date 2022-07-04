import React from 'react';
import Image from 'next/image';

import { useTranslations } from 'next-intl';
import { Typography, Paper, Button, Box, Divider } from '@mui/material';

import SectionHeading from './SectionHeading';

import { GitHub } from '@mui/icons-material';

import olaOnibusPic from '../../public/projects/olaonibus.png';
import portalHomePic from '../../public/projects/portalhome.png';

const projects = {
	olaOnibus: {
		name: 'Olá Ônibus',
		image: olaOnibusPic,
		demo: 'https://olaonibus.com.br',
		bg: '#1858C4',
	},
	portalHome: {
		name: 'Portal Home',
		image: portalHomePic,
		demo: 'https://portalhome.online',
		bg: '#F27022',
	},
};

export default function Projects() {
	const t = useTranslations();

	return (
		<>
			<SectionHeading>{t('projectsHeading')}</SectionHeading>

			<Box>
				{Object.entries(projects).map(([key, project]) => {
					const background =
						project.bg ||
						randomColor({ seed: project.name, luminosity: 'dark' });
					return (
						<Box
							key={project.name}
							pb={0}
							mb={[2, 4, 8]}
							bgcolor={background}
							display="flex"
							flexWrap="wrap"
							alignItems="center"
							sx={{
								color: (theme) => theme.palette.primary.contrastText,
							}}
						>
							<Box
								flex="0 1 400px"
								display="flex"
								flexDirection="column"
								maxWidth="100%"
								px={[0, 2, 4, 8]}
								mx="auto"
							>
								<Typography
									variant="h4"
									component="h3"
									textAlign="center"
									sx={{ py: 2 }}
								>
									{project.name}
								</Typography>

								<Box
									component="a"
									href={project.demo}
									target="_blank"
									rel="noopener noreferrer"
									sx={{ display: 'block', width: '400px', maxWidth: '100%' }}
								>
									<Box
										component={Image}
										layout="responsive"
										width={400}
										src={project.image}
										alt={project.name}
										sx={{ objectFit: 'contain' }}
									/>
								</Box>
							</Box>
							<Box p={2} flex="1 1 300px" mx="auto">
								<Paper elevation={2} sx={{ p: 2, flex: 1 }}>
									<Typography variant="h6" component="p" textAlign="center">
										{t(`projects.${key}`)}
									</Typography>
									<Box display="flex" mt={2} justifyContent="center">
										<Button
											component="a"
											variant="outlined"
											color="inherit"
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
										>
											{t('projectsDemo')}
										</Button>

										{project.source && (
											<Button
												component="a"
												color="inherit"
												startIcon={<GitHub />}
												href={project.source}
												target="_blank"
												rel="noopener noreferrer"
												sx={{ ml: 1 }}
											>
												{t('source')}
											</Button>
										)}
									</Box>
								</Paper>
							</Box>
						</Box>
					);
				})}
				<div />
				<div />
			</Box>

			<Typography
				variant="h6"
				component="p"
				textAlign="center"
				sx={{ pt: [4, 2, 0], pb: 4 }}
			>
				{t('projectsEnd')}
			</Typography>
		</>
	);
}
