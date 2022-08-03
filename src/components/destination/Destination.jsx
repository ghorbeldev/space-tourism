import React, { useState } from 'react';

import { Box, Container } from '@mui/system';
import { Divider, Stack, Tab, Tabs, Typography } from '@mui/material';
import SpecialHeading from '../special-heading/SpecialHeading';

const mobileBg =
	process.env.PUBLIC_URL +
	'./assets/destination/background-destination-mobile.jpg';
const desktopBg =
	process.env.PUBLIC_URL +
	'./assets/destination/background-destination-desktop.jpg';
const tabletBg =
	process.env.PUBLIC_URL +
	'./assets/destination/background-destination-tablet.jpg';

const Destination = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleChange = (event, newValue) => {
		setActiveIndex(newValue);
	};
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
				pt: { xs: '180px', md: '230px' },
				pb: { xs: 4, lg: 0 },
			}}
		>
			<Container
				maxWidth='xl'
				sx={{
					display: 'flex',
					px: '.7rem',
					flexDirection: { xs: 'column', lg: 'row' },
					justifyContent: { xs: 'space-evenly', lg: 'space-between' },
					alignItems: { xs: 'center', lg: 'auto' },
					textAlign: { xs: 'center', lg: 'start' },
					flexWrap: 'wrap',
					minHeight: { xs: 'calc(100vh - 180px)', md: 'calc(100vh - 230px)' },
				}}
			>
				<SpecialHeading label='Pick your destination' nth={1} />
				<Box
					maxWidth='100%'
					sx={{
						width: { xs: '300px', lg: '450px' },
						height: { xs: '300px', lg: '450px' },
					}}
				>
					<img
						src={data[activeIndex].images.png}
						alt='PLANET'
						loading='lazy'
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</Box>

				<Box
					maxWidth='600px'
					sx={{
						width: { xs: '100%', lg: '445px' },
						display: 'flex',
						flexDirection: 'column',
						alignItems: { xs: 'center', lg: 'flex-start' },
						my: { xs: 3, lg: 0 },
					}}
				>
					<Tabs
						className='planets'
						value={activeIndex}
						onChange={handleChange}
						sx={{
							mb: 2,
							display: 'flex',
							'& .MuiTabs-indicator': {
								height: '3px',
								backgroundColor: 'white',
							},
							'&:hover .MuiTabs-indicator': {
								opacity: 0.5,
							},
						}}
					>
						{data.map((v, k) => (
							<Tab
								onMouseLeave={e => {
									document.querySelector(
										'.planets .MuiTabs-indicator'
									).style.left =
										document.querySelector('.planets .MuiTabs-flexContainer')
											.children[activeIndex].offsetLeft + 'px';
								}}
								onMouseEnter={e => {
									document.querySelector(
										'.planets .MuiTabs-indicator'
									).style.left = e.target.offsetLeft + 'px';
								}}
								key={k}
								value={k}
								label={<Typography variant={'nav'}>{v.name}</Typography>}
								sx={{
									px: 0,
									pb: 1.5,
									pt: 0,
									color: 'white',
									display: 'block',
									flexDirection: 'row',
									minWidth: { xs: '70px', lg: '90px' },
									transition: 'all .125s ease-in-out',
									'&.Mui-selected': {
										color: 'white',
									},
								}}
							/>
						))}
					</Tabs>

					<Typography variant='h2'>{data[activeIndex].name}</Typography>
					<Typography variant='text' color='secondary'>
						{data[activeIndex].description}
					</Typography>

					<Divider
						variant='fullWidth'
						flexItem={true}
						light
						color='#383B4B'
						sx={{ my: 2.5 }}
					/>
					<Stack
						sx={{
							display: 'flex',
							aligItems: 'flexStart',
							flexDirection: { xs: 'column', sm: 'row' },
						}}
						spacing={{ xs: 3, sm: 0 }}
					>
						<Box sx={{ mr: { xs: 0, sm: '5rem' } }}>
							<Typography variant='subtitle2' color='secondary' mb={1}>
								AVG. DISTANCE
							</Typography>
							<Typography variant='subtitle1' textTransform='uppercase'>
								{data[activeIndex].distance}
							</Typography>
						</Box>
						<Box>
							<Typography variant='subtitle2' mb={1} color='secondary'>
								EST. TRAVEL TIME
							</Typography>
							<Typography variant='subtitle1' textTransform='uppercase'>
								{data[activeIndex].travel}
							</Typography>
						</Box>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
};

export default Destination;
