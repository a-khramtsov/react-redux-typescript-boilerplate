import Input from 'components/Common/Controls/Input'
import styled from 'styled-components'

export const ActiveElementWrapper = styled.div<{ withSearch: boolean }>`
	width: 100%;
	display: flex;
	height: 40px;

	padding: ${p => (p.withSearch ? 0 : '13px 12px')};

	font-style: normal;
	font-weight: normal;
	font-size: 15px;
	border: none !important;
`

export const StyledInput = styled(Input)`
	width: 100%;
	height: 100%;
	border: none;
	box-sizing: border-box;
`
export const SelectedValue = styled.p`
	width: 100%;
`
export const DeleteButton = styled.button`
	position: absolute;
	right: 8px;
	top: 6px;
`
