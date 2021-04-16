import { FormikErrors, FormikTouched } from 'formik'

export const getNestedValue = (values: FormikErrors<any> | FormikTouched<any>, name: string) => {
	let val: any = values

	if (/\./.test(name)) {
		for (const level of name.split('.')) {
			if (val[level]) {
				val = val[level]
			} else {
				val = null
				break
			}
		}
	} else {
		val = val[name]
	}
	return val
}
