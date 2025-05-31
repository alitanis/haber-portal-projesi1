import React from 'react'

const NewContent = () => {
  return (
    <div>
        <div className='px-4 py-3 flex gap-x-3'>
            <select name="" className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id="">
                <option value="">---select type---</option>
                <option value="pending">Beklemede</option>
                <option value="active">Aktif</option>
                <option value="deactive">Devre Dışı</option>
            </select>
            <input type="text" placeholder='haber ara' className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' />
      
        </div>

    </div>
  )
}

export default NewContent