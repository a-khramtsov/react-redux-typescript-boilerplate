import { Field, FieldProps, FieldHookConfig } from 'formik'
import { Component, ComponentProps } from 'react'
import { getNestedValue } from 'utils/formik/getNestedValue'
import Input from '../../Input'
import { StyledInput, InputWrapper } from './styled'
import { ErrorMessage } from '../styled'
import MemoWrapper from '../MemoWrapper'

type PropsType = ComponentProps<typeof Input> & {
	label?: string
	Component?: Component | any
}

const FormikInput = (props: PropsType & FieldHookConfig<typeof Input>) => {
	return <Field {...props} component={FormikInputBase} />
}

const FormikInputBase = MemoWrapper((props: PropsType & FieldProps) => {
	const {
		field: { onChange, value, ...field },
		form: { errors, touched, setFieldError },
		label,
		Component = StyledInput,
	} = props

	const fieldError = getNestedValue(errors, field.name)
	const fieldTouched = getNestedValue(touched, field.name)
	const isCorrectValue = value != null && value != undefined && value !== ''

	return (
		<InputWrapper>
			<Component
				error={fieldError && fieldTouched}
				id={`${field.name}_${label}`}
				value={isCorrectValue ? value : ''}
				onChange={onChange}
				onFocus={() => setFieldError(field.name, '')}
				{...field}
				{...props}
			/>
			{fieldError && fieldTouched && <ErrorMessage>{fieldError}</ErrorMessage>}
		</InputWrapper>
	)
})

export default FormikInput
