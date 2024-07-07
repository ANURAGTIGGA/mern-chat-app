import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

export default function SearchInput() {
  return (
    <form className='flex item-center gap-2'>
        <label className="input input-bordered flex items-center gap-2 w-9/12">
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
          <IoSearchOutline />
        </button>
    </form>
  )
}
