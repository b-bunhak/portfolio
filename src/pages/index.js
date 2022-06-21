import React from 'react';
import {
	Container,
	Typography,
	Paper,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button,
	Box,
	ToggleButton,
	ToggleButtonGroup,
	Tooltip,
	useTheme,
} from '@mui/material';

import { LightMode, DarkMode, GitHub } from '@mui/icons-material';

import { ColorModeContext } from '../theme';

const projects = [
	{
		name: 'Olá Ônibus',
		description: 'WebApp for bus stops and routes.',
		image: '/ola.jpeg',
		live: 'https://olaonibus.com.br',
	},
	{
		name: 'Portal Home',
		description: 'Real Estate website with a focus on simplicity.',
		image: '/portalhome.png',
		live: 'https://portalhome.com.br',
	},
	{
		name: 'Together-Do',
		description: 'Collaborate realtime to-do list with chat.',
		image: '/portalhome.png',
		live: 'https://together-doo.web.app',
		source: 'https://github.com/b-bunhak/together-do',
	},
];

const Home = () => {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);

	return (
		<Container
			component="main"
			maxWidth="lg"
			sx={{
				p: 0,
				pt: [10, 14, 18, 22],
				backgroundImage: `url("/code-${
					theme.palette.mode === 'dark' ? 'dark' : 'light'
				}.svg")`,
				backgroundSize: '100%',
			}}
		>
			<ToggleButtonGroup
				value={theme.palette.mode}
				onChange={colorMode.toggleColorMode}
				color="primary"
				size="medium"
				sx={{
					position: 'absolute',
					top: 0,
					right: 0,
					m: 2,
					bgcolor: 'background.default',
				}}
			>
				<ToggleButton value="light">
					<LightMode />
				</ToggleButton>
				<ToggleButton value="dark">
					<DarkMode />
				</ToggleButton>
			</ToggleButtonGroup>
			<Paper
				elevation={15}
				variant="gradient"
				sx={{
					textAlign: 'center',
					bgcolor: 'background.default',
					p: 2,
					mx: 2,
					mb: 20,
					color: 'primary.contrastText',
				}}
			>
				<Typography variant="h4">Hello, i'm</Typography>

				<Typography
					variant="h1"
					//sx={{ bgcolor: 'background.default', color: 'text.primary' }}
				>
					Bruno Bunhak
				</Typography>

				<Typography variant="h3" my={1}>
					Software Developer
				</Typography>

				<Typography variant="h6">b.bunhak@gmail.com</Typography>
			</Paper>

			{/* <Box component="img" src="/code-dark.svg" sx={{ width: '100%' }} /> */}

			<Paper elevation={5} sx={{ borderRadius: 0, py: 2, my: 20 }}>
				<Typography variant="h3" textAlign="center">
					Skillset
				</Typography>
				<Box
					component="ul"
					display="flex"
					flexWrap="wrap"
					alignItems="center"
					justifyContent="space-between"
					px={1}
					sx={{
						listStyle: 'none',
						'& > li': {
							width: '30%',
							padding: 2,
						},
					}}
				>
					{[
						{ title: 'HTML, CSS and JS', src: '/HtmlCssJs.svg' },
						{ title: 'ReactJS', src: '/reactjs.svg' },
						{
							title: 'NextJS',
							src:
								theme.palette.mode === 'dark'
									? '/nextjsDark.svg'
									: '/nextjs.svg',
						},
						{
							title: 'NodeJS',
							src:
								theme.palette.mode === 'dark'
									? '/nodejsDark.svg'
									: '/nodejs.svg',
						},
						{ title: 'Firebase', src: '/firebase.svg' },
						{ title: 'PostgreSQL', src: '/Postgresql.svg' },
					].map(({ src, title }) => (
						<li>
							<Tooltip arrow title={title}>
								<Box component="img" src={src} width="100%" height="60px" />
							</Tooltip>
						</li>
					))}
				</Box>
			</Paper>

			<Paper
				elevation={5}
				display="flex"
				flexWrap="wrap"
				width="100%"
				sx={{ borderRadius: 0, py: 3, px: 2 }}
			>
				<Typography variant="h3" textAlign="center">
					Projects
				</Typography>
				<Box
					display="flex"
					flexWrap="wrap"
					sx={{
						'& > *': {
							flex: '1 1 320px',
						},
					}}
				>
					{projects.map((project) => (
						<Box p={2} display="flex">
							<Card key={project.name} elevation={20} sx={{ flex: 1 }}>
								<CardMedia
									component="img"
									height="200"
									image={project.image}
									alt={project.name}
								/>
								<CardContent>
									<Typography variant="h4" color="primary">
										{project.name}
									</Typography>

									<Typography variant="h6">{project.description}</Typography>
								</CardContent>

								<CardActions>
									<Button variant="outlined" color="primary">
										Live Demo
									</Button>
									{project.source && (
										<Button startIcon={<GitHub />}>Source</Button>
									)}
								</CardActions>
							</Card>
						</Box>
					))}
					<div />
					<div />
				</Box>
			</Paper>
		</Container>
	);
};

export default Home;
