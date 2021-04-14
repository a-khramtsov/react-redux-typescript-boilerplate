enum StyleBase {
	inherit = 'inherit',
	initial = 'initial',
	unset = 'unset',
}

export enum AlignItemsEnum {
	start = 'flex-start',
	end = 'flex-end',
	center = 'center',
	baseline = 'baseline',
	stretch = 'stretch',
}

export enum JustifyContentEnum {
	center = 'center',
	start = 'flex-start',
	end = 'flex-end',
	baseline = 'baseline',
	spaceBetween = 'space-between',
	spaceAround = 'space-around',
}

export type FlexPropsType = {
	alignItems?: AlignItemsEnum | StyleBase
	justifyContent?: JustifyContentEnum | StyleBase
	wrap?: boolean
}
