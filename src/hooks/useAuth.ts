import { useEffect } from 'react'
import { authUser } from '../redux/me/meSlice'
import { useDispatch } from 'react-redux'

const useAuth = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(authUser())
	}, [dispatch])
}

export default useAuth
