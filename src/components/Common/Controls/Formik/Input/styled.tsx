import Input from 'components/Common/Controls/Input'
import Typography from 'components/Common/Typography'
import styled, { css } from 'styled-components'

// eslint-disable-next-line prettier/prettier
export const StyledInput = styled(Input) <{ error?: boolean }>`
	${p =>
		p.error &&
		css`
			border: 1px solid red;
		`}
`

export const InputWrapper = styled.div``
