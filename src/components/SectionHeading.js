import { Typography, Divider } from '@mui/material';

export default function SectionHeading({ children }) {
	return (
		<Divider
			sx={{
				mb: [2, 4, 8, 16],
				mt: [4, 10, 16, 24],
				'&.MuiDivider-root': {
					'&::before': {
						borderTop: (theme) => `thin solid ${theme?.palette.primary.main}`,
					},
					'&::after': {
						borderTop: (theme) => `thin solid ${theme?.palette.primary.main}`,
					},
				},
			}}
		>
			<Typography variant="h3" component="h2">
				{children}
			</Typography>
		</Divider>
	);
}
