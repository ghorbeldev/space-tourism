import React, { useState } from 'react';

import { Box, Container } from '@mui/system';
import SpecialHeading from '../special-heading/SpecialHeading';
import { Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
const mobileBg =
	process.env.PUBLIC_URL +
	'./assets/technology/background-technology-mobile.jpg';
const desktopBg =
	process.env.PUBLIC_URL +
	'./assets/technology/background-technology-desktop.jpg';
const tabletBg =
	process.env.PUBLIC_URL +
	'./assets/technology/background-technology-tablet.jpg';
const Technology = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleChange = (event, newValue) => {
		setActiveIndex(newValue);
	};
	const matches = useMediaQuery(theme => theme.breakpoints.up('lg'));
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
					px: { xs: 0, lg: '1rem' },
					flexDirection: 'row',
					justifyContent: { xs: 'space-evenly', lg: 'space-between' },
					alignItems: 'center',
					textAlign: { xs: 'center', lg: 'start' },
					flexWrap: { xs: 'wrap', lg: 'nowrap	' },
					minHeight: { xs: 'calc(100vh - 180px)', md: 'calc(100vh - 230px)' },
				}}
			>
				<SpecialHeading label={'SPACE LAUNCH 101'} nth={3} />
				<Tabs
					centered
					sx={{
						'& .MuiTabs-indicator': {
							display: 'none',
						},
						'& .MuiTabs-flexContainer': {
							justifyContent: { xs: 'center', lg: 'unset' },
						},
						minWidth: { xs: '100%', lg: 80 },
						order: { xs: 1, lg: 0 },
						my: { xs: 5, lg: 0 },
					}}
					value={activeIndex}
					onChange={handleChange}
					orientation={matches ? 'vertical' : 'horizontal'}
				>
					{data.map((_, k) => (
						<Tab
							key={k}
							value={k}
							label={<Typography variant='h4'>{k + 1}</Typography>}
							sx={{
								p: 0,
								m: matches ? '1rem 0' : '0 1rem',
								width: 80,
								height: 80,
								minWidth: 'unset',
								minHeight: 'unset',
								color: 'white',
								borderRadius: '50%',
								transition: 'all 225ms ease-in-out',
								border: '1px solid rgba(255,255,255,0.25)',
								':hover': {
									border: '1px solid rgba(255,255,255)',
								},
								'&.Mui-selected': {
									backgroundColor: 'white',
								},
							}}
						/>
					))}
				</Tabs>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						maxWidth: '444px',
						mx: 2,
						order: { xs: 2, lg: 1 },
					}}
				>
					<Typography variant='nav' color='secondary'>
						THE TERMINOLOGY...
					</Typography>
					<Typography variant='h3' sx={{ my: 2 }}>
						{data[activeIndex].name}
					</Typography>
					<Typography variant='text' color='secondary'>
						{data[activeIndex].description}
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: { xs: 'unset', lg: 'flex-end' },
						order: { xs: 0, lg: 2 },
					}}
				>
					<img
						src={
							matches
								? process.env.PUBLIC_URL + data[activeIndex].images.portrait
								: process.env.PUBLIC_URL + data[activeIndex].images.landscape
						}
						alt={data[activeIndex].name}
						style={{
							maxHeight: 'calc(100vh - 230px)',
							objectFit: 'cover',
							width: matches ? 'auto' : '100vw',
						}}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Technology;
