import { Field, FieldProps, FieldHookConfig } from 'formik'
import { Component, ComponentProps } from 'react'
import { getNestedValue } from 'utils/formik/getNestedValue'
import Input from '../../Input'
import { StyledCkecbox, InputWrapper } from './styled'
import { ErrorMessage } from '../styled'
import MemoWrapper from '../MemoWrapper'
import Checkbox from 'components/Common/Controls/Checkbox'

type CheckboxProps = Omit<ComponentProps<typeof Checkbox>, 'value' | 'onChange'>

type PropsType = CheckboxProps & {
	label?: string
	Component?: Component | any
}

const FormikCheckbox = (props: PropsType & FieldHookConfig<typeof Checkbox>) => {
	return <Field {...props} component={FormikCheckboxBase} />
}

const FormikCheckboxBase = MemoWrapper((props: PropsType & FieldProps) => {
	const {
		field: { onChange, value, ...field },
		form: { errors, touched, setFieldError },
		label,
		Component = StyledCkecbox,
	} = props

	const fieldError = getNestedValue(errors, field.name)
	const fieldTouched = getNestedValue(touched, field.name)
	const isCorrectValue = value != null && value != undefined && value !== ''

	return (
		<InputWrapper>
			<Component
				{...field}
				{...props}
				error={fieldError && fieldTouched}
				id={`${field.name}_${label}`}
				value={isCorrectValue ? value : false}
				onChange={onChange}
				onFocus={() => setFieldError(field.name, '')}
			/>
			{fieldError && fieldTouched && <ErrorMessage>{fieldError}</ErrorMessage>}
		</InputWrapper>
	)
})

export default FormikCheckbox
