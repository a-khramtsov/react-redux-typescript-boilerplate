import React, { useState, useEffect } from 'react'
import s from './FormComponents.module.scss'
import { useField, FieldAttributes, Field } from "formik";
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

import { File } from './Components/File'
import { Dropdown } from './Components/DropDown'
import { FormattedTextarea } from './Components/FormattedTextarea'


type CustomFieldProps = {
	name: string
	Component?: React.Component | any,
	label?: string
	canSeeInputValue?: boolean
	type?: string
	placeholder?: string
	style?: any
	required?: boolean
	disabled?: boolean
	values?: Array<{
		value: number | string
		label: number | string
		active?: boolean
	}>
	handleChange?: any
	multiSelect?: boolean
	setFieldValue?: (field: string, value: any, shouldValidate?: boolean | undefined) => void
}

export const CustomField: React.FC<FieldAttributes<CustomFieldProps>> = (
	{ label, canSeeInputValue, placeholder = "", Component = Input, required = false,
		values, handleChange = () => { }, ...props }) => {

	const [field, meta] = useField<CustomFieldProps>(props);
	let errorText = meta.error && meta.touched ? meta.error : "" as any;

	if (errorText) {
		errorText = errorText[0].toUpperCase() + errorText.slice(1)
	}

	let type = props.type;
	const togglePasswordVisibilty = () => {
		setPasswordVisibilty(!passwordVisibilty)
	}
	let showPasswordButton = canSeeInputValue ? <button type="button" onClick={togglePasswordVisibilty}></button> : ''
	const [passwordVisibilty, setPasswordVisibilty] = useState(false)
	if (canSeeInputValue) {
		type = passwordVisibilty ? "text" : "password"

		showPasswordButton =
			<FontAwesomeIcon
				icon={passwordVisibilty ? faEyeSlash : faEye}
				className={s.passwordIcon}
				onClick={togglePasswordVisibilty}
			/>
	}


	return (
		<div className={classNames(s.formInput, {
			[s.required]: required,
			[s.withIcon]: showPasswordButton
		})}

			style={{ ...props.style }}>
			<label className={s.fieldLabel}> {label}</label>
			<Component
				type={type}
				field={field}
				values={values}
				handleChange={handleChange}
				placeholder={placeholder}
				{...field}
				{...props}
			/>

			<div className={s.fieldIcon}>
				{showPasswordButton}
			</div>
			{type !== 'checkbox' && <p className={classNames(s.errorText, "errorText")}>{errorText}</p>}
		</div>
	)
}

export const Input = ({ ...props }) => {
	const onChange = (e: any) => {
		props.onChange(e)
		props.handleChange(e.target.value)
	}

	return (
		<>
			<input className={classNames(s.styledInput)} {...props} onChange={onChange} />
		</>
	)
}

export const Textarea = ({ ...props }) => {
	return (
		<textarea className={classNames(s.styledInput)} {...props} />
	)
}




export const Checkbox = ({ ...props }) => {
	return (
		<input {...props} type="checkbox"/>
	)
}


export { FormattedTextarea, File, Dropdown }