import { useSelector } from 'react-redux'
import { RootState } from 'types/redux/redux'
import Login from 'components/Auth'
import useAuth from 'hooks/useAuth'
import MainRouter from 'router'

import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import Dropdown from 'components/Common/Controls/Dropdown'

const App = () => {
	const logged = useSelector((state: RootState) => state.me.logged)

	useAuth()

	const [dropdownValue, setDropdownValue] = useState<string | number>('value1')

	const [values, setValues] = useState([
		{ label: 'Значение 1', value: 'value1' },
		{ label: 'Значение 2', value: 'value2' },
		{ label: 'Значение 3', value: 'value3' },
		{ label: 'Значение 4', value: 'value4' },
		{ label: 'Значение 5', value: 'value5' },
		{ label: 'Значение 6', value: 'value6' },
		{ label: 'Значение 7', value: 'value7' },
		{ label: 'Значение 8', value: 'value8' },
		{ label: 'Значение 9', value: 'value9' },
		{ label: 'Значение 10', value: 'value10' },
	])

	const addValues = () => {
		const start = values.length + 1
		const newValues = []

		for (let i = start; i < start + 10; i++) {
			newValues.push({ label: `Значение ${i}`, value: `value${i}` })
		}
		setValues([...values, ...newValues])
	}

	if (!logged) {
		return <Login />
	}

	return (
		<div>
			<Dropdown
				values={values}
				selectedID={dropdownValue}
				onChange={setDropdownValue}
				pagination={{ hasMore: values.length < 50, getMore: () => addValues() }}
				placeholder='Введите название'
			/>

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
