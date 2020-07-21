import { AppStateType } from '../types/types'
import { ThunkAction } from 'redux-thunk'

const TOGGLE_IS_FETCHING = 'app/TOGGLE_IS_FETCHING'

let initialState = {
	isFetchingArray: [] as Array<string>
}

type InitialStateType = typeof initialState;
type ActionsTypes = ToggleIsFetchingType;

type ThunksType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes | any>

const appReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case TOGGLE_IS_FETCHING: {
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



export type ToggleIsFetchingType = {
	type: typeof TOGGLE_IS_FETCHING,
	instanceName: string
}
export const toggleIsFetching = (instanceName: string): ToggleIsFetchingType => {
	return {
		type: TOGGLE_IS_FETCHING,
		instanceName
	}
}


export default appReducer;