import { Typography, Button, Box, IconButton } from '@mui/material';

import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const links = {
	email: 'b.bunhak@gmail.com',
	gitHub: 'https://github.com/b-bunhak',
	linkedIn: 'https://www.linkedin.com/in/bruno-bunhak/',
};

export default function SocialLinks() {
	return (
		<>
			<Button
				component="a"
				href={`mailto:${links.email}`}
				rel="noopener noreferrer"
				startIcon={
					<IconButton disableRipple component="div" color="inherit">
						<Email />
					</IconButton>
				}
				sx={{ color: 'inherit' }}
			>
				<Typography
					variant="h6"
					component="div"
					textAlign="center"
					sx={{ display: 'block' }}
				>
					{links.email}
				</Typography>
			</Button>

			<Box sx={{ textAlign: 'center', '& > *': { mx: 0.5 } }}>
				<IconButton
					component="a"
					color="inherit"
					href={links.gitHub}
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHub />
				</IconButton>
				<IconButton
					component="a"
					color="inherit"
					href={links.linkedIn}
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedIn />
				</IconButton>
			</Box>
		</>
	);
}
