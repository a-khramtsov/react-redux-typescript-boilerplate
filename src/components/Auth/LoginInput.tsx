import React from 'react'
import { createUseStyles } from 'react-jss'

type PropsType = {}

export const LoginInput = (props: PropsType & React.InputHTMLAttributes<HTMLInputElement>) => {
	const styles = useStyles()

	return <input {...props} className={styles.root} />
}

const useStyles = createUseStyles({
	root: {},
})
