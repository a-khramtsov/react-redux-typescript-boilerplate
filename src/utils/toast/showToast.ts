import { toast } from 'react-toastify'

export enum ToastStatusEnum {
	success = 'success',
	warn = 'warn',
	error = 'error',
}

export const showToast = (status: ToastStatusEnum, text: string) => {
	toast[status](text, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})
}
