import React, { useEffect } from 'react'
import { ChangeType } from 'types/common'
import { SelectorType } from '../../types'
import { CloseIcon } from 'assets/svg'
import { ActiveElementWrapper, DeleteButton, SelectedValue, StyledInput } from './styled'

export const getActiveSelector = (value = '' as number | string, values: Array<SelectorType>) => {
	let activeSelector = '' as string
	if (values.length) {
		const filteredSelectors = values.filter(selector => selector.value === value)
		if (filteredSelectors.length) {
			activeSelector = filteredSelectors[0].label.toString()
		}
	}

	return activeSelector
}

type PropsType = {
	values: Array<SelectorType>
	selectedID: number | string
	placeholder?: string
	searchText: string
	handleSearch: (e: ChangeType) => void
	open: boolean
	setOpen: (open: boolean) => void
	onChange: (value: string | number) => void
}

const ActiveElement = (props: PropsType) => {
	const {
		values = [],
		selectedID,
		placeholder,
		searchText,
		handleSearch,
		open,
		setOpen,
		onChange,
	} = props

	const activeSelectorValue = getActiveSelector(selectedID, values)

	const handleValueDelete = (event: React.MouseEvent) => {
		onChange('')
		event.stopPropagation()
	}

	useEffect(() => {
		const checkKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Backspace' && activeSelectorValue && open) {
				onChange('')
			}
		}

		document.addEventListener('keydown', checkKeyDown)
		return () => document.removeEventListener('keydown', checkKeyDown)
	}, [open, activeSelectorValue, onChange])

	return (
		<ActiveElementWrapper withSearch={!activeSelectorValue} onClick={() => setOpen(true)}>
			{activeSelectorValue ? (
				<>
					<SelectedValue>{activeSelectorValue}</SelectedValue>
					<DeleteButton onClick={handleValueDelete}>
						<CloseIcon />
					</DeleteButton>
				</>
			) : (
				<StyledInput
					value={searchText}
					onChange={handleSearch}
					onFocus={() => setOpen(true)}
					placeholder={placeholder}
					autoComplete='off'
				/>
			)}
		</ActiveElementWrapper>
	)
}

export default ActiveElement
