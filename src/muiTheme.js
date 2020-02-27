import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ffe2c4',
		},
		secondary: {
			main: '#8DABB6',
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
				paddingLeft: 0,
				paddingRight: 0,
				'&.full-height': {
					height: '100%',
				},
				'&.full-width': {
					width: '100%',
				},
				'@media (min-width: 600px)': {
					padding: 0,
				}
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
