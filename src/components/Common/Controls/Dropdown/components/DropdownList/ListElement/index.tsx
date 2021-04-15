import { useEffect, useRef } from 'react'
import { SelectorType } from '../../../types'
import { CheckIcon } from 'assets/svg'
import { DropdownItem } from './styled'

type ItemPropsType = {
	selectedID: number | string
	selector: SelectorType
	manualSelectedID: number | string
	handleChange: (value: number | string) => void
}
const DropdownItemCompontent = ({
	selectedID,
	selector,
	manualSelectedID,
	handleChange,
}: ItemPropsType) => {
	const isActive = selectedID === selector.value

	const itemRef = useRef<HTMLButtonElement>(null)

	useEffect(() => {
		if (itemRef.current && manualSelectedID === selector.value) {
			itemRef.current.focus()
		}
	}, [manualSelectedID, selector.value])

	return (
		<DropdownItem
			key={selector.value}
			ref={itemRef}
			disabled={selector.disabled}
			active={isActive}
			hovered={selector.value === manualSelectedID}
			onClick={() => handleChange(selector.value)}
		>
			<p>{selector.label}</p>
			{isActive && <CheckIcon />}
		</DropdownItem>
	)
}

export default DropdownItemCompontent
