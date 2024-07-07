import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessagesContainer from '../../components/messages/MessagesContainer'

export default function 
() {
  return (
    <div className='flex justify-center items-center h-full'>
        <div className="backdrop-blur-sm bg-white/30 w-10/12 h-5/6 border px-12 py-12 rounded flex">
            <div className='sidebar flex-none w-3/12'>
                <Sidebar/>
            </div>
            <div className='main-chat-wrap w-9/12 border-l'>
                <MessagesContainer />
            </div>
        </div>
    </div>
  )
}
