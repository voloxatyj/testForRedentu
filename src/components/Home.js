import React,{ useState, Fragment } from 'react'
import { v4 as uuidv4 } from 'uuid'
import arrOfColors from '../util/arrOfColors'
// MUI stuff
import { withStyles } from '@material-ui/core/styles'
import {
	TextField, 
	Grid,
	Button,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	CircularProgress
} from '@material-ui/core'
// Icons
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone'
import SaveIcon from '@material-ui/icons/Save'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { SET_TEXT, CLEARE_ITEM } from '../redux/types'

const styles = theme => ({ ...theme.typography })

export const Home = props => {

const { classes } = props
const dispatch = useDispatch()
const data = useSelector(state => state.data)
const errors = useSelector(state => state.data.errors)
const [text, setText] = useState('')
const [color, setColor] = useState('')
const [backgroundColor, setBackgroundColor] = useState('')
const [fontSize, setFontSize] = useState('')
const [colors, setColors] = useState(arrOfColors)
const [open, setOpen] = useState(false)
const clearFields = () => {
	setBackgroundColor('')
	setColor('')
	setFontSize('')
	setText('')
}
	return (
		<Fragment>
			<Grid container className={classes.form}>
				<Grid item sm />
					<Grid item sm>
						<form noValidate onSubmit={e => {
							e.preventDefault()
							dispatch({ 
								type: SET_TEXT, 
								payload: { text, fontSize: `${fontSize}px`, color, backgroundColor, id: uuidv4() }})
							clearFields()
							}}
						>
							<TextField
								className={classes.textField}
								error={errors.text ? true : false}
								onChange={e => setText(e.target.value)}
								label="text"
								type="text"
								helperText={errors.text}
								variant="outlined"
								value={text}
								fullWidth
							/>
							<TextField
								className={classes.textField}
								error={errors.fontSize ? true : false}
								onChange={e => setFontSize(e.target.value)}
								label="font-size"
								type="number"
								helperText={errors.fontSize}
								variant="outlined"
								value={fontSize}
								fullWidth
							/>
							<FormControl 
								className={classes.formControl}
								variant="outlined"
								style={{width:'100%'}}	
							>
								<InputLabel>Color</InputLabel>
								<Select
									label="demo-controlled-open-select-label"
									open={open}
									onClose={() => setOpen(false)}
									onOpen={() => setOpen(true)}
									onClick={e => setColor(e.target.value)}
									value={color}
									style={{ color : color }}
								>
								{colors.map(item => (
									<MenuItem
										className={classes.textField} 
										value={item} 
										key={`${item}`}
										style={{ backgroundColor: `${item}` }}
									>
										{`color ${item}`}
									</MenuItem>
								))}
								</Select>
							</FormControl>
							<Button
								variant="outlined"
								className={classes.textField}
								onClick={() => {
									var color = Math.floor(Math.random() * 16777216).toString(16);
									// Avoid loops.
									setBackgroundColor(('#000000'.slice(0, -color.length) + color).toString())
								}}
								style={{backgroundColor : backgroundColor}}
								fullWidth
							>backgroundColor
							</Button>
							<div className={classes.btnContainer}>
								<Button
									type="button"
									startIcon={<HighlightOffTwoToneIcon />}
									variant="contained"
									color="secondary"
									className={classes.buttons}
									onClick={() => {
										clearFields()
										dispatch({ type: CLEARE_ITEM })
									}}
									>
									ClearItem
								</Button>
								<Button
									type="submit"
									startIcon={<SaveIcon />}
									variant="contained"
									color="primary"
									className={classes.buttons}
									>
									SetItem
								</Button>
							</div>
						</form>
					</Grid>
				<Grid item sm />
			</Grid>
			{data.loading !== false && ( 
				<Fragment>
					<div className={classes.invisibleSeparator}></div>
						<div style={{display:'grid', justifyContent: 'center'}}>
							<h1 
								style={{
									fontSize:`${data.item.fontSize}`, 
									backgroundColor: `${data.item.backgroundColor}`,
									color:`${data.item.color}`,
									width: 'fit-content',
									padding: 25,
									border: '3px solid',
									borderRadius: '50%'
								}}>
									{data.item.text}
								</h1>
						</div>
				</Fragment>
			)}
		</Fragment>
	)
}

export default withStyles(styles)(Home)