import React, { useLayoutEffect, FC } from 'react';
import { Route, withRouter, useHistory } from "react-router-dom"
import { Switch, RouteComponentProps } from 'react-router'
import './App.scss'
import { withSuspense } from './hoc/withSuspense';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateType } from './types/types';
import { authUser } from './redux/me/actions';
// import NotFound from './components/NotFound/NotFound';
// import Login from './components/Login/Login';
// import Header from './components/Header/Header'
// import Menu from './components/Menu/Menu'


const App = ({ ...props }) => {
    const dispatch = useDispatch()
    const history = useHistory()

   

    return (
        <div className="app-container">
          
        </div>
    );
}

export default App