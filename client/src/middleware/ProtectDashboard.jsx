import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectDashboard = () => {

  const userInfo = {
    name : "ali",
    role : "writer"
  }

  if(userInfo.role === role){
    return <Outlet />
  } else {
    return <Navigate to={'/login'} />
  }

}

export default ProtectDashboard