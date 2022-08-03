import {
	AppBar,
	Toolbar,
	Typography,
	Tabs,
	Tab,
	IconButton,
	SwipeableDrawer,
} from '@mui/material';
import { Box, styled } from '@mui/system';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const navbar = [
	{
		name: 'home',
		display: 'HOME',
		to: '/',
	},
	{
		name: 'destination',
		display: 'DESTINATION',
		to: '/destination',
	},
	{
		name: 'crew',
		display: 'CREW',
		to: '/crew',
	},
	{
		name: 'technology',
		display: 'TECHNOLOGY',
		to: '/technology',
	},
];
const Line = styled('div')(({ theme }) => ({
	height: '1px',
	background: '#FFFFFF',
	mixBlendMode: 'normal',
	opacity: 0.25,
	flex: 1,
	transform: 'translateX(2rem)',
	zIndex: 999,
	[theme.breakpoints.down('lg')]: { display: 'none' },
}));
const Header = () => {
	const { pathname } = useLocation();
	const [active, setActive] = useState('home');
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const handleChange = (event, newValue) => {
		setActive(newValue);
	};
	const toggleSidebar = () => {
		setSidebarOpen(prev => !prev);
	};
	return (
		<AppBar
			sx={{ background: 'transparent', mt: '2.5rem' }}
			elevation={0}
			position='absolute'
		>
			<Toolbar disableGutters sx={{ pl: { xs: '1rem', sm: '2rem' } }}>
				<img
					src={process.env.PUBLIC_URL + './assets/shared/logo.svg'}
					alt='Logo'
				/>

				<Line />
				<Box
					justifyContent='end'
					sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
				>
					<IconButton
						sx={{ pr: { xs: '1rem', sm: '2rem' } }}
						color='inherit'
						onClick={toggleSidebar}
					>
						<AiOutlineMenu size={40} />
					</IconButton>
					<SwipeableDrawer
						anchor='right'
						open={sidebarOpen}
						onClose={() => setSidebarOpen(false)}
						onOpen={() => setSidebarOpen(true)}
						sx={{
							'& .MuiDrawer-paperAnchorRight ': {
								backgroundColor: 'rgba(255,255,255,0.04)',
								backdropFilter: 'blur(81.5px)',
							},
						}}
					>
						<IconButton
							sx={{
								px: { xs: '1rem', sm: '2rem' },
								mt: '2.5rem',
								mb: '2rem',
								ml: 'auto',
							}}
							color='inherit'
							onClick={() => setSidebarOpen(false)}
						>
							<AiOutlineClose size={40} />
						</IconButton>

						<Tabs
							value={active}
							onChange={handleChange}
							orientation='vertical'
							sx={{
								display: { xs: 'flex', md: 'none' },
								width: '100%',
								height: '100%',
								alignItems: 'flex-start',
								'& .MuiTabs-indicator': {
									width: '4px',
									borderRadius: '5px',
									backgroundColor: 'white',
								},
								'& .MuiTabs-flexContainerVertical': {
									alignItems: 'flex-start',
								},
								'&:hover .MuiTabs-indicator': {
									opacity: 0.5,
								},
							}}
						>
							{navbar.map((navItem, index) => (
								<Tab
									component={NavLink}
									onMouseEnter={() => setActive(navItem.name)}
									onMouseLeave={() =>
										setActive(navbar.find(e => e.to === pathname).name)
									}
									key={navItem.name}
									sx={{
										py: 4,
										my: 1,
										pl: 4,
										pr: 16,
										mx: { md: 0.125, lg: 1 },
										color: 'white',
										display: { xs: 'block', md: 'none' },
										flexDirection: 'row',
										transition: 'all .125s ease-in-out',
										'&.Mui-selected': {
											color: 'white',
										},
									}}
									to={navItem.to}
									value={navItem.name}
									label={
										<>
											<Typography
												variant='nav'
												sx={{
													fontWeight: 'bolder',
												}}
											>
												{'0' + index}
											</Typography>
											<Typography
												variant='nav'
												sx={{
													fontWeight: 'lighter',
													ml: '.5rem',
												}}
											>
												{navItem.display}
											</Typography>
										</>
									}
								/>
							))}
						</Tabs>
					</SwipeableDrawer>
				</Box>
				<Tabs
					value={active}
					onChange={handleChange}
					sx={{
						ml: 'auto',
						display: { xs: 'none', md: 'flex' },
						backgroundColor: 'rgba(255,255,255,0.04)',
						backdropFilter: 'blur(81.5px)',
						pl: { md: '1.875rem', xl: '5rem' },
						pr: { md: '3.5rem', xl: '8rem' },
						'& .MuiTabs-indicator': {
							height: '3px',
							backgroundColor: 'white',
						},
						'&:hover .MuiTabs-indicator': {
							opacity: 0.5,
						},
					}}
				>
					{navbar.map((navItem, index) => (
						<Tab
							component={NavLink}
							onMouseEnter={() => setActive(navItem.name)}
							onMouseLeave={() =>
								setActive(navbar.find(e => e.to === pathname).name)
							}
							key={navItem.name}
							sx={{
								py: 4.775,
								px: { md: 3, lg: 4 },
								mx: { md: 0.125, lg: 1 },
								color: 'white',
								display: 'block',
								flexDirection: 'row',
								transition: 'all .125s ease-in-out',
								'&.Mui-selected': {
									color: 'white',
								},
							}}
							to={navItem.to}
							value={navItem.name}
							label={
								<>
									<Typography
										variant='nav'
										sx={{
											fontWeight: 'bolder',
											display: { xs: 'none', lg: 'inline' },
										}}
									>
										{'0' + index}
									</Typography>
									<Typography
										variant='nav'
										sx={{
											fontWeight: 'lighter',
											ml: { md: 0, lg: '.5rem' },
										}}
									>
										{navItem.display}
									</Typography>
								</>
							}
						/>
					))}
				</Tabs>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
