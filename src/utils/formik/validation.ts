import * as Yup from 'yup'

export const validationMessages = {
	required: 'Обязательное поле',
	numeric: 'Введите число',
	email: 'Неверный email',
	phone: 'Неверный номер телефона',
}

export const REQUIRED_STRING = Yup.string().required(validationMessages.required)

export const EMAIL = Yup.string()
	.email(validationMessages.email)
	.required(validationMessages.required)

export const REQUIRED_CHECKBOX = (name: string) =>
	Yup.boolean().test(name, validationMessages.required, value => !!value)

export const REGEXP_TEST = (name: string, regexp: RegExp, message: string) =>
	Yup.string()
		.required(validationMessages.required)
		.test(name, message, value => regexp.test(value as string))

export const ONLY_NUMBERS = Yup.number()
	.required(validationMessages.required)
	.typeError(validationMessages.numeric)

export const PHONE = Yup.string()
	.required(validationMessages.required)
	.test('mobile', validationMessages.phone, value =>
		/^((\+7|7|8)(\s|-|\()?\d{3}(\s|-|\))?([0-9\-\s]){7,10})$/.test(value as string),
	)
