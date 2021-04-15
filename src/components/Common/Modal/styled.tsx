import { MaxWidthEnum } from 'components/Common/Modal/types'
import styled from 'styled-components'

export const ModalWrapper = styled.div<{ active: boolean }>`
	visibility: ${p => (p.active ? 'visible' : 'hidden')};
	opacity: ${p => (p.active ? '1' : '0')};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	z-index: 6;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s;
`
export const ModalBG = styled.div`
	position: absolute;
	z-index: 7;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background: rgba(0, 0, 0, 0.3);
`
export const ModalContent = styled.div<{ maxWidth: MaxWidthEnum; fullWidth: boolean }>`
  width: ${p => (p.fullWidth ? 'calc(100% - 64px)' : 'auto')};
  min-width: 300px;
  min-height: 400px;
  max-height: calc(100% - 64px);
  ${p => getMaxWidth(p.maxWidth)}
  
  z-index: 8;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 6px;


  @media screen and (max-width: 640px) {
	width: 100%;
	max-width: 100%;
	margin: 0 10px;
	padding: 20px;
},
`

export const CloseModal = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;

	& path {
		fill: rgba(0, 0, 0, 0.7);
	}
`

const getMaxWidth = (maxWidthResolution: MaxWidthEnum) => {
	let maxWidth = 0
	switch (maxWidthResolution) {
		case MaxWidthEnum.xs: {
			maxWidth = 444
			break
		}
		case MaxWidthEnum.sm: {
			maxWidth = 600
			break
		}
		case MaxWidthEnum.md: {
			maxWidth = 960
			break
		}
		case MaxWidthEnum.lg: {
			maxWidth = 1280
			break
		}
		case MaxWidthEnum.xl: {
			maxWidth = 1920
			break
		}
	}

	if (!maxWidth) return ''

	return `max-width: ${maxWidth}px;`
}
