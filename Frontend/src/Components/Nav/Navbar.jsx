import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import dietPregLogo from '../../assets/dietPregLogo.png'

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Know Your Pregnancy Stage', path: '/pregnancy-stage' },
    { name: 'Diet Preg Recommendation', path: '/diet-recomendation' },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={dietPregLogo} alt="Diet Preg Logo" width={40} />
          <span className="text-pink-600 font-bold text-lg">DietPreg</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium hover:text-pink-600 ${
                location.pathname === item.path
                  ? 'text-pink-600 underline underline-offset-4'
                  : 'text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-white border-t">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium hover:text-pink-600 ${
                location.pathname === item.path
                  ? 'text-pink-600 underline underline-offset-4'
                  : 'text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default NavigationBar
