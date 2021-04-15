import React from 'react'
import { TypographyVariantEnum } from 'components/Common/Typography/types'
import styled from 'styled-components'

type PropsType = {
	variant?: TypographyVariantEnum
	color?: string
	bold?: boolean
	fontSize?: number
	lineHeight?: number
	fontFamily?: string
	margin?: number | string
	padding?: number | string
	children: React.ReactNode | React.ReactNode[]
}

const Typography = styled(({ variant = TypographyVariantEnum.p, children, ...props }: PropsType) =>
	React.createElement(variant, props, children),
)`
    font-size: ${p => p.fontSize || '14px'};
    line-height: ${p => p.lineHeight || '130%'};
    font-weight: ${p => (p.bold ? 'bold' : 'normal')};
    font-family: ${p => p.fontFamily || ''}
    color: ${p => p.color || ''};
    padding: ${p => p.padding || 0};
    margin: ${p => p.margin || 0};
`

export default Typography
