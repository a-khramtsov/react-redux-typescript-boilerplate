import React, { useCallback, useEffect } from 'react'
import { ChangeType } from 'types/common'
import { SearchType, SelectorType } from '../../types'
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
	search?: SearchType
	searchText: string
	setLocalSearch: (search: string) => void
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
		search,
		searchText,
		handleSearch,
		setLocalSearch,
		open,
		setOpen,
		onChange,
	} = props

	const activeSelectorValue = getActiveSelector(selectedID, values)

	const handleValueDelete = (event: React.MouseEvent) => {
		onChange('')
		setLocalSearch('')
		if (search && search.setSearch) {
			search?.setSearch('')
		}
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

	const getComponent = () => {
		let component = null

		if (activeSelectorValue) {
			component = (
				<>
					<SelectedValue>{activeSelectorValue}</SelectedValue>
					<DeleteButton onClick={handleValueDelete}>
						<CloseIcon />
					</DeleteButton>
				</>
			)
		} else if (search) {
			component = (
				<StyledInput
					value={searchText}
					onChange={handleSearch}
					onFocus={() => setOpen(true)}
					placeholder={search.placeholder}
					autoComplete='off'
				/>
			)
		} else {
			component = <SelectedValue withPlaceholder={true}>{placeholder}</SelectedValue>
		}
		return component
	}

	return (
		<ActiveElementWrapper
			withSearch={!activeSelectorValue && !!search}
			onClick={() => setOpen(true)}
		>
			{getComponent()}
		</ActiveElementWrapper>
	)
}

export default ActiveElement
