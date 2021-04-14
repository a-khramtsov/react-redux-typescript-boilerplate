import styled from 'styled-components'
import { AlignItemsEnum, FlexPropsType, JustifyContentEnum } from './types'

export const Flex = styled.div<FlexPropsType>`
	display: flex;
	align-items: ${p => p.alignItems || AlignItemsEnum.center};
	justify-content: ${p => p.justifyContent || JustifyContentEnum.spaceBetween};
	flex-wrap: ${p => (p.wrap ? 'wrap' : 'nowrap')};
`

export default Flex
