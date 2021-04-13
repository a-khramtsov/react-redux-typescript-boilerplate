import React from 'react'
import s from './Login.module.scss'

export const LoginInput  = (props: any) => {
	return <input {...props} className={s.loginInput}/>
}