import React from 'react'

const NewContent = () => {
  return (
    <div>
        <div className='px-4 py-3 flex gap-x-3'>
            <select name="" className='px-3 py-2 rounded-md outline-0 border border-gray-300 focus:border-green-500 h-10' id="">
                <option value="">select type</option>
                <option value="Pending">Pending</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
            </select>
      
        </div>

    </div>
  )
}

export default NewContent