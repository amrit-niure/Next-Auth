'use client'
import SignIn from '@/components/SignIn'
import User from '@/components/User'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { status, data: session } = useSession()
  return (
    <div className='h-[90vh] w-full bg-white dark:bg-slate-900'>
      {status === 'authenticated' ?(
        <User data={session} />
      ):(
      <SignIn />
      )}
    </div>
  )

}
