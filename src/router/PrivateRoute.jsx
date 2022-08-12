import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({children}) => {
    
    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    console.log('lastPath=> ',lastPath)

    localStorage.setItem('lastPath', JSON.stringify(lastPath));
  
      return (logged)
    ? children
    : <Navigate to='/login'/>

}
