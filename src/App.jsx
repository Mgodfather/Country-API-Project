import { Outlet } from 'react-router-dom'
import './App.css'
import Header from '../component/Header'
import ThemeProvider from '../contexts/themeContext'

function App() {

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
