import React, { useState } from 'react';
import { login } from "../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_CREDENTIALS } from '../../constants/constants';
import { STRINGS } from '../../constants/strings';
import './style.css';

const Login = (props: any) => {
    const dispatch = useDispatch()
    const { error } = useSelector((state: any) => state.auth)

    const [data, setData] = useState({ username: '', password: '' })
    const [isPasswordType, setIsPasswordType] = useState(true)

    const handleInputChange = (e: any) => {
        const name = e.target.name
        const value = e.target.value
        setData({ ...data, [name]: value });
    }


    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        const { username, password } = data
        if (username === LOGIN_CREDENTIALS.username
            && password === LOGIN_CREDENTIALS.password) {
            props.history.push('/')
            localStorage.setItem('isLogin', 'true')
            dispatch(login(null, true));
        } else {
            dispatch(login(STRINGS.ERROR_MSG, false));
        }
    }

    const showHide = () => setIsPasswordType(!isPasswordType);

    return (
        <div>

            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <label ><b>{STRINGS.USERNAME}</b></label>
                    <input type="text" placeholder="Enter Username" onChange={handleInputChange} value={data.username} name="username" required />

                    <label ><b>{STRINGS.PASSWORD}</b></label>
                    <input type={isPasswordType ? 'password' : 'text'} placeholder="Enter Password" onChange={handleInputChange} value={data.password} name="password" required />
                    <div>
                        {error && <span style={{ color: 'red' }}>{error}</span>}
                    </div>
                    <label >
                        <input type="checkbox" checked={!isPasswordType} name="remember" onChange={showHide} />{STRINGS.SHOW_PASS}
                    </label>
                    <button type='submit' onClick={handleFormSubmit} >{STRINGS.LOGIN}</button>
                </div>

            </form>
        </div>

    );
}

export default Login