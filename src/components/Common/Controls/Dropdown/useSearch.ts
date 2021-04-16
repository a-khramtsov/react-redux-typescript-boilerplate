import { useState } from 'react'
import { ChangeType } from 'types/common'
import { SearchType, SelectorType } from './types'

const useSearch = (
	values: Array<SelectorType>,
	onChange: (value: string | number) => void,
	search?: SearchType,
) => {
	const [localSearch, setLocalSearch] = useState('')

	const handleSearch = (e: ChangeType) => {
		const value = e.target.value

		if (search) {
			if (search.isLocalSearch) {
				setLocalSearch(value)
			} else {
				if (search.setSearch) {
					search.setSearch(value)
					if (!values.length && value) {
						onChange(value)
					}
				}
			}
		}
	}

	return {
		localSearch,
		setLocalSearch,
		handleSearch,
	}
}

export default useSearch
