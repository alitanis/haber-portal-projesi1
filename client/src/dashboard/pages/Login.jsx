import React, { useState } from 'react'
import { base_url } from "../../config/config";
import axios from 'axios';
import toast from 'react-hot-toast'


const Login = () => {

  const [loader,setLoader]  = useState(false)

  const [state, setState] = useState({
    email: "",
    password: ''
  })
  

  const inputHandle = (e)=>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const submit = async (e)=> {
    e.preventDefault()
    try {
      const { data } = await axios.post(`${base_url}/api/login`,state)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='min-w-screen min-h-screen bg-slate-200 flex justify-center items-center'>
      <div className='w-[340px] text-slate-600 shadow-md'>
        <div className='bg-white h-full px-7 py-8 rounded-md'>
          <div className='w-full justify-center items-center flex'>
            <img className='w-[200px]' src="https://news-portal-mern.onrender.com/assets/logo-00ebaab6.png" alt="logo" />
          </div>
          <form onSubmit={submit} className='mt-8' >
            <div className='flex flex-col gap-y-2'>
              <label className='text-md font-medium text-gray-600' htmlFor="email">E-posta</label>
              <input onChange={inputHandle} required value={state.email} type="email" placeholder='E-posta' name='email' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='email' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <div className='flex flex-col gap-y-2'>
                <label className='text-md font-medium text-gray-600' htmlFor="password">Şifre</label>
                <input onChange={inputHandle} required value={state.password} type="password" placeholder='Şifre' name='password' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id='password' />
              </div>
            </div>
            <div className='mt-4'>
            <button className='px-3 py-[6px] w-full bg-purple-500 rounded-sm text-white hover:bg-purple-600'>Giriş Yap</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login