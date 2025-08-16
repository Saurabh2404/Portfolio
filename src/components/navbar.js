import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white py-4 shadow sticky top-0 z-50 rounded-full mx-4 mt-4 border border-red dark:border-orange-200">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
          My Portfolio
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavItem href="/" label="Home" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/about" label="About" />
          <NavItem href="/contact" label="Contact" />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-black dark:bg-yellow-400 text-white dark:text-black p-2 rounded-full hover:scale-110 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black dark:text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 mt-2 rounded-lg shadow-lg flex flex-col items-center space-y-3 py-4">
          <NavItem href="/" label="Home" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/about" label="About" />
          <NavItem href="/contact" label="Contact" />
          <button
            onClick={toggleDarkMode}
            className="bg-black dark:bg-yellow-400 text-white dark:text-black p-2 rounded-full hover:scale-110 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      )}
    </header>
  )
}

function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="bg-black text-white font-semibold px-4 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300 dark:bg-gray-700 dark:hover:bg-yellow-500 dark:text-white"
    >
      {label}
    </Link>
  )
}
