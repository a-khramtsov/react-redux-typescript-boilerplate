import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { MeType } from '../../types/me'
import { LoginPayloadType } from './types'
import { securityAPI, setAxiosToken } from '../../api'
import Cookies from 'js-cookie'

import { setLoginCompleted } from '../app/appSlice'
import { LoginResponseType } from 'api/requestsRepository/security/types'

const initialState = {
	logged: false,
	userInfo: {} as MeType,
}

export const login = createAsyncThunk<LoginResponseType, LoginPayloadType>(
	'me/login',
	async (payload, { dispatch, rejectWithValue }) => {
		const { login, password } = payload

		try {
			const response = await securityAPI.login(login, password)
			if (response?.status === 200) {
				Cookies.set('access-token', response.data.accessToken)
				Cookies.set('refresh-token', response.data.refreshToken)
				dispatch(authUser())
			}

			return response.data
		} catch (error) {
			return rejectWithValue(error)
		}
	},
)

export const getUserInfo = createAsyncThunk(
	'me/getUserInfo',
	async (payload, { dispatch, rejectWithValue }) => {
		try {
			const response = await securityAPI.getUserInfo()

			if (response?.status === 200) {
				dispatch(setUserInfo(response.data))
				dispatch(setLogged(true))
			}
			dispatch(setLoginCompleted(true))

			return response.data as MeType
		} catch (err) {
			return rejectWithValue(err.response.data)
		}
	},
)

export const authUser = createAsyncThunk(
	'me/auth',
	async (payload, { dispatch, rejectWithValue }) => {
		const accessToken = Cookies.get('access-token') ?? ''
		const refreshToken = Cookies.get('refresh-token') ?? ''

		if (accessToken) {
			setAxiosToken(accessToken)
			dispatch(getUserInfo())
		} else if (refreshToken) {
			//
		}
	},
)

export const meSlice = createSlice({
	name: 'me',
	initialState,
	reducers: {
		setLogged: (state, action: PayloadAction<boolean>) => {
			state.logged = action.payload
		},
		setUserInfo: (state, action: PayloadAction<MeType>) => {
			state.userInfo = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(getUserInfo.fulfilled, (state, action) => {
			state.userInfo = action.payload
		})
	},
})

export const { setUserInfo, setLogged } = meSlice.actions

export default meSlice.reducer
