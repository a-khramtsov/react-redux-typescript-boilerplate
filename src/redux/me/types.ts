import { ThunkAction } from 'redux-thunk';
import { AppStateType } from '../../types/types';
import { MeType } from '../../types/me';

import { actionTypes } from './actions'


export type ActionsTypes = SetLoggedType  | SetUserInfo | SetTokenType;
export type ThunksType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>



export type SetLoggedType = {
	type: typeof actionTypes.SET_LOGGED,
	logged: boolean
}
export type SetTokenType = {
	type: typeof actionTypes.SET_TOKEN,
	token: string
}
export type SetUserInfo = {
	type: typeof actionTypes.SET_USER_INFO,
	userInfo: MeType
}
