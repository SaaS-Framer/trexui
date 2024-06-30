import React from 'react'

type Props = {
    text: string;
}

function Toast({ text }: Props) {
    return (
        <div className=' bg-black py-3 rounded-2xl fixed bottom-10 left-10 h-12 z-50 px-4
        transition-all duration-500 ease-in-out flex items-center 
        shadow-xl'>
            <div className=" font-medium gap-2 text-white text-sm">
                {text}
            </div>
        </div>
    )
}

export default Toast