import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Navigation bar component
 * Displays app logo and navigation links
 */
function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl">✈️</div>
            <span className="text-xl font-bold text-primary-600">
              AI Travel Planner
            </span>
          </Link>

          {/* Navigation links */}
          <div className="flex items-center space-x-6">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/planner" 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Plan Trip
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
