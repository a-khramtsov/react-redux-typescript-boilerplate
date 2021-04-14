export const converToFormData = (data: Record<string | number | symbol, any>): FormData => {
	let formData = new FormData()
	for (let key in data) {
		formData.append(key, data[key])
	}

	return formData
}
