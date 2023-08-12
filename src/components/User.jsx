
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import {signOut } from 'next-auth/react'
const User = ({ data }) => {
    console.log(data)
    return (
        <div className="w-full h-[90vh] flex items-center justify-center">
            <div className="flex min-h-4 items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-2 w-[500px] shadow-sm rounded-md shadow-indigo-400">
                <div className='flex flex-col items-center justify-center gap-4'>
                    <Image

                        src={data?.user?.image}
                        alt='Profile Picture'
                        width={60}
                        height={60}
                        className='rounded-full shadow-lg'
                    />
                    <div className='flex flex-col items-center justify-center'>
                        <span className='font-semibold'>{data.user.name}</span>
                        <span className='italic text-slate-600'> {data.user.email}</span>
                    </div>
                    <Button onClick = {() => signOut()}>Sign Out</Button>
                </div>
            </div>
        </div>
    )
}

export default User