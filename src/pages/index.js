import {
	Container,
	Typography,
	Paper,
	Card,
	CardMedia,
	CardActions,
	Button,
	Box,
	ToggleButton,
	ToggleButtonGroup,
	Tooltip,
} from '@mui/material';

import { LightMode, DarkMode } from '@mui/icons-material';

const projects = [
	{
		name: 'Olá Ônibus',
		description: 'WebApp for bus stops and routes.',
		image: '/olaOnibus.png',
	},
	{
		name: 'Portal Home',
		description: 'Real Estate website with a focus on simplicity.',
		image: '/portalhome.png',
	},
];

const Home = () => {
	return (
		<Container
			component="main"
			maxWidth="lg"
			sx={{
				p: 0,
				pt: 10,
				backgroundImage: 'url("/code-light.svg")',
				backgroundSize: '100%',
			}}
		>
			<ToggleButtonGroup
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
				<ToggleButton value="left" key="left">
					<LightMode />
				</ToggleButton>
				<ToggleButton value="right" key="right">
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
						{ title: 'NextJS', src: '/nextjs.svg' },
						{ title: 'NodeJS', src: '/nodejs.svg' },
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
				<Box display="flex" flexWrap="wrap">
					{projects.map((project) => (
						<Card sx={{ m: 2 }} elevation={20}>
							<CardMedia
								component="img"
								height="200"
								image={project.image}
								alt={project.name}
							/>
							<Box px={2} pt={1}>
								<Typography variant="h4" color="primary">
									{project.name}
								</Typography>

								<Typography variant="h6">{project.description}</Typography>

								<CardActions>
									<Button
										variant="outlined"
										color="primary"
										sx={{ ml: 'auto' }}
									>
										+ Info
									</Button>
								</CardActions>
							</Box>
						</Card>
					))}
				</Box>
			</Paper>
		</Container>
	);
};

export default Home;
