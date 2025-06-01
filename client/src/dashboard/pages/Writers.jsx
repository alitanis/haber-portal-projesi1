import React from 'react'
import {FaEye, FaEdit,FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Writers = () => {
  return (
    <div className='bg-white rounded-md'>
      <div className='flex justify-between p-4'>
        <h2 className='text-xl font-medium'>Yazarlar</h2>
        <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/writer/add'>Yazar Ekle</Link>
      </div>
     <div className="relative overflow-x-auto p-4">
        <table className='w-full text-sm text-left text-slate-600' >
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th className='px-7 py-3'>No</th>
              <th className='px-7 py-3'>İsim</th>
              <th className='px-7 py-3'>Kategori</th>
              <th className='px-7 py-3'>Rolü</th>
              <th className='px-7 py-3'>Resim</th>
              <th className='px-7 py-3'>Email</th>
              <th className='px-7 py-3'>Aktif</th>
            </tr>
          </thead>
          <tbody>
            {
              [1,2,3,4,5,6,7].map((n,i) => <tr key={i} className='bg-white border-b'>
                <td className='px-6 py-4'>{i+1}</td>
                <td className='px-6 py-4'>İndia gets its longest glass</td>
                <td className='px-6 py-4'>resim</td>
                <td className='px-6 py-4'>Travel</td>
                <td className='px-6 py-4'>
                  <img src="" className='2-[40px] h-[40px]' />
                </td>
                <td className='px-6 py-4'>project@mail.com</td>
                <td className='px-6 py-4'>
                  <div className='flex justify-start items-center gap-x-4 text-white'>
                    <Link className='p-[6px] bg-green-500 rounded hover:shadow-1g hover:shadow-green-500/50'><FaEye /></Link>
                  </div>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div> 
    </div>
  )
}
export default Writers