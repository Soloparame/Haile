'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch by only rendering after mount
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <button className="p-2 rounded-lg border border-surface-border text-foreground hover:bg-surface transition-colors w-10 h-10 flex items-center justify-center">
                <div className="w-5 h-5 opacity-0" />
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg border border-surface-border text-foreground hover:bg-surface transition-colors w-10 h-10 flex items-center justify-center relative overflow-hidden group"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5 flex items-center justify-center">
                <Sun className={`absolute w-5 h-5 transition-all duration-300 ${theme === 'dark' ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0 text-amber-500'}`} />
                <Moon className={`absolute w-5 h-5 transition-all duration-300 ${theme === 'dark' ? 'opacity-100 scale-100 rotate-0 text-blue-400' : 'opacity-0 scale-50 -rotate-90'}`} />
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-primary-green/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg z-[-1]" />
        </button>
    )
}
