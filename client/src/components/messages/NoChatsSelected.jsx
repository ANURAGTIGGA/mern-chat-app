import React from 'react';
import { TiMessages } from "react-icons/ti";

export default function NoChatsSelected() {

    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-black-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome John</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}