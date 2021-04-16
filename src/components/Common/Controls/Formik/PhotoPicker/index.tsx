import { Field, FieldProps, FieldHookConfig } from 'formik'
import { Component, ComponentProps } from 'react'
import { getNestedValue } from 'utils/formik/getNestedValue'
import { StyledPhotoPicker, InputWrapper } from './styled'
import { ErrorMessage } from '../styled'
import MemoWrapper from '../MemoWrapper'
import PhotoPicker from 'components/Common/Controls/PhotoPicker'

type PhotoPickerProps = Omit<ComponentProps<typeof PhotoPicker>, 'value' | 'onChange'>

type PropsType = PhotoPickerProps & {
	label?: string
	Component?: Component | any
}

const FormikPhotoPicker = (props: PropsType & FieldHookConfig<typeof PhotoPicker>) => {
	return <Field {...props} component={FormikPhotoPickerBase} />
}

const FormikPhotoPickerBase = MemoWrapper((props: PropsType & FieldProps) => {
	const {
		field: { onChange, value, ...field },
		form: { errors, touched, setFieldValue },
		label,
		Component = StyledPhotoPicker,
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
				name={`${field.name}_${label}`}
				value={isCorrectValue ? value : false}
				onChange={(value: string) => setFieldValue(field.name, value)}
			/>
			{fieldError && fieldTouched && <ErrorMessage>{fieldError}</ErrorMessage>}
		</InputWrapper>
	)
})

export default FormikPhotoPicker
