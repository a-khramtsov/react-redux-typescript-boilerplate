export type SelectorType = {
	value: number | string
	label: number | string
	disabled?: boolean
}
export type SearchType = {
	search: string
	setSearch: (search: string) => void
}

export type PaginationType = {
	hasMore: boolean
	getMore: VoidFunction
}
