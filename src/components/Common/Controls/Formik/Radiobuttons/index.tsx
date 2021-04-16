import { Field, FieldProps, FieldHookConfig } from 'formik'
import { Component, ComponentProps } from 'react'
import { getNestedValue } from 'utils/formik/getNestedValue'
import { StyledRadiobuttons } from './styled'
import { ErrorMessage } from '../styled'
import MemoWrapper from '../MemoWrapper'
import { Radiobuttons } from 'components/Common/Controls/Radiobutton'

type RadiobuttonsProps = Omit<ComponentProps<typeof Radiobuttons>, 'value' | 'onChange'>

type PropsType = RadiobuttonsProps & {
	label?: string
	Component?: Component | any
}

const FormikRadiobuttons = (props: PropsType & FieldHookConfig<typeof Radiobuttons>) => {
	return <Field {...props} component={FormikRadiobuttonsBase} />
}

const FormikRadiobuttonsBase = MemoWrapper((props: PropsType & FieldProps) => {
	const {
		field: { onChange, value, ...field },
		form: { errors, touched, setFieldError },
		label,
		values,
		Component = StyledRadiobuttons,
		...restProps
	} = props

	const fieldError = getNestedValue(errors, field.name)
	const fieldTouched = getNestedValue(touched, field.name)
	const isCorrectValue = value != null && value != undefined && value !== ''

	return (
		<div>
			<Component
				{...field}
				{...restProps}
				error={fieldError && fieldTouched}
				id={`${field.name}_${label || ''}`}
				value={isCorrectValue ? value : false}
				onChange={onChange}
				onFocus={() => setFieldError(field.name, '')}
				values={values}
			/>
			{fieldError && fieldTouched && <ErrorMessage>{fieldError}</ErrorMessage>}
		</div>
	)
})

export default FormikRadiobuttons
