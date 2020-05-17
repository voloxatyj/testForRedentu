import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// MUI stuff
import { withStyles } from '@material-ui/core/styles'
import {
	AppBar,
	Toolbar,
	Button,
	Tooltip
} from '@material-ui/core'
// Icons
import HomeIcon from '@material-ui/icons/Home'
import AddToHomeScreenTwoToneIcon from '@material-ui/icons/AddToHomeScreenTwoTone'
//  Redux
import { useSelector, useDispatch } from 'react-redux'
import { SET_HOME, SET_DETAILS, NOT_SHOW_JSON_FILES, SHOW_JSON_FILES } from '../../redux/types'

const styles = theme => ({ ...theme.typography })

const Navbar = props => {

const dispatch = useDispatch()
const iconsStatus = useSelector(state => state.data.iconsStatus)
const data = useSelector(state => state.data)
const { classes } = props

	return (
		<AppBar>
			<Toolbar className={classes.navbar}>
				<Link to='/' onClick={() => dispatch({ type: SET_DETAILS })}>
					<h3 className={classes.pageTitle}>testForRedentu</h3>
				</Link>
				{iconsStatus !== null ? 
					iconsStatus === 'details' ? (
					<Button
						color="primary"
						disabled={iconsStatus === null}
						component={Link}
						to="/details"
						style={{ backgroundColor: 'white', marginRight: 50 }}
						onClick={() => dispatch({ type: SET_HOME })}
					>
						Details
        </Button>
				) : (
					<Fragment>
						<Link to='/'>
							<Tooltip title="Home" placement="top">
								<HomeIcon
								style={{ color: 'white', marginRight: 50}} 
								onClick={() => dispatch({ type: SET_DETAILS })} 
								/>
							</Tooltip>
						</Link>
						<Tooltip title="Home" placement="top">
							<AddToHomeScreenTwoToneIcon
								onClick={() => data.items.map(item => {
									localStorage.setItem('JSON-file', data.itemsFormatToJSON.get(item.id))
									if (data.showJSONFormat === false) dispatch({ type: SHOW_JSON_FILES })
									else dispatch({ type: NOT_SHOW_JSON_FILES })
									}
								)}
								style={{ color: 'white', marginRight: 50, cursor: 'pointer' }} 
							/>
						</Tooltip>
					</Fragment>
				) : null}
			</Toolbar>
		</AppBar>
	)
}

export default withStyles(styles)(Navbar)