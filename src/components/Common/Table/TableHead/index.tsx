import Typography from 'components/Common/Typography'
import { StyledTableHead, TableHeadCell, TableRow, ArrowButton } from '../styled'
import { OrderType, LabelType, OrderEnum } from '../types'
import { ArrowIcon } from 'assets/svg'
import styled from 'styled-components'
import Flex from 'components/Common/Flex'
import { AlignItemsEnum, JustifyContentEnum } from 'components/Common/Flex/types'

type PropsType = {
	labels: Array<LabelType>
	orderObj: OrderType
}

const TableHead = ({ labels, orderObj }: PropsType) => {
	const handleLabelClick = (label: LabelType) => {
		if (!label.noSort) {
			handleSortChange(label.value)
		}
	}

	const handleSortChange = (field: string) => {
		const isAsc = orderObj.orderBy === field && orderObj.order === OrderEnum.asc
		orderObj.setOrder(isAsc ? OrderEnum.desc : OrderEnum.asc)
		orderObj.setOrderBy(field)
	}

	return (
		<StyledTableHead>
			<TableRow>
				{labels.map(label => (
					<TableHeadCell
						key={label.value}
						sortable={!label.noSort}
						active={orderObj.orderBy === label.value}
						direction={orderObj.order}
						onClick={() => handleLabelClick(label)}
					>
						<Flex justifyContent={JustifyContentEnum.center}>
							<ArrowButton>
								<ArrowIcon />
							</ArrowButton>

							<Typography>{label.label}</Typography>
						</Flex>
					</TableHeadCell>
				))}
			</TableRow>
		</StyledTableHead>
	)
}

export default TableHead
