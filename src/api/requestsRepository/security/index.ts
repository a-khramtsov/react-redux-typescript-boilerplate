import { instance } from '../../index'
import { MeType } from "../../../types/me";
import { AxiosResponse } from 'axios'
import { LoginResponseType } from './types';

export const securityAPI = {
	login: (email: string, password: string): Promise<AxiosResponse<LoginResponseType>> => {
		return instance.post(`/security/signIn`, { email, password })
	},
	getUserInfo: (): Promise<AxiosResponse<MeType>> => {
		return instance.get(`/profile`)
	},
	updateUserInfo(data: MeType, id: number) {
		return instance.put(`/}`, data)
	},
	refreshToken(refresh: string) {
		return instance.post(``, { refresh })
	},
}