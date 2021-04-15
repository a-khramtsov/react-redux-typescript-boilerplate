import { PaginationType, SelectorType } from '../../types'
import Pagination from '../Pagination'
import { useEffect, useState } from 'react'
import { isDown, isUp } from 'utils/keyboard/keyDirection'
import DropdownItemCompontent from './ListElement'
import { DropdownList, NoValuesMessage } from './styled'

type PropsType = {
	selectedID: number | string
	values: Array<SelectorType>
	handleChange: (value: string | number) => void
	pagination?: PaginationType
}

const List = ({ values, selectedID, handleChange, pagination }: PropsType) => {
	const [manualSelectedID, setManualSelectedID] = useState<number | string>(selectedID)

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			handleKeyboardToggleMove(event)
			handleKeyboardSelect(event)
		}

		const handleKeyboardToggleMove = (event: KeyboardEvent) => {
			const IDs = values.map(value => value.value)

			const currentIndex = IDs.indexOf(manualSelectedID)
			let rowIndex = currentIndex

			if (isDown(event)) {
				if (currentIndex === -1) {
					rowIndex = 0
				} else if (currentIndex > -1 && currentIndex < IDs.length - 1) {
					rowIndex = currentIndex + 1
				}
			} else if (isUp(event)) {
				if (currentIndex === -1) {
					rowIndex = IDs.length - 1
				} else if (currentIndex > 0 && currentIndex < IDs.length) {
					rowIndex = currentIndex - 1
				}
			}
			if (rowIndex !== -1) {
				setManualSelectedID(IDs[rowIndex])
			}
		}

		const handleKeyboardSelect = (event: KeyboardEvent) => {
			if (event.code === 'Enter' && manualSelectedID) {
				handleChange(manualSelectedID)
				setManualSelectedID('')
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [manualSelectedID, setManualSelectedID, handleChange, values])

	if (!values.length) {
		return (
			<DropdownList>
				<NoValuesMessage>Нет данных</NoValuesMessage>
			</DropdownList>
		)
	}

	return (
		<DropdownList>
			{values.map(selector => (
				<DropdownItemCompontent
					key={selector.value}
					selectedID={selectedID}
					selector={selector}
					manualSelectedID={manualSelectedID}
					handleChange={handleChange}
				/>
			))}
			<Pagination pagination={pagination} />
		</DropdownList>
	)
}

export default List
