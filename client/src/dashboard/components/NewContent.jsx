import React from 'react'
import {FaEye, FaEdit,FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NewContent = () => {
  return (
    <div>
        <div className='px-4 py-3 flex gap-x-3'>
            <select name="" className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id="">
                <option value="">---select type---</option>
                <option value="pending">Beklemede</option>
                <option value="active">Aktif</option>
                <option value="deactive">Pasif</option>
            </select>
            <input type="text" placeholder='haber ara' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
        </div>
        <div className="relative overflow-x-auto p-4">
          <table className='w-full text-sm text-left text-slate-600' >
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr>
                  <th className='px-7 py-3'>No</th>
                  <th className='px-7 py-3'>Başlık</th>
                  <th className='px-7 py-3'>Resim</th>
                  <th className='px-7 py-3'>Kategori</th>
                  <th className='px-7 py-3'>Açıklama</th>
                  <th className='px-7 py-3'>Tarih</th>
                  <th className='px-7 py-3'>Durum</th>
                  <th className='px-7 py-3'>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                  <tr className='bg-white border-b'>
                    <td className='px-6 py-4'>1</td>
                    <td className='px-6 py-4'>İndia gets its longest glass</td>
                    <td className='px-6 py-4'>resim</td>
                    <td className='px-6 py-4'>Travel</td>
                    <td className='px-6 py-4'>you all must have wa...</td>
                    <td className='px-6 py-4'>October 10, 2023</td>
                    <td className='px-6 py-4'>
                      <span className='px-2 py-[2px] bg-green-100 text-green-800 rounded-1g text-xs cursor-pointer'>Active</span>
                    </td>
                    <td className='px-6 py-4'>
                      <div className='flex justify-start items-center gap-x-4 text-white'>
                        <Link className='p-[6px] bg-green-500 rounded hover:shadow-1g hover:shadow-green-500/50'><FaEye /></Link>
                        <Link className='p-[6px] bg-yellow-500 rounded hover:shadow-1g hover:shadow-yellow-500/50'><FaEdit /></Link>
                        <div className='p-[6px] bg-red-500 rounded hover:shadow-1g hover:shadow-red-500/50'><FaTrash/></div>
                      </div>
                    </td>
                  </tr>
              </tbody>
          </table>
        </div>

    </div>
  )
}

export default NewContent