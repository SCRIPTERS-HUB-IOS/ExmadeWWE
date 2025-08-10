import { useContext } from 'react'
import { ThemeContext } from '../pages/_app'

export default function ThemeToggle() {
  const { theme, setTheme, brightness, setBrightness } = useContext(ThemeContext)

  return (
    <div className="flex items-center gap-6 p-4 absolute top-4 right-4 z-50">
      <label className="flex items-center gap-2 text-sm text-white select-none">
        Theme:
        <select
          value={theme}
          onChange={e => {
            setTheme(e.target.value)
            if (e.target.value === 'glass') {
              document.body.classList.add('glass-theme')
            } else {
              document.body.classList.remove('glass-theme')
            }
          }}
          className="bg-blackGlass text-white rounded px-2 py-1 cursor-pointer"
        >
          <option value="neon">Neon Red</option>
          <option value="glass">Glass Blue</option>
        </select>
      </label>

      <label className="flex items-center gap-2 text-sm text-white select-none">
        Brightness:
        <input
          type="range"
          min="50"
          max="120"
          value={brightness}
          onChange={e => setBrightness(e.target.value)}
          className="cursor-pointer"
          step="1"
        />
      </label>
    </div>
  )
}
