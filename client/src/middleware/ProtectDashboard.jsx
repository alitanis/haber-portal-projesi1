import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectDashboard = () => {

  const userInfo = {
    name : "Seyit Ali Tanış",
    role : "admin"
  }

  if(userInfo){
    return <Outlet />
  } else {
    return <Navigate to={'/dashboard/unable-access'} />
  }

}

export default ProtectDashboard