import { RootReducerType } from '../redux/redux-store'
export type AppStateType = ReturnType<RootReducerType>

export enum AlertifyStatusEnum {
	success = 'success',
	warn = 'warn',
	error = 'error'
}