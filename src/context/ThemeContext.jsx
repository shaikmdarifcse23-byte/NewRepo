import React, { createContext, useEffect, useState } from 'react'

// Context value: { theme: 'light' | 'dark', toggleTheme: fn }
export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage (if available) to avoid flash
    try {
      const saved = localStorage.getItem('theme')
      return saved === 'dark' ? 'dark' : 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    // Apply theme attribute to documentElement and persist
    try {
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem('theme', theme)
    } catch (e) {
      // ignore (e.g. during SSR or restricted environments)
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
