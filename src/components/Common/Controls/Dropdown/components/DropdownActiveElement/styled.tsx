import Input from 'components/Common/Controls/Input'
import styled from 'styled-components'

// eslint-disable-next-line prettier/prettier
export const ActiveElementWrapper = styled.div.attrs({ classname: 'dropdown-active-wrapper' }) <{
	withSearch: boolean
}>`
	width: 100%;
	display: flex;
	align-items: center;
	height: 40px;

	padding: ${p => (p.withSearch ? 0 : '12px 13px')};

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
	padding: 12px 13px;
`
export const SelectedValue = styled.p<{ withPlaceholder?: boolean }>`
	width: 100%;
	opacity: ${p => (p.withPlaceholder ? 0.8 : 1)};
`
export const DeleteButton = styled.button`
	position: absolute;
	right: 8px;
	top: 6px;
`
