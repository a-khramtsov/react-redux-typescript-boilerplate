import { actionTypes } from './actions'
import { FetchingNamesEnum } from '../../types/types';

export type ActionsTypes = ToggleIsFetchingType ;



export type ToggleIsFetchingType = {
	type: typeof actionTypes.TOGGLE_IS_FETCHING,
	instanceName: FetchingNamesEnum
}
