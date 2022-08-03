import { Box } from '@mui/material';
import { Routes, Route } from 'react-router';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import Destination from '../destination/Destination';
import Crew from '../crew/Crew';
import Technology from '../technology/Technology';
import data from '../../data.json';
const PageWrapper = () => {
	return (
		<Box
			sx={{
				overflowX: 'hidden',
				width: '100%',
				height: '100%',
				minHeight: '100vh',
			}}
		>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route
					path='/destination'
					element={<Destination data={data.destinations} />}
				/>
				<Route path='/crew' element={<Crew data={data.crew} />} />
				<Route
					path='/technology'
					element={<Technology data={data.technology} />}
				/>
			</Routes>
		</Box>
	);
};

export default PageWrapper;
