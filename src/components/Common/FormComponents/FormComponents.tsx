import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useField, FieldAttributes } from "formik";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import s from './FormComponents.module.scss'
import { formErrors } from '../../../utils/constants';

type CustomFieldProps = {
	name: string
	label?: string
	type?: string
	placeholder?: string
	disabled?: boolean
	style?: any
	handleChange?: any

	Component?: any
	componentProps?: any
}

export const CustomField: React.FC<FieldAttributes<CustomFieldProps>> = (
	{ label, Component = Input, ...props }) => {

	const [field, meta] = useField<CustomFieldProps>(props);
	let errorText = meta.error && meta.touched ? meta.error : "";

	if (errorText.includes('NaN')) {
		errorText = formErrors.numeric
	}

	return (
		<div className={classNames(s.formInput, { [s.error]: errorText, [s.withLabel]: label },)}>
			<label className={s.fieldLabel}>{label}</label>
			<Component
			field={field}
				{...field}
				{...props}
				{...props.componentProps}
			/>

            {props.type !== 'checkbox' && <p className={classNames(s.errorText, "errorText")}>{errorText}</p>}
		</div>
	)
}


export const Input = ({ ...props }) => {
    return (
        <input className={classNames(s.styledInput)} {...props} disabled={props.disabled} />
    )
}

export const Textarea = ({ ...props }) => {
    return (
        <textarea className={classNames(s.styledInput)} {...props} />
    )
}
export const Radiobutton = ({ ...props }) => {
    return (
        <input
            className={s.styledInput}
            type="radio"
            {...props}
        />
    )
}