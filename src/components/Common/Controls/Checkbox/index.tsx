import styled from 'styled-components'
import { ChangeType } from 'types/common'

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`

const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`

// eslint-disable-next-line prettier/prettier
const StyledCheckbox = styled.div.attrs({ className: 'checkbox-body' }) <{ checked?: boolean }>`
	cursor: pointer;
	display: inline-block;
	width: 20px;
	height: 20px;
	background: ${props => (props.checked ? 'salmon' : 'papayawhip')};
	border-radius: 2px;
	transition: all 150ms;

	${Icon} {
		visibility: ${props => (props.checked ? 'visible' : 'hidden')};
	}
`

type PropsType = {
	className?: string
	value?: boolean
	onChange: (event: ChangeType) => void
}

const Checkbox = ({ className, value, ...props }: PropsType) => (
	<CheckboxContainer className={className}>
		<HiddenCheckbox {...props} checked={value} />
		<StyledCheckbox checked={value}>
			<Icon viewBox='0 0 24 24'>
				<polyline points='20 6 9 17 4 12' />
			</Icon>
		</StyledCheckbox>
	</CheckboxContainer>
)

export default Checkbox
