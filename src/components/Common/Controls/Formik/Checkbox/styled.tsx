import Checkbox from 'components/Common/Controls/Checkbox'
import Input from 'components/Common/Controls/Input'
import Typography from 'components/Common/Typography'
import styled, { css } from 'styled-components'

// eslint-disable-next-line prettier/prettier
export const StyledCkecbox = styled(Checkbox) <{ error?: boolean }>`
	${p =>
		p.error &&
		css`
			& .checkbox-body {
				border: 1px solid green;
			}
		`}
`

export const InputWrapper = styled.div``
