import styled from 'styled-components'

export const DropdownList = styled.div`
	z-index: 1;
	max-height: 250px;
	overflow-y: auto;
	position: absolute;
	top: 100%;
	left: 0;
	margin-top: 4px;
	width: 100%;
	box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
	background: #fff;
	border: 1px solid #000;

	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: #1e1f2044;
	}

	&::-webkit-scrollbar-thumb:hover {
		opacity: 0.5;
	}
`

export const NoValuesMessage = styled.div`
	margin: 25px auto;
	display: flex;
	align-items: center;
	justify-content: center;
`
