import { FC, useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { login } from 'redux/me/meSlice'
import { LoginInput } from './LoginInput'
import { OnChangeEvent } from 'types/common'
import { createUseStyles } from 'react-jss'
import { LoginPayloadType } from 'redux/me/types'
import { useAppDispatch } from 'redux/store'
import { unwrapResult } from '@reduxjs/toolkit'

const Login: FC = () => {
	const styles = useStyles()
	const dispatch = useAppDispatch()

	const validationSchema = yup.object({
		// login: yup.string().required('Обязательное поле'),
		// password: yup.string().min(8, 'Минимальная длина 8 символов').max(32, 'Максимальная длина 32 символа').required('Обязательное поле'),
	})

	const [err, setError] = useState('')

	const handleSubmit = async (
		dataObj: LoginPayloadType,
		setSubmitting: (val: boolean) => void,
	) => {
		setSubmitting(true)

		const response = await dispatch(login(dataObj))
		const payload = unwrapResult(response)

		setSubmitting(false)
	}

	return (
		<div className={styles.root}>
			<Formik
				validateOnChange={true}
				initialValues={{ login: '', password: '' }}
				validationSchema={validationSchema}
				enableReinitialize={true}
				onSubmit={(data, { setSubmitting }) => {
					handleSubmit(data, setSubmitting)
				}}
			>
				{({ values, setFieldValue, isSubmitting }) => (
					<Form className={styles.form}>
						<h2 className={styles.title}>Вход</h2>
						<LoginInput
							value={values.login}
							onChange={(e: OnChangeEvent) => setFieldValue('login', e.target.value)}
						/>
						<LoginInput
							value={values.password}
							onChange={(e: OnChangeEvent) =>
								setFieldValue('password', e.target.value)
							}
						/>

						<button className={styles.button} disabled={isSubmitting}>
							Войти
						</button>

						<p>{err}</p>
					</Form>
				)}
			</Formik>
		</div>
	)
}

const useStyles = createUseStyles({
	root: {
		height: '100vh',
		width: '100vw',
		position: 'relative',
	},
	form: {
		position: 'absolute',
		margin: '0 auto',
		top: 'calc(50vh - 200px)',
		left: 'calc(50vw - 200px)',
		width: '400px',
		height: '400px',
		borderRadius: '35px',
		background: '#FFFFFF',
		boxShadow: '0px 0px 38px rgba(0, 0, 0, 0.25)',
		padding: '30px',
		boxSizing: 'border-box',
	},
	title: {
		textAlign: 'center',
		fontStyle: 'normal',
		fontWeight: 900,
		fontSize: '48px',
		lineHeight: '56px',
		marginBottom: '70px',
	},
	button: {
		fontWeight: 'bold',
		fontSize: '12px',
		lineHeight: '14px',
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		color: '#ffffff',
		background: '#334e47',
		boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.12),\n\t\t\t\t0px 2px 2px rgba(0, 0, 0, 0.24)',
		borderRadius: '7px',
		padding: '10px 24px',
		margin: '25px auto',
	},
})

export default Login
