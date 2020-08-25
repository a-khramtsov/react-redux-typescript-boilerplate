import { apiURL } from '../api/api'

export const apiFileSrc = (fileSrc: string | null) => {
	return apiURL + fileSrc
}