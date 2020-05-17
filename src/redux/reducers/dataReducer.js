import { 
	SET_TEXT,
	SET_HOME,
	SET_DETAILS,
	DELETE_TEXT,
	CLEARE_ITEM,
	SHOW_JSON_FILES,
	NOT_SHOW_JSON_FILES
} from '../types'

const InitialState = {
	items: [],
	item:{},
	errors: {},
	iconsStatus: null,
	loading: false,
	itemsFormatToJSON: new Map(),
	showJSONFormat: false
}

export default function(state=InitialState, action) {
	switch(action.type) {
		case SET_TEXT:
			state.items.unshift(action.payload)
			state.itemsFormatToJSON.set(action.payload.id,
				`{{
				text: '${action.payload.text}',
				fontSize: '${action.payload.fontSize}',
				color: '${action.payload.color}',
				}}`)
				if(action.payload.text === '') {
					state.errors.text = "Text must be not empty"
				} else state.errors.text = null
				if (action.payload.fontSize === '' || +action.payload.fontSize <= 0) {
					state.errors.fontSize = "Value must be not empty or greater then zero"
				} else state.errors.fontSize = null
			return {
				...state,
				item: action.payload,
				errors: {
					text: state.errors.text,
					fontSize: state.errors.fontSize
				},
				iconsStatus: 'details',
				loading: true
			}
		case SET_HOME:
			return {
				...state,
				iconsStatus: 'home'
			}
		case SET_DETAILS:
			return {
				...state,
				iconsStatus: 'details'
			}
		case DELETE_TEXT:
			let index = state.items.findIndex(
				item => item.id === action.payload)
			state.items.splice(index,1)
			return {
				...state
			}	
		case CLEARE_ITEM:
			return {
				...state,
				loading: false
			}
		case SHOW_JSON_FILES:
			return {
				...state,
				showJSONFormat: true
			}
		case NOT_SHOW_JSON_FILES:
			return {
				...state,
				showJSONFormat: false
			}
		default:
			return state;
	}
}