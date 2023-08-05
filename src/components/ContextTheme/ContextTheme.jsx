import React from 'react'
import  { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null);
export function  useTheme() {
    return useContext(ThemeContext);
}
export  function ThemeProvider({children}) {
    const [theme, setTheme] = useState('Italian')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}
