import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const init = ()=>{

    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged:!!user,
        user:user
    }
}

export const AuthProvider = ({children}) => {

    const [authState, dispatch] = useReducer(authReducer,{}, init);

    const login = (name='')=>{

        const action = {
            type:types.login,
            payload:{
                id:'123',
                name:name
            }
        }

        localStorage.setItem('user',JSON.stringify(action.payload))
        dispatch(action)
    }

    const logout = () =>{
        localStorage.removeItem('user');

        const action = {
            type:types.logout
        }
        console.log(action);
        console.log(authState)
        dispatch(action)
    }
  return (
    <AuthContext.Provider value={{ ...authState, login:login, logout:logout}}>
        { children }
    </AuthContext.Provider>
  )
}
