import { Box, Container } from '@mui/system';
import React from 'react';
import { Button, Typography } from '@mui/material';
const desktopBg = './assets/home/background-home-desktop.jpg';
const tabletBg = './assets/home/background-home-tablet.jpg';
const mobileBg = './assets/home/background-home-mobile.jpg';

const Hero = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				minHeight: '100vh',
				backgroundImage: {
					xs: `url(${mobileBg})`,
					sm: `url(${tabletBg})`,
					md: `url(${desktopBg})`,
				},
				backgroundSize: 'cover',
				pt: { xs: '105px', md: '156px' },
				pb: { xs: 4, lg: 0 },
			}}
		>
			<Container
				maxWidth='xl'
				sx={{
					display: 'flex',
					px: '.7rem',
					flexDirection: { xs: 'column', md: 'row' },
					justifyContent: { xs: 'space-evenly', md: 'space-between' },
					alignItems: 'center',
					minHeight: { xs: 'calc(100vh - 105px)', md: 'calc(100vh - 156px)' },
				}}
			>
				<Box sx={{ maxWidth: 450, textAlign: { xs: 'center', md: 'start' } }}>
					<Typography
						color='secondary'
						variant={'h5'}
						sx={{ mb: { xs: 5, lg: 2 } }}
					>
						SO, YOU WANT TO TRAVEL TO
					</Typography>
					<Typography sx={{ mt: 2 }} variant={'h1'}>
						SPACE
					</Typography>
					<Typography
						maxWidth={444}
						variant={'text'}
						component='p'
						sx={{ my: 2 }}
						color='secondary'
					>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</Typography>
				</Box>
				<Button
					variant='contained'
					color='white'
					sx={{
						backgroundColor: 'white',
						color: 'primary.main',
						height: { xs: 150, sm: 242, md: 270 },
						width: { xs: 150, sm: 242, md: 270 },
						padding: 0,
						borderRadius: '99999px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						':hover': {
							boxShadow: '0 0 0 86px rgba(255,255,255,0.1)',
						},
					}}
				>
					EXPLORE
				</Button>
			</Container>
		</Box>
	);
};

export default Hero;
