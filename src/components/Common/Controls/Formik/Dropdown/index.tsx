import { Field, FieldProps, FieldHookConfig } from 'formik'
import { Component, ComponentProps, memo } from 'react'
import { getNestedValue } from 'utils/formik/getNestedValue'
import { DropdownWrapper, StyledDropdown } from './styled'
import { ErrorMessage } from '../styled'
import Dropdown from 'components/Common/Controls/Dropdown'

type DropdownProps = Omit<ComponentProps<typeof Dropdown>, 'value' | 'onChange'>

type PropsType = DropdownProps & {
	className?: string
	label?: string
	Component?: Component | any
}

const FormikDropdown = (props: PropsType & FieldHookConfig<typeof Dropdown>) => {
	return <Field {...props} component={MemoDropdownBase} />
}

const FormikDropdownBase = (props: PropsType & FieldProps) => {
	const {
		field: { onChange, value, ...field },
		form: { errors, touched, setFieldError, setFieldValue, setFieldTouched },
		label,
		values,
		Component = StyledDropdown,
		...restProps
	} = props

	const fieldError = getNestedValue(errors, field.name)
	const fieldTouched = getNestedValue(touched, field.name)
	const isCorrectValue = value != null && value != undefined && value !== ''

	const handleChange = (value: string | number) => {
		setFieldValue(field.name, value)
		setFieldTouched(field.name, true)
	}

	return (
		<DropdownWrapper>
			<StyledDropdown
				{...field}
				{...restProps}
				error={fieldError && fieldTouched}
				value={isCorrectValue ? value : ''}
				values={values}
				onChange={handleChange}
			/>
			{fieldError && fieldTouched && <ErrorMessage>{fieldError}</ErrorMessage>}
		</DropdownWrapper>
	)
}

const MemoDropdownBase = memo(FormikDropdownBase, (prevProps, nextProps) => {
	const containsNestedErrorPrev = getNestedValue(prevProps.form.errors, prevProps.field.name)
	const containsNestedErrorNext = getNestedValue(nextProps.form.errors, nextProps.field.name)
	return (
		prevProps.field.value === nextProps.field.value &&
		prevProps.values === nextProps.values &&
		containsNestedErrorPrev === containsNestedErrorNext
	)
})

export default FormikDropdown
