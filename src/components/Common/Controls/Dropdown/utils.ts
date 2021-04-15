import { convretLanguageLayout } from 'utils/text/convertLanguageLayout'
import { SelectorType } from './types'

export const getValuesBySearchText = (
	values: Array<SelectorType>,
	search: string,
): Array<SelectorType> => {
	if (!search) {
		return values
	}

	let valuesCopy = [...values]

	valuesCopy = valuesCopy.filter((el: SelectorType) => {
		const elementLabel = el.label.toString().toLowerCase()
		const convertedLanuageSearch = convretLanguageLayout(search)

		if (
			elementLabel.includes(search.toLowerCase()) ||
			elementLabel.includes(convertedLanuageSearch.toLowerCase())
		) {
			return true
		}

		return false
	})

	return valuesCopy
}
