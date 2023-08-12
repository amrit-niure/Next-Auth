'use client'
import {SessionProvider} from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
export const Provider = ({children}) =>{
    return <div>
    <ThemeProvider attribute='class'>
        <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
    </div>
}