import { ThemeContext } from '../contexts/themeContext'
import { useContext } from 'react'

export const useTheme = () => {
    const [isDark, setIsDark] = useContext(ThemeContext)
    return [isDark, setIsDark]

    // or we can do this also===>
    // return useContext(ThemeContext)
}
