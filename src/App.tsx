import React, { FunctionComponent, useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './containers/Login/login';
import DefaultLayout from './components/layout/DefaultLayout';
import { ROUTES } from './constants/routes';
import './App.css';
import { useSelector } from 'react-redux';

const App: FunctionComponent = () => {
    const { isLoggedIn } = useSelector((state: any) => state.auth)
    const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'))

    useEffect(() => {
        setIsLogin(isLoggedIn)
    }, [isLoggedIn])

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    {!isLogin && <Route
                        exact
                        path={ROUTES.LOGIN}
                        render={(props) => <Login {...props} />}
                    />}
                    <Route
                        path="/"
                        render={(props) => <DefaultLayout {...props} />}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App
