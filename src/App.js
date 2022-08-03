import {
	createTheme,
	ThemeProvider,
	CssBaseline,
	GlobalStyles,
} from '@mui/material';
import PageWrapper from './components/page-wrapper/PageWrapper';
import darkScrollbar from '@mui/material/darkScrollbar';
const breakpoints = {
	values: {
		xs: 0,
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200,
	},
};
const theme = createTheme({
	palette: {
		primary: { main: '#0B0D17' },
		secondary: { main: '#D0D6F9' },
		white: '#FFFFFF',
		background: '#0B0D17',
		text: { primary: '#FFFFFF' },
	},
	typography: {
		h1: {
			fontSize: '9.375rem',
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: '5rem',
			},
			fontFamily: "'Bellefair', serif",
		},
		h2: {
			fontSize: '6.25rem',
			fontFamily: "'Bellefair', serif",
		},
		h3: {
			fontSize: '3.5rem',
			[`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
				fontSize: '40px',
			},
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: '24px',
			},
			fontFamily: "'Bellefair', serif",
		},
		h4: {
			fontSize: '2rem',
			fontFamily: "'Bellefair', serif",
		},
		h5: {
			fontSize: '1.75rem',
			letterSpacing: 4.75,
			fontFamily: "'Barlow Condensed', serif",
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: '1rem',
			},
		},
		subtitle1: {
			fontSize: '1.75rem',
			fontFamily: "'Bellefair', serif",
		},
		subtitle2: {
			fontSize: '0.875rem',
			letterSpacing: 2.35,
			fontFamily: "'Barlow Condensed', serif",
		},
		text: {
			fontFamily: "'Barlow Condensed', serif",
			lineHeight: '32px',
			fontSize: '1rem',
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: '15px',
			},
		},
		nav: {
			fontSize: '1rem',
			letterSpacing: 2.7,
			fontFamily: "'Barlow Condensed', serif",
		},
		button: {
			fontSize: '2rem',
			[`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
				fontSize: '1.25rem',
			},
			fontFamily: "'Bellefair', serif",
			letterSpacing: '2px',
		},
		fontFamily: "'Bellefair', serif",
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 577,
			md: 769,
			lg: 993,
			xl: 1201,
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: themeParam => ({
				body: darkScrollbar(),
			}),
		},
	},
});
const globalStyles = theme => ({
	body: {
		background: theme.palette.background,
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<GlobalStyles styles={globalStyles} />
			<PageWrapper />
		</ThemeProvider>
	);
}

export default App;
