import React from 'react'
import {FaEye, FaEdit,FaTrash} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";

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

        <div className='flex items-center justify-end px-10 gap-x-3 text-slate-600'>
          <div className='flex gap-x-3 justify-center items-center'>
            <p className='px-4 py-3 font-semibold text-sm'>News par Page</p>
            <select name='category' id='category' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>
          </div>
          <p className='px-6 py-3 font-semibold text-sm'>6/22 - of 5</p>
          <div className='flex items-center gap-x-3'>
            <IoIosArrowBack className='2-5 h-5 cursor-pointer'/>
            <IoIosArrowForward className='2-5 h-5 cursor-pointer'/>
          </div>
        </div>

    </div>
  )
}

export default NewContent