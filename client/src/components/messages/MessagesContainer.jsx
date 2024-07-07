import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatsSelected from './NoChatsSelected';


export default function MessagesContainer() {
    const noChatSelected = false;
    return (
        <>
            {
                noChatSelected ? (
                <NoChatsSelected /> ) : (
                    <div className='flex flex-col h-full'>
                        <div className='bg-slate-500 px-4 py-2 mb-2'>
                            <span className='label-text'>To : </span>
                            <span className='text-gray-900 font-bold'>Daisy</span>
                        </div>
                
                        <Messages />
                        <MessageInput />
                    </div>
                )
            }
        </>    
    )
}