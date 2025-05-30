import { useState } from 'react'
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './dashboard/layout/MainLayout'
import AdminIndex from './dashboard/pages/AdminIndex'
import Login from './dashboard/pages/Login'
import ProtectDashboard from './dashboard/middleware/ProtectDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<ProtectDashboard/>}>
          <Route path='' element={<MainLayout/>}>
            <Route path='' element={<Navigate to='/dashboard/admin' />}>
              <Route path='admin' element={<AdminIndex/>} />
            </Route>
          </Route>
          </Route>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
