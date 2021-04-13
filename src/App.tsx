import { useSelector } from 'react-redux'
import Login from './components/Auth';
import { RootState } from './types/redux/redux';
import useAuth from './hooks/useAuth';

const App = () => {
	const logged = useSelector((state: RootState) => state.me.logged)

	useAuth()

	if (!logged) {
		return <Login />
	}


	return (
		<div>
		</div>
	)
}

export default App;
