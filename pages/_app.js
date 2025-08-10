import '../styles/globals.css'
import { useState, createContext, useContext, useEffect } from 'react'

export const ThemeContext = createContext()

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('neon') // neon or glass
  const [brightness, setBrightness] = useState(100) // 0-100 %

  // Apply brightness via CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--brightness', brightness / 100)
  }, [brightness])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, brightness, setBrightness }}>
      <Component {...pageProps} />
    </ThemeContext.Provider>
  )
}
