import React from 'react'

/**
 * Footer component
 * Displays copyright and additional information
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About AI Travel Planner</h3>
            <p className="text-gray-300 text-sm">
              Your intelligent companion for planning budget-friendly student adventures. 
              Get personalized itineraries powered by AI technology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/planner" className="text-gray-300 hover:text-white transition-colors">
                  Plan Your Trip
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 text-sm">
              For students, by students
              <br />
              Making travel accessible to everyone
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} AI Travel Planner. Built with ❤️ for students.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
