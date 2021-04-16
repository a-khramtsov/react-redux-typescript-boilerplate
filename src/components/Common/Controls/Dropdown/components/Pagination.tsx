import { PaginationType } from '../types'
import styled from 'styled-components'

type PropsType = {
	pagination?: PaginationType
}

const Pagination = ({ pagination }: PropsType) => {
	if (!pagination || !pagination.hasMore) {
		return null
	}

	const handleClick = (event: React.MouseEvent) => {
		pagination.getMore()
		event.stopPropagation()
	}

	return (
		<GetMoreButton onClick={handleClick} type='button'>
			Показать еще
		</GetMoreButton>
	)
}

const GetMoreButton = styled.button`
	margin: 15px auto;
	display: block;
	padding: 5px 10px;
	border: 1px solid #000;
	border-radius: 4px;
`

export default Pagination
