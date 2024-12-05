import { ThemeContext } from "../contexts/themeContext"
import { useContext } from 'react'
const Header = () => {

    const [isDark, setIsDark] = useContext(ThemeContext)

    return (
        <header className={`${isDark ? 'dark' : ''}`}>
            <div className="head-sec">
                <span className="title">
                    <a href="/">Where in the world?</a>
                </span>
                <div className="mode" onClick={() => {
                    localStorage.setItem('darkMode', !isDark)
                    setIsDark(!isDark)
                }}>
                    <i id="icon" className={`bx bx-moon ${isDark ? 'bx-moon' : 'bx-sun'}`}></i>
                    <label htmlFor="icon">{`${isDark ? 'Light' : 'Dark'}`} mode</label>
                </div>
            </div>
        </header>
    )
}

export default Header