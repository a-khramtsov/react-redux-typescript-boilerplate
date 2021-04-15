import styled from 'styled-components'
import { ChangeType } from 'types/common'

const Input = styled.input`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
`

const Label = styled.label<{ size?: SizeEnum; disabled?: boolean }>`
	position: relative;
	display: inline-block;
	font-size: ${props => {
		if (props.size === 'xs') return '6px'
		if (props.size === 'sm') return '8px'
		if (props.size === 'lg') return '12px'

		return '10px'
	}};
	width: 6em;
	height: 3.4em;

	cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

	${Input} {
		opacity: 0;
		width: 0;
		height: 0;
	}
`

const Slider = styled.span`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 3.4em;

	&::before {
		position: absolute;
		content: '';
		height: 2.6em;
		width: 2.6em;
		left: 0.4em;
		bottom: 0.4em;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	${Input}:checked + & {
		background-color: #4caf50;
	}

	${Input}:checked + &::before {
		-webkit-transform: translateX(2.6em);
		-ms-transform: translateX(2.6em);
		transform: translateX(2.6em);
	}

	${Input}:focus + & {
		box-shadow: 0 0 0.1em #2196f3;
	}

	${Input}:disabled + & {
		pointer-events: none;
		background: #e6e6e6;
	}
`

type PropsType = {
	onChange: (event: ChangeType) => void
	value?: boolean
	name?: string
	id?: string
	disabled?: boolean
	size?: SizeEnum
}

enum SizeEnum {
	xs = 'xs',
	sm = 'sm',
	lg = 'lg',
}

const Switch = ({ value, onChange, name, id, disabled, size }: PropsType) => {
	return (
		<Label htmlFor={id} disabled={disabled} size={size}>
			<Input
				id={id}
				type='checkbox'
				name={name}
				disabled={disabled}
				checked={!!value}
				onChange={onChange}
			/>
			<Slider />
		</Label>
	)
}

export default Switch
