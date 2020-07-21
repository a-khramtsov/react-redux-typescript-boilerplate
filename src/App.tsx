import React, { useEffect, FC }  from 'react';
import { Route, withRouter } from "react-router-dom"
import { Switch, RouteComponentProps } from 'react-router'
import './App.scss'
import './components/Common/Alertify/Alertify.css'
import { withSuspense } from './hoc/withSuspense';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from './types/types';
import { authUser } from './redux/me-reducer';
import NotFound from './components/NotFound/NotFound';


const App: FC<RouteComponentProps> = ({...props}) => {
	const logged = useSelector<AppStateType, boolean>(state => state.me.logged)
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(authUser())
	}, []);

	

	return (
		<div className="app-content">
			<Switch>
				
				<Route render={() => <NotFound />} />
			</Switch>
		</div>
	);
}

export default withRouter(App)