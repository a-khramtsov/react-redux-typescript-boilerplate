import { useSelector } from 'react-redux'
import { RootState } from 'types/redux/redux'
import Login from 'components/Auth'
import useAuth from 'hooks/useAuth'
import MainRouter from 'router'
import { ToastContainer } from 'react-toastify'

const App = () => {
	const logged = useSelector((state: RootState) => state.me.logged)

	useAuth()

	if (!logged) {
		return <Login />
	}

	return (
		<div>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<MainRouter />
		</div>
	)
}

export default App
