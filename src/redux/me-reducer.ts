import { AppStateType } from '../types/types'
import Cookies from "js-cookie";
import { ThunkAction } from 'redux-thunk'
import { userAPI, setTokenForAPI } from '../api/api';
import { UserType } from '../types/me';
import { showAlert } from '../utils/showAlert'

const SET_LOGGED = 'me/SET_LOGGED'
const SET_TOKEN = 'me/SET_TOKEN'
const SET_USER_INFO = 'me/SET_USER_INFO'
const TOGGLE_IS_FETCHING = 'me/TOGGLE_IS_FETCHING'

let initialState = {
	logged: false,
	token: "",
	userInfo: {} as UserType,	
}

type InitialStateType = typeof initialState;
type ActionsTypes = SetLoggedType | SetTokenType | SetUserInfo;

type ThunksType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

const meReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
	switch (action.type) {
		case SET_LOGGED: {
			return {
				...state,
				logged: action.logged
			}
		}
		case SET_TOKEN: {
			return {
				...state,
				token: action.token
			}
		}
		case SET_USER_INFO: {
			return {
				...state,
				userInfo: {...action.userInfo}
			}
		}
		
		default:
			return state;
	}
}

type ToggleIsFetchingType = {
	type: typeof TOGGLE_IS_FETCHING
	isFetching: boolean
}

type SetLoggedType = {
	type: typeof SET_LOGGED,
	logged: boolean
}
type SetTokenType = {
	type: typeof SET_TOKEN,
	token: string
}
type SetUserInfo = {
	type: typeof SET_USER_INFO,
	userInfo: any
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}

export const setLogged = (logged: boolean): SetLoggedType => {
	return {
		type: SET_LOGGED,
		logged
	}
}

export const login = (login: string, password: string, sendVerify = false): ThunksType => async (dispatch, getState) => {
	let response = await userAPI.login(login, password)

	// if (response) {
	// 	if (!response.message) {
	// 		Cookies.set('access-token', response.access_token, { expires: 10 / 24 });
			
	// 		await dispatch(authUser())
	// 	} else {
	// 		dispatch(stopSubmit("login", { _error: 'Неверный логин или пароль' }))
	// 	}
	// } 
}

export const authUser = (): ThunksType => async (dispatch) => {
	let token = Cookies.get('access-token');
	
	if (token) {
		dispatch(setAccessToken(token))
		dispatch(setLogged(true))

		dispatch(getUserInfo())
	}
}





export const logout = (): ThunksType => async (dispatch) => {
	dispatch(setLogged(false))
	dispatch(setAccessToken(""))
	dispatch(setUserInfo({ id: 0 }))
	Cookies.remove('access-token')
}

export const getUserInfo = (): ThunksType => async (dispatch) => {
	let response = await userAPI.getUserInfo()
	if (!response.message) {
		dispatch(setUserInfo(response))
	} else {
		dispatch(logout())
	}
}
export const setUserInfo = (userInfo: any): SetUserInfo => {
	return {
		type: SET_USER_INFO,
		userInfo
	}
}

export const setAccessToken = (token: string): ThunksType => async (dispatch) => {
	dispatch(setTokenSuccess(token))
	setTokenForAPI(token)
}

const setTokenSuccess = (token: string): SetTokenType => {
	return {
		type: SET_TOKEN,
		token
	}
}
export default meReducer;