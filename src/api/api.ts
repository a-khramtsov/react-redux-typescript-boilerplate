import Axios, { CancelToken, AxiosError } from 'axios';
import { converToFormData } from '../utils/apiFunctions';
import { showAlert } from '../utils/showAlert';
import { AlertifyStatusEnum } from '../types/types';
import { MeType } from '../types/me';

export let apiURL = ""


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
}

