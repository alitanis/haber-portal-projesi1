import React from 'react'
import { Link } from 'react-router-dom'
const CreateNews = () => {
  return (

    <div className='bg-white rounded-md'>
        <div className='flex justify-between p-4'>
            <h2 className='text-xl font-medium'>Haber Ekle</h2>
            <Link className='px-3 py-[6px] bg-purple-500 rounded-sm text-white hover:bg-purple-600' to='/dashboard/news'>Haberler</Link>

        </div>
    </div>

  )
}

export default CreateNews