import React from 'react'
import { AuthContext } from './AuthContext'
import { useReducer } from 'react';
import { authReducer } from './authReducer';
import { types } from '../types/types';

const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = async ( name ='', email = '', password = '') => {

        const user = { id: 'AEF#', name, password, email }
        const action = {
            type: types.login,
            payload:  user
        }

        localStorage.setItem('user', JSON.stringify(user))

        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{ authState, login: login, logout: logout }} >
            {children}
        </AuthContext.Provider>
    )
}
