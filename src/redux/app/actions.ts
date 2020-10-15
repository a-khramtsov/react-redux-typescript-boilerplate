import * as types from './types'
import { FetchingNamesEnum } from '../../types/types'

export enum actionTypes {
	TOGGLE_IS_FETCHING = 'app/TOGGLE_IS_FETCHING',
}
 

export const toggleIsFetching = (instanceName: FetchingNamesEnum): types.ToggleIsFetchingType => {
	return {
		type: actionTypes.TOGGLE_IS_FETCHING,
		instanceName
	}
}