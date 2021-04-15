import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ChangeType } from 'types/common'

const Input = styled.input`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
`

const popIn = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(1.5) ;
}
to {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1) ;
}
`

const Label = styled.label<{ disabled?: boolean }>`
	position: relative;
	display: inline-block;
	cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
	margin: 0.6em 1em;
	font-size: 24px;
`

const Indicator = styled.div`
	border: 1px solid;
	border-radius: 1em;
	width: 1.2em;
	height: 1.2em;
	position: absolute;
	top: 0;
	left: -1.5em;

	${Label}:hover & {
		background: #ccc;
	}

	&::after {
		content: '';
		position: absolute;
		display: none;
	}

	${Input}:checked + &::after {
		display: block;
		border: solid #263238;
		border-radius: 1em;
		background-color: #263238;
		width: 0.5em;
		height: 0.5em;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation-name: ${popIn};
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}

	${Input}:disabled + & {
		pointer-events: none;
		opacity: 0.6;
		background: #e6e6e6;
	}
`

type RadiobuttonPropsType = {
	checked: boolean
	onChange: (event: ChangeType) => void
	value?: string | number
	name?: string
	id?: string
	disabled?: boolean
	label?: string
}

const RadioButton = ({
	value,
	onChange,
	name,
	id,
	label,
	disabled,
	checked,
}: RadiobuttonPropsType) => {
	return (
		<Label htmlFor={id} disabled={disabled}>
			{label}
			<Input
				id={id}
				type='radio'
				role='radio'
				name={name}
				value={value}
				disabled={disabled}
				onChange={onChange}
				checked={checked}
			/>
			<Indicator />
		</Label>
	)
}

type PropsType = {
	name: string
	value: string | number
	onChange: (val: string | number) => void

	radiobuttons: Array<{
		id?: string
		value?: string | number
		disabled?: boolean
		label?: string
	}>
}

export const Radiobuttons = ({ radiobuttons, onChange, value, name }: PropsType) => {
	return (
		<div>
			{radiobuttons.map(radiobutton => (
				<RadioButton
					key={radiobutton.value}
					name={name}
					id={radiobutton.id}
					disabled={radiobutton.disabled}
					label={radiobutton.label}
					checked={value === radiobutton.value}
					onChange={(event: ChangeType) => onChange(event.target.value)}
				/>
			))}
		</div>
	)
}

export default RadioButton
