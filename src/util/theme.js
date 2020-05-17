module.exports = {
	palette: {
		primary: {
			light: '#33c9dc',
			main: '#00bcd4',
			dark: '#008394',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff6333',
			main: '#ff3d00',
			dark: '#b22a00',
			contrastText: '#fff'
		}
	},
	typography: {
		navbar: {
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between',
			alignSelf: 'center',
			margin: 'auto',
			'& svg': {
				color: '#fff'
			},
			'& a': {
				textDecoration: 'none'
			}
		},
		form: {
			textAlign: 'center'
		},
		btnContainer: {
			display: 'grid',
			gridGap: 20,
			margin: 15
		},
		pageTitle: {
			margin: '10px auto 10px auto'
		},
		textField: {
			margin: '10px auto 10px auto'
		},
		invisibleSeparator: {
			border: 'none',
			margin: 4
		},
		visibleSeparator: {
			width: '100%',
			borderBottom: '1px solid rgba(0,0,0,0.1)',
			marginBottom: 20
		},
		card: {
			minWidth: 'fit-content',
			maxWidth: 1200,
			borderBottom: '1px solid rgba(0,0,0,0.1)',
			margin: 20,
			padding: 20,
			display: 'inline-flex'
		},
		buttons: {
			textAlign: 'center',
			'& a': {
				margin: '20px 10px'
			}
		}
	},
};