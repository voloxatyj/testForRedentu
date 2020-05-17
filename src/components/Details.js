import React from 'react'
// Material UI stuff
import { withStyles } from '@material-ui/core/styles'
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Tooltip
 } from '@material-ui/core'
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded'
 // Redux
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_TEXT } from '../redux/types'

const styles = theme => ({ ...theme.typography })

const Details = props => {

	const dispatch = useDispatch()
	const { classes } = props
	const data = useSelector(state => state.data)
	
	return (
		<Grid container spacing={10} alignItems="center" justify="center">
			<Grid item sm={8} xs={12}>
				{data !== undefined && data.items.map(item =>
					<Card className={classes.card} key={item.id}>
						<CardContent>
							<Typography
								variant="h1"
								style={{
									fontSize: `${item.fontSize}`,
									backgroundColor: `${item.backgroundColor}`,
									color: `${item.color}`,
									width: 'fit-content',
									padding: 25,
									border: '3px solid',
									borderRadius: '50%'
								}}
							>
								{item.text}
							</Typography>
							<Tooltip title="delete" placement="top">
								<DeleteOutlineRoundedIcon onClick={() => dispatch({
									type: DELETE_TEXT,
									payload: item.id
								})}
									style={{
										cursor: 'pointer'
									}}
								/>
							</Tooltip>
						</CardContent>
						{data.showJSONFormat && (
							<Typography variant="h5" className={classes.invisibleSeparator}>
								{data.itemsFormatToJSON.get(item.id)}
							</Typography> 	
						)}
					</Card>
				)}
			</Grid>
		</Grid>
	)
}

export default withStyles(styles)(Details)