import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {AiFillDashboard, AiOutlinePlus} from "react-icons/ai";
import {ImProfile} from "react-icons/im";
import {BiNews} from "react-icons/bi";
import {FiUsers} from "react-icons/fi";
const Sidebar = () => {



  const {pathname} = useLocation()  
  return (
    <div className='w-[250px] h-screen fixed left-0 top-0 bg-white'>
        <div className='h-[70px] flex justify-center items-center'>
            <Link to='/'>
                <img className='w-[190px] h-[35px]' src="https://news-portal-mern.onrender.com/assets/logo-00ebaab6.png" alt="" />
            </Link>
        </div>
        <ul className='px-3 flex flex-col gap-y-1 font-large text-xl' >
          <li>
            <Link to='/dashboard/admin' className={`px-3 ${pathname === '/dashboard/admin'?'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} py-2 hover:shadow-1g hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
              <span className='text-xl' ><AiFillDashboard/></span>
              <span>Kontrol Paneli</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/haberler' className={`px-3 ${pathname === '/dashboard/haberler'?'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} py-2 hover:shadow-1g hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
              <span className='text-xl' ><BiNews /></span>
              <span>Haberler</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/yazar/ekle' className={`px-3 ${pathname === 'dashboard/writer/ekle'?'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} py-2 hover:shadow-1g hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
              <span className='text-xl' ><AiOutlinePlus/></span>
              <span>Yazar Ekle</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/yazarlar' className={`px-3 ${pathname === '/dashboard/yazarlar'?'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} py-2 hover:shadow-1g hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
              <span className='text-xl' ><FiUsers/></span>
              <span>Yazarlar</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/profil' className={`px-3 ${pathname === '/dashboard/profil'?'bg-indigo-500 text-white':'bg-white text-[#404040f6]'} py-2 hover:shadow-1g hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
              <span className='text-xl' ><ImProfile/></span>
              <span>Profil</span>
            </Link>
          </li>
          <li>
            <Link to='/dashboard/admin' className={`px-3 ${pathname === '/dashboard/admin'?'bg-indigo-500 text-white':'bg-white text-[#4040f6]'} py-2 hover:shadow-1g hover:shadow-indigo-500/20 w-full rounded-sm flex gap-x-2 justify-start items-center hover:bg-indigo-500 hover:text-white`}>
              <span className='text-xl' ><AiFillDashboard/></span>
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar