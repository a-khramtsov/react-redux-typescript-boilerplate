import { LabelType, OrderType, ValueType } from 'components/Common/Table/types'
import { StyledTable } from './styled'
import TableHead from './TableHead'
import TableBody from './TableBody'

type PropsType = {
	values: Array<ValueType>
	labels: Array<LabelType>
	orderObj: OrderType
}

const Table = ({ values, labels, orderObj }: PropsType) => {
	return (
		<StyledTable>
			<TableHead labels={labels} orderObj={orderObj} />
			<TableBody values={values} labels={labels} />
		</StyledTable>
	)
}

export default Table
