import Axios from 'axios';
import qs from 'query-string'

export let apiURL = ""


const instance = Axios.create({
	baseURL: ``,
	headers: {
		'Content-Type': 'application/json'
	}
});

export const setTokenForAPI = (token: string) => {
	instance.defaults.headers.Authorization = "Bearer " + token;
}

export const userAPI = {
	login(emaiL: string, password: string) {
		// return instance.post(url, qs.stringify(obj))
		// 	.then((response) => {
		// 		return response.data
		// 	})
		// 	.catch((err) => { return err })
	},
	register(username: string, email: string, password: string) {
		// return instance.post(`register`, { username, email, password })
		// 	.then((response) => {
		// 		return response.data
		// 	})
		// 	.catch((err) => { return err })
	},
	getUserInfo() {
		return instance.get(`/users/profile`)
			.then((response) => {
				return response.data
			})
			.catch((err) => err);
	}
}
