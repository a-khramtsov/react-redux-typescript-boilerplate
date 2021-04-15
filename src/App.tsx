import { useSelector } from 'react-redux'
import { RootState } from 'types/redux/redux'
import Login from 'components/Auth'
import useAuth from 'hooks/useAuth'
import MainRouter from 'router'

import { ToastContainer } from 'react-toastify'
import Table from 'components/Common/Table'
import { OrderEnum } from 'components/Common/Table/types'
import React, { useState } from 'react'
import Checkbox from 'components/Common/Controls/Checkbox'
import { ChangeType } from 'types/common'
import Switch from 'components/Common/Controls/Checkbox/Switch'
import RadioButton from 'components/Common/Controls/Radiobutton'

const App = () => {
	const logged = useSelector((state: RootState) => state.me.logged)

	useAuth()

	const [order, setOrder] = useState(OrderEnum.asc)
	const [orderBy, setOrderBy] = useState('id')

	const [checked, setChecked] = useState(false)
	const [radioValue, setRadio] = useState('a')
	console.log(checked)
	if (!logged) {
		return <Login />
	}

	return (
		<div>
			<Table
				labels={[
					{ label: 'Поле 1', value: 'value1' },
					{ label: 'Поле 2', value: 'value2' },
					{ label: 'Поле 3', value: 'value3' },
					{ label: 'Поле 4', value: 'value4' },
				]}
				values={[
					{ id: 1, value1: '1', value2: '2', value3: '3', value4: '4' },
					{ id: 2, value1: '1', value2: '2', value3: '3', value4: '4' },
					{ id: 3, value1: '1', value2: '2', value3: '3', value4: '4' },
					{ id: 4, value1: '1', value2: '2', value3: '3', value4: '4' },
					{ id: 8, value1: '1', value2: '2', value3: '3', value4: '4' },
					{ id: 5, value1: '1', value2: '2', value3: '3', value4: '4' },
					{ id: 6, value1: '1', value2: '2', value3: '3', value4: '4' },
					{ id: 7, value1: '1', value2: '2', value3: '3', value4: '4' },
				]}
				orderObj={{
					order,
					setOrder,
					orderBy,
					setOrderBy,
				}}
			/>

			<label>
				<Checkbox
					value={checked}
					onChange={(event: ChangeType) => setChecked(event.target.checked)}
				/>
				<span style={{ marginLeft: 8 }}>Label Text</span>
			</label>

			<Switch
				value={checked}
				onChange={(event: ChangeType) => setChecked(event.target.checked)}
			/>

			<RadioButton
				label='radio 1'
				name='radio'
				value={'a'}
				checked={radioValue === 'a'}
				onChange={(event: ChangeType) => setRadio(event.target.value)}
			/>
			<RadioButton
				label='radio 2'
				name='radio'
				value={'b'}
				checked={radioValue === 'b'}
				onChange={(event: ChangeType) => setRadio(event.target.value)}
			/>

			<RadioButton
				label='radio 3 (disabled)'
				name='radio-disabled'
				value={'b'}
				checked={radioValue === 'b'}
				disabled
				onChange={(event: ChangeType) => setRadio(event.target.value)}
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
