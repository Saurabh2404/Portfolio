import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white py-4 shadow sticky top-0 z-50 rounded-full mx-4 mt-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">My Portfolio</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          <NavItem href="/" label="Home" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/about" label="About" />
          <NavItem href="/contact" label="Contact" />
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black text-2xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4 bg-yellow-400 rounded-b-xl">
          <NavItem href="/" label="Home" />
          <NavItem href="/projects" label="Projects" />
          <NavItem href="/about" label="About" />
          <NavItem href="/contact" label="Contact" />
        </div>
      )}
    </header>
  )
}

function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="bg-black text-white font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 hover:text-black transition duration-300"
    >
      {label}
    </Link>
  )
}