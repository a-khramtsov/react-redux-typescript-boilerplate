import Axios, { AxiosResponse } from 'axios'
import Cookies from 'js-cookie'
import { securityAPI } from './requestsRepository/security'

export const baseURL = process.env.REACT_APP_API_URL

export const instance = Axios.create({
	baseURL,
	headers: {
		'Content-Type': 'application/json',
	},
})

instance.interceptors.response.use(
	function (response) {
		return response
	},
	async function (error) {
		if (error?.response?.status === 429) {
			console.log('Очень много запросов на сервер. Пожалуйста, подождите')
			return error.response
		}

		const originalRequest = error.config

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true

			const refreshToken = Cookies.get('refresh-token') ?? ''

			const response = (await securityAPI.refreshToken(refreshToken)) as AxiosResponse
			if (response.status === 200) {
				const { access } = response.data
				Cookies.set('access-token', access)
				originalRequest.headers['Authorization'] = 'Bearer ' + access
				return Axios(originalRequest)
			}
		}

		return Promise.reject(error.response)
	},
)

export const setAxiosToken = (token: string) => {
	instance.defaults.headers.Authorization = 'Bearer ' + token
}

export { securityAPI }
