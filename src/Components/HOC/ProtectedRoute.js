import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {

    const user = useSelector( store => store.user.data )

    if( user !== null ) {
       return (
          <Outlet />
       ) 
    } else {
        return(
            <Navigate to="/" />
        )
    }
}

export default ProtectedRoute