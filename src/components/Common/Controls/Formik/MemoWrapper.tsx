import { ReactNode, memo, ComponentType } from 'react'
import { FieldProps } from 'formik'
import { getNestedValue } from 'utils/formik/getNestedValue'

type MemoPropsType = Readonly<FieldProps<any, any> & object & { children?: ReactNode }>

const MemoWrapper = (Component: ComponentType<any>) =>
	memo(Component, (prevProps: MemoPropsType, nextProps: MemoPropsType) => {
		const containsNestedErrorPrev = getNestedValue(prevProps.form.errors, prevProps.field.name)
		const containsNestedErrorNext = getNestedValue(nextProps.form.errors, nextProps.field.name)
		return (
			prevProps.field.value === nextProps.field.value &&
			containsNestedErrorPrev === containsNestedErrorNext
		)
	})

export default MemoWrapper
