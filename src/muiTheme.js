import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2894ff',
		},
		secondary: {
			main: '#1565c0',
		},
		text: {
			secondary: '#fff',
		},
	},
	typography: {
		fontFamily: ['Noto Sans SC', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
	},
	overrides: {
		MuiGrid: {
			root: {
				'&.full-height': {
					height: '100%',
					margin: 0,
				},
				'&.full-width': {
					width: '100%',
				},
			},
		},
		MuiContainer: {
			root: {
				'&.full-height': {
					height: '100%',
				},
				'&.full-width': {
					width: '100%',
				},
			},
		},
		MuiTypography: {
			gutterBottom: {
				marginBottom: '1rem',
			},
		},
	},
});

export default responsiveFontSizes(theme);