import React, { FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { useClickOutside } from 'hooks/useClickOutside'
import { CloseIcon } from 'assets/svg'
import { MaxWidthEnum } from './types'

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
	const styles = useStyles()

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
		<div className={classNames(styles.root, { [styles.active]: open })}>
			<div
				className={classNames(styles.content, additionalClassName, {
					[styles.fullWidth]: fullWidth,
					[styles[maxWidth]]: maxWidth,
				})}
			>
				{props.children}

				<button onClick={close} className={styles.closeModal}>
					<CloseIcon />
				</button>
			</div>
			<div className={styles.modalBg} onClick={close}></div>
		</div>
	)
}

const useStyles = createUseStyles({
	root: {
		visibility: 'hidden',
		opacity: 0,
		position: 'fixed',
		top: '0',
		left: '0',
		height: '100vh',
		width: '100vw',
		zIndex: 6,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition: '0.2s',
	},
	active: {
		visibility: 'visible',
		opacity: 1,
	},
	modalBg: {
		position: 'absolute',
		zIndex: 7,
		top: '0',
		left: '0',
		height: '100vh',
		width: '100vw',
		background: 'rgba(0, 0, 0, 0.3)',
	},
	content: {
		width: 'auto',
		minWidth: '300px',
		minHeight: '400px',
		maxHeight: 'calc(100% - 64px)',
		zIndex: 8,
		position: 'relative',
		margin: '0 auto',
		padding: '20px',
		boxShadow:
			'0px 11px 15px -7px rgba(0,0,0,0.2), 0px 24px 38px 3px rgba(0,0,0,0.14), 0px 9px 46px 8px rgba(0,0,0,0.12)',
		background: '#fff',
		borderRadius: '6px',
	},

	fullWidth: { width: 'calc(100% - 64px)' },
	xs: { maxWidth: '444px' },
	sm: { maxWidth: '600px' },
	md: { maxWidth: '960px' },
	lg: { maxWidth: '1280px' },
	xl: { maxWidth: '1920px' },

	closeModal: {
		position: 'absolute',
		right: '10px',
		top: '10px',
		'& path': {
			fill: 'rgba(0, 0, 0, 0.7)',
		},
	},
	'@media screen and (max-width: 640px)': {
		content: {
			width: '100%',
			maxWidth: '100%',
			margin: '0 10px',
			padding: 20,
		},
	},
})

export default Modal
