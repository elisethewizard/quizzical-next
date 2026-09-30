'use client'

import { useTheme } from 'next-themes'
import Sun from '../svgs/Sun'

export default function ThemeSwitch() {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button 
            aria-label='Switch current theme' 
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="text-darkblue cursor-pointer dark:text-lightgray absolute bottom-2 right-2 md:bottom-5 md:right-5"
        >
            <Sun aria-hidden className='size-8' />
        </button>
    )
}