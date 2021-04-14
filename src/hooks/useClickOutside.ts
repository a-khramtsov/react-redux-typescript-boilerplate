import React, { useEffect, MouseEvent } from 'react'
import { VoidFuncType } from 'types/common'

export const useClickOutside = (
	close: VoidFuncType,
	elementRef: React.MutableRefObject<HTMLDivElement | any>,
	buttonRef?: React.MutableRefObject<HTMLButtonElement | any>,
) => {
	useEffect(() => {
		const handleClickOutside = (event: React.MouseEvent | any) => {
			if (notContainsElementRef(event) && (!buttonRef || notContainsButtonRef(event))) {
				close()
				event.stopPropagation()
			}
		}

		const notContainsElementRef = (event: React.MouseEvent | any) =>
			elementRef?.current && !elementRef?.current.contains(event.target)
		const notContainsButtonRef = (event: React.MouseEvent | any) =>
			buttonRef?.current && !buttonRef.current.contains(event.target)

		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [elementRef])
}
