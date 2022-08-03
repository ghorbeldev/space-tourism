import { Typography } from '@mui/material';
import React from 'react';

const SpecialHeading = ({ label, nth, sx, ...rest }) => {
	return (
		<Typography
			variant='h5'
			width='100%'
			textTransform='uppercase'
			sx={{
				mt: 2,
				textAlign: { xs: 'center', sm: 'left' },
				position: 'absolute',
				top: { xs: '105px', md: '156px' },
				width: 'fit-content',
				...sx,
			}}
			{...rest}
		>
			<span style={{ opacity: 0.5, marginRight: '1rem', fontWeight: 'bold' }}>
				{typeof nth === 'string'
					? nth.length === 2
						? nth
						: '0' + nth
					: '0' + nth}
			</span>
			{label}
		</Typography>
	);
};

export default SpecialHeading;
