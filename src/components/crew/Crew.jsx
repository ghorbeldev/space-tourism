import { Tab, Tabs, Typography } from '@mui/material';
import { Box, Container, styled } from '@mui/system';
import React, { useState } from 'react';
import SpecialHeading from '../special-heading/SpecialHeading';

const mobileBg =
	process.env.PUBLIC_URL + '/assets/crew/background-crew-mobile.jpg';
const desktopBg =
	process.env.PUBLIC_URL + '/assets/crew/background-crew-desktop.jpg';
const tabletBg =
	process.env.PUBLIC_URL + '/assets/crew/background-crew-tablet.jpg';
const Ball = styled('span')(({ theme }) => ({
	padding: 0,
	margin: 0,
	height: 0,
	width: 0,
	borderRadius: '50%',
	border: '.5rem solid white',
	transition: 'all .125s ease-in-out',
	opacity: 0.17,
	':hover': {
		opacity: 0.5,
	},
}));

const Indicators = ({ data, value, onChange }) => {
	return (
		<Tabs
			value={value}
			onChange={onChange}
			className='indicators'
			sx={{
				display: 'flex',
				justifyContent: { xs: 'center', lg: 'unset' },
				mb: { xs: 1, lg: 5 },
				alignSelf: 'flex-end',
				'& .MuiTabs-indicator': {
					display: 'none',
				},
				'& .MuiTabs-flexContainer': {
					justifyContent: { xs: 'center', lg: 'unset' },
				},
			}}
		>
			{data.map((_, k) => (
				<Tab
					value={k}
					key={k}
					sx={{
						pr: { xs: 1.75, lg: 3.5 },
						pl: { xs: 1.75, lg: 0 },
						minWidth: 'auto',
						'&.Mui-selected span': {
							opacity: 1,
						},
					}}
					label={<Ball />}
				/>
			))}
		</Tabs>
	);
};

const Crew = ({ data }) => {
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
					flexDirection: { xs: 'column-reverse', md: 'column', lg: 'row' },
					justifyContent: { xs: 'space-evenly', lg: 'space-between' },
					alignItems: { xs: 'center', lg: 'stretch' },
					textAlign: { xs: 'center', lg: 'start' },
					flexWrap: 'wrap',
					minHeight: { xs: 'calc(100vh - 180px)', md: 'calc(100vh - 230px)' },
				}}
			>
				<SpecialHeading label='Meet your crew' nth={2} />
				<Box
					sx={{
						display: 'flex',
						alignItems: 'flex-end',
						flexWrap: 'wrap',
						justifyContent: { xs: 'center', lg: 'flex-start' },
						width: { xs: '100%', lg: 'fit-content' },
						maxWidth: { xs: '100%', lg: '50%' },
					}}
				>
					<Box width='100%'>
						<Typography
							variant='h4'
							sx={{
								opacity: 0.5,
								textTransform: 'uppercase',
								mb: { xs: 3, lg: 2 },
								mt: 2,
							}}
						>
							{data[activeIndex].role}
						</Typography>
						<Typography
							variant='h3'
							sx={{
								textTransform: 'uppercase',
								mb: { xs: 3, lg: 2 },
								whiteSpace: { xs: 'wrap', md: 'nowrap' },
							}}
						>
							{data[activeIndex].name}
						</Typography>
						<Typography
							variant='text'
							color='secondary'
							sx={{
								mx: { xs: 'auto', lg: 0 },
								mb: { xs: 3, lg: 0 },
								width: { xs: '327px', lg: '444px' },
								maxWidth: '100%',
							}}
						>
							{data[activeIndex].bio}
						</Typography>
					</Box>
					<Indicators value={activeIndex} onChange={handleChange} data={data} />
				</Box>

				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'flex-end',
						maxWidth: '50%',
					}}
				>
					<img
						src={process.env.PUBLIC_URL + data[activeIndex].images.png}
						alt={data[activeIndex].name}
						style={{ maxHeight: 'calc(100vh - 230px)', maxWidth: '100%' }}
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Crew;
