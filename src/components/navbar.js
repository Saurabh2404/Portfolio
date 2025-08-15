import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setDarkMode(true)
    }
  }

  return (
    <header className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white py-5 shadow sticky top-0 z-50 rounded-full mx-4 mt-4 border border-red dark:border-orange-200">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-black dark:text-white">My Portfolio</h1>
        <nav className="flex items-center space-x-4">
          <NavItem href="/" label="Home" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/about" label="About" />
          <NavItem href="/contact" label="Contact" />

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="bg-black dark:bg-yellow-400 text-white dark:text-black p-2 rounded-full hover:scale-110 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="bg-black text-white font-semibold px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 dark:bg-gray-700 dark:hover:bg-yellow-500 dark:text-white"
    >
      {label}
    </Link>
  )
}
