import {
	Container,
	Typography,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Button,
	Box,
} from '@mui/material';

const Home = () => {
	return (
		<Container component="main" maxWidth="lg">
			<Typography variant="h1" mb={2}>
				Projects
			</Typography>
			<Box display="flex" flexWrap="wrap">
				<Card sx={{ maxWidth: 275, m: 2 }} elevation={20}>
					<CardMedia
						component="img"
						height="200"
						image="/olaOnibus.png"
						alt="Tela Olá Ônibus"
					/>
					<CardContent>
						<Typography variant="h4" color="primary">
							Olá Ônibus
						</Typography>

						<Typography variant="h6">
							WebApp for bus stops and routes.
						</Typography>

						<CardActions>
							<Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
								Mais +
							</Button>
						</CardActions>
					</CardContent>
				</Card>

				<Card sx={{ maxWidth: 275, m: 2 }} elevation={20}>
					<CardMedia
						component="img"
						height="200"
						image="/portalhome.png"
						alt="Tela Olá Ônibus"
					/>
					<CardContent>
						<Typography variant="h4" color="primary">
							Portal Home
						</Typography>

						<Typography variant="h6">
							Real Estate website with a focus on simplicity.
						</Typography>
						<CardActions>
							<Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
								Mais +
							</Button>
						</CardActions>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
};

export default Home;
