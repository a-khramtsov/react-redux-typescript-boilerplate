import styled, { css } from 'styled-components'

export const DropdownItem = styled.button<{
	active: boolean
	disabled?: boolean
	hovered?: boolean
}>`
	cursor: pointer;
	font-size: 13px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 100%;
	padding: 12px 14px 13px 14px;
	box-sizing: border-box;
	z-index: 5;
	background: #fff;
	border-bottom: 1px solid #000;

	${p =>
		(p.active || p.hovered) &&
		css`
			background: rgb(231, 231, 231);
		`}

	${p =>
		p.disabled &&
		css`
			background: rgb(214, 214, 214);
			pointer-events: none;

			& svg {
				display: none;
			}
		`}

	&:last-child {
		border-bottom: none;
	}
`
