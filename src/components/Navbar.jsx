'use client'
import React from 'react'
import Button from '@/components/Button'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const Navbar = () => {
    const { status } = useSession()
    const { theme, setTheme } = useTheme()
    return (
        <nav className='w-full h-[10vh] border-b-[1px] dark:border-slate-500 text-slate-900 font-semibold flex items-center justify-between px-[20vw]  dark:bg-slate-900 dark:text-slate-50'>
            <span className=' text-3xl '>Next Auth - MongoDB</span>
            <div className='flex gap-4'>
                <Button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className={'rounded-full'}
                >    
            
                {theme === 'dark' ? (<Sun size={20} />): <Moon size={20}/>}
                
                </Button>
                {status !== 'authenticated' ? (<Button
                    variant={'outlined'}

                    onClick={() => signIn('google')}
                >
                    Sign In
                </Button>) : (
                    <Button
                        variant={'outlined'}
                        onClick={() => signOut()}
                    >

                        Sign Out
                    </Button>
                )}



            </div>
        </nav>
    )
}

export default Navbar