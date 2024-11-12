
const Header = () => {
    return (
        <header>
            <div className="head-sec">
                <span className="title">
                    <a href="/">Where in the world?</a>
                </span>
                <div className="mode">
                    <i id="icon" className="bx bx-moon bx-sun"></i>
                    <label htmlFor="icon">dark mode</label>
                </div>
            </div>
        </header>
    )
}

export default Header