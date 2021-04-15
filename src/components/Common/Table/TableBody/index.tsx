import { LabelType, ValueType } from 'components/Common/Table/types'
import { StyledTableBody, TableCell, TableRow } from '../styled'

type PropsType = {
	labels: Array<LabelType>
	values: Array<ValueType>
}

const TableBody = ({ labels, values }: PropsType) => {
	return (
		<StyledTableBody>
			{values.map((value, index) => (
				<TableRow key={value.id || index}>
					{labels.map(label => (
						<TableCell key={label.value}>{value[label.value]}</TableCell>
					))}
				</TableRow>
			))}
		</StyledTableBody>
	)
}

export default TableBody
