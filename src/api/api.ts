import Axios, { CancelToken, AxiosError } from 'axios';
import { converToFormData } from '../utils/apiFunctions';
import { showAlert } from '../utils/showAlert';
import { AlertifyStatusEnum } from '../types/types';
import { MeType } from '../types/me';

export let apiURL = "https://api.2bara.net/"


const instance = Axios.create({
	baseURL: `${apiURL}api/`,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const setTokenForAPI = (token: string) => {
	instance.defaults.headers.Authorization = "Bearer " + token;
}

const handleErr = async (err: AxiosError) => {
	if (err?.response?.status && err?.response?.status === 429) {
		showAlert(AlertifyStatusEnum.error, 'Очень много запросов на сервер. Пожалуйста, подождите')
	}

	return err?.response
}

export type APIListParamsType = {
	page: number,
	sort: string
	search?: string
}


export const userAPI = {
	login(login: string, password: string) {
		return instance.post(`admin/auth/login`, { login, password })
			.then(response => response)
			.catch(err => handleErr(err));
	},
	getUserInfo() {
		return instance.get(`admin/profile`)
			.then(response => response)
			.catch(err => handleErr(err));
	},
	editProfile(profile: MeType) {
		let formData = converToFormData(profile)
		return instance.post(`admin/profile`, formData)
			.then(response => response)
			.catch(err => handleErr(err));
	}
}

// USERS START
export const usersAPI = {
	// getUsers(options: APIListParamsType, cancelToken?: CancelToken) {
	// 	return instance.get(`admin/users`, { cancelToken, params: { ...options } })
	// 		.then(response => response)
	// 		.catch(err => handleErr(err));
	// },
	// getUser(id: number, cancelToken?: CancelToken) {
	// 	return instance.get(`admin/users/${id}`, { cancelToken })
	// 		.then(response => response)
	// 		.catch(err => handleErr(err));
	// },
	// addUser(userObj: UserType) {
	// 	let formData = converToFormData(userObj)

	// 	return instance.post(`admin/users`, formData)
	// 		.then(response => response)
	// 		.catch(err => handleErr(err));
	// },

	// editUser(userObj: UserType) {
	// 	let formData = converToFormData(userObj)
	// 	formData.append('_method','PUT')

	// 	return instance.post(`admin/users/${userObj.id}`, formData)
	// 		.then(response => response)
	// 		.catch(err => handleErr(err));
	// },

	// deleteUser(id: number) {
	// 	return instance.delete(`admin/users/${id}`)
	// 	.then(response => response)
	// 	.catch(err => handleErr(err));
	// },
	// banUser(id: number) {
	// 	return instance.post(`admin/users/${id}/ban`)
	// 	.then(response => response)
	// 	.catch(err => handleErr(err));
	// }
}


