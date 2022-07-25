import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const VerifiedRoute = () => {

    const user = useSelector( store => store.user.data.user )

    if( user.verified === true ) {
       return (
          <Outlet />
       ) 
    } else {
        return(
            <Navigate to="/info-akun" />
        )
    }
}

export default VerifiedRoute