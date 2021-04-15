import styled, { css } from 'styled-components'
import { OrderEnum } from './types'

export const StyledTable = styled.table`
	width: 100%;
`
export const StyledTableBody = styled.tbody`
	display: block;
	height: 200px;
	overflow: auto;
`
export const StyledTableHead = styled.thead`
	display: table;
	width: 100%;
	table-layout: fixed;
`
export const TableRow = styled.tr`
	display: table;
	width: 100%;
	table-layout: fixed;
`

export const TableCell = styled.td`
	font-style: normal;
	font-weight: normal;
	font-size: 13px;
	line-height: 16px;
	padding: 12px;
	vertical-align: middle;
	text-align: center;
	border-bottom: 1px solid #000;
`
// eslint-disable-next-line prettier/prettier
export const TableHeadCell = styled(TableCell) <{ active?: boolean, direction?: OrderEnum, sortable?: boolean }>`
	font-weight: 700;
	opacity: ${p => (p.active ? 1 : 0.8)};

	${p =>
		p.sortable &&
		css`
			cursor: pointer;
			&:hover ${ArrowButton} {
				opacity: 0.5;
			}
		`}

	${p =>
		p.active &&
		css`
			& ${ArrowButton} {
				opacity: 1;
			}
		`}

	${p =>
		p.direction === OrderEnum.asc &&
		p.active &&
		css`
			& ${ArrowButton} {
				transform: rotate(180deg);
			}
		`}
`
export const ArrowButton = styled.button`
	position: relative;
	left: -10px;
	margin-left: -24px;
	opacity: 0;
	transition: 0.2s;
`
