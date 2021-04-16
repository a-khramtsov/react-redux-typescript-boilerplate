import { useSelector } from 'react-redux'
import { RootState } from 'types/redux/redux'
import Login from 'components/Auth'
import useAuth from 'hooks/useAuth'
import MainRouter from 'router'

import { ToastContainer } from 'react-toastify'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import FormikInput from 'components/Common/Controls/Formik/Input'
import * as yup from 'yup'
import FormikDropdown from 'components/Common/Controls/Formik/Dropdown'
import Switch from 'components/Common/Controls/Checkbox/Switch'
import FormikCheckbox from 'components/Common/Controls/Formik/Checkbox'
import { REQUIRED_CHECKBOX, REQUIRED_STRING } from 'utils/formik/validation'
import FormikRadiobuttons from 'components/Common/Controls/Formik/Radiobuttons'
import PhotoPicker from 'components/Common/Controls/PhotoPicker'
import FormikPhotoPicker from 'components/Common/Controls/Formik/PhotoPicker'

const App = () => {
	const logged = useSelector((state: RootState) => state.me.logged)

	useAuth()

	const [dropdownValues, setDropdownValues] = useState([
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
		const start = dropdownValues.length + 1
		const newValues = []

		for (let i = start; i < start + 10; i++) {
			newValues.push({ label: `Значение ${i}`, value: `value${i}` })
		}
		setDropdownValues([...dropdownValues, ...newValues])
	}

	const inital = {
		email: '',
		password: '',
		active: false,
		value: '',
		radio: 'value2',
		text: '',
		file:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg/1200px-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg.png',
	}

	const handleSubmit = (data: typeof inital) => {
		console.log(data)
	}

	const validationSchema = yup.object({
		email: yup.string().required('Обязательное поле'),
		password: yup
			.string()
			.min(8, 'Минимальная длина 8 символов')
			.max(32, 'Максимальная длина 32 символа')
			.required('Обязательное поле'),
		active: REQUIRED_CHECKBOX('active'),
		value: REQUIRED_STRING,
	})

	const [file, setFile] = useState(
		'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg/1200px-%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.svg.png',
	)

	if (!logged) {
		return <Login />
	}

	return (
		<div>
			<Formik
				validateOnChange={true}
				enableReinitialize={true}
				initialValues={inital}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ values, errors }) => (
					<Form>
						<FormikInput name='email' />
						<FormikInput name='password' type='password' />
						<FormikInput name='text' Component={'textarea'} />

						<label>
							<FormikCheckbox name='active' />
						</label>

						<label>
							<FormikCheckbox name='active' Component={Switch} />
						</label>

						<FormikPhotoPicker name='file' />

						<FormikDropdown
							name='value'
							values={dropdownValues}
							pagination={{
								hasMore: dropdownValues.length < 50,
								getMore: () => addValues(),
							}}
							search={{
								isLocalSearch: true,
								placeholder: 'Поиск...',
							}}
							placeholder='Выберите...'
						/>

						<FormikRadiobuttons
							name='radio'
							values={[
								{ value: 'value1', label: 'VALUE 1' },
								{ value: 'value2', label: 'VALUE 2' },
								{ value: 'value3', label: 'VALUE 3' },
								{ value: 'value4', label: 'VALUE 4' },
								{ value: 'value5', label: 'VALUE 5' },
								{ value: 'value6', label: 'VALUE 6' },
							]}
						/>

						<button>SUBMIT</button>

						{JSON.stringify(values)}
						{JSON.stringify(errors)}
					</Form>
				)}
			</Formik>

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
