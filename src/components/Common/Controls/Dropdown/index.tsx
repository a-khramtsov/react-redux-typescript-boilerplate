import React, { useState, useRef } from 'react'
import { PaginationType, SearchType, SelectorType } from './types'
import { useClickOutside } from 'hooks/useClickOutside'
import useSearch from './useSearch'
import { getValuesBySearchText } from './utils'
import List from './components/DropdownList'
import styled from 'styled-components'
import DropdownActiveElement from './components/DropdownActiveElement'

type PropsType = {
	values: Array<SelectorType>
	selectedID: number | string
	onChange: (value: string | number) => void
	placeholder?: string
	pagination?: PaginationType
	search?: SearchType
}

const Dropdown = (props: PropsType) => {
	const { values = [], selectedID, placeholder, onChange, pagination, search } = props

	const { localSearch, setLocalSearch, handleSearch } = useSearch(values, onChange, search)

	const [open, setOpen] = useState(false)

	const handleChange = (value: string | number) => {
		onChange(value)
		setOpen(false)
		if (!search) {
			setLocalSearch('')
		}
	}

	const dropdownRef = useRef<HTMLDivElement>(null)
	useClickOutside(() => setOpen(false), dropdownRef)

	const filteredValues = getValuesBySearchText(values, localSearch)

	return (
		<DropdownWrapper ref={dropdownRef}>
			<DropdownActiveElement
				values={values}
				selectedID={selectedID}
				placeholder={placeholder}
				searchText={search?.search || localSearch}
				handleSearch={handleSearch}
				open={open}
				setOpen={setOpen}
				onChange={onChange}
			/>

			{open && (
				<List
					selectedID={selectedID}
					handleChange={handleChange}
					values={filteredValues}
					pagination={pagination}
				/>
			)}
		</DropdownWrapper>
	)
}

const DropdownWrapper = styled.div`
	position: relative;
	width: 100%;
	max-width: 300px;
	border: 1px solid #000;
`

export default Dropdown
