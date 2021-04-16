import Dropdown from 'components/Common/Controls/Dropdown'
import styled, { css } from 'styled-components'

export const DropdownWrapper = styled.div``

// eslint-disable-next-line prettier/prettier
export const StyledDropdown = styled(Dropdown) <{ error: boolean }>`
	${p =>
		p.error &&
		css`
			border: 1px solid red;
		`}
`
