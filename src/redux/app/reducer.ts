import * as types from './types'
import { actionTypes } from './actions'
import { FetchingNamesEnum } from '../../types/types'

let initialState = {
	isFetchingArray: [] as Array<FetchingNamesEnum>
}

const appReducer = (state = initialState, action: types.ActionsTypes): typeof initialState => {
	switch (action.type) {
		case actionTypes.TOGGLE_IS_FETCHING: {
			let fetchingArray = initialState.isFetchingArray
			let elemIndex = fetchingArray.indexOf(action.instanceName)

			if (elemIndex === -1) {
				fetchingArray.push(action.instanceName)
			} else {
				fetchingArray.splice(elemIndex, 1)
			}

			return {
				...state,
				isFetchingArray: [...fetchingArray]
			}
		}
		
		default:
			return state;
	}
}

export default appReducer;
