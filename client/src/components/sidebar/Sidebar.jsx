import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

export default function 
() {
  return (
    <>
        <SearchInput className='w-full' />
        <div className='divider px-3'></div>
        <div className='flex flex-col px-3 h-4/5'>
            <Conversations />
            <LogoutButton />
        </div>
    </>
  )
}
