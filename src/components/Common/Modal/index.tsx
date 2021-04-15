import React, { FC, useEffect, useRef } from 'react'
import { CloseIcon } from 'assets/svg'
import { MaxWidthEnum } from './types'
import { ModalWrapper, ModalContent, CloseModal, ModalBG } from 'components/Common/Modal/styled'

type PropsType = {
	open: boolean
	setOpen: (open: boolean) => void
	maxWidth?: MaxWidthEnum
	fullWidth?: boolean

	additionalClassName?: string
}

const Modal: FC<PropsType> = ({
	open,
	setOpen,
	maxWidth = MaxWidthEnum.sm,
	fullWidth = true,
	additionalClassName = '',
	...props
}) => {
	const close = () => setOpen(false)

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close()
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [])

	return (
		<ModalWrapper active={open}>
			<ModalContent
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				className={additionalClassName}
			>
				{props.children}

				<CloseModal onClick={close}>
					<CloseIcon />
				</CloseModal>
			</ModalContent>

			<ModalBG onClick={close}></ModalBG>
		</ModalWrapper>
	)
}


export default Modal
