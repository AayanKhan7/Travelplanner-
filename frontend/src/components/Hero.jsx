import React from 'react'

/**
 * Hero section component for landing page
 * Displays main call-to-action and value proposition
 */
function Hero({ onGetStarted }) {
  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center fade-in">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Plan Your Dream Trip with AI
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-4 text-primary-100">
            Budget-friendly travel planning for students
          </p>
          
          <p className="text-lg md:text-xl mb-10 text-primary-50 max-w-2xl mx-auto">
            Get personalized itineraries, budget breakdowns, and smart recommendations 
            tailored to your preferences and budget constraints.
          </p>

          {/* CTA Button */}
          <button
            onClick={onGetStarted}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Planning Your Adventure →
          </button>

          {/* Feature highlights */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-primary-100">
                Smart algorithms create personalized itineraries based on your preferences
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-xl font-semibold mb-2">Budget-Friendly</h3>
              <p className="text-primary-100">
                Get detailed cost breakdowns and stay within your student budget
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-3xl mb-3">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Smart Routes</h3>
              <p className="text-primary-100">
                Optimized travel routes with map visualization for better planning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
