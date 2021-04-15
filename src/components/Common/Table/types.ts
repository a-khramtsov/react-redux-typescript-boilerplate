export type LabelType = {
	value: string
	label: string
	noSort?: boolean
}

export type ValueType = Record<string, any>

export enum OrderEnum {
	asc = 'asc',
	desc = 'desc',
}

export type OrderType = {
	order: OrderEnum
	setOrder: (order: OrderEnum) => void
	orderBy: string
	setOrderBy: (orderBy: string) => void
}
