import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'

/**
 * Landing page component
 * First page users see with hero section and features
 */
function LandingPage() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/planner')
  }

  return (
    <div>
      {/* Hero Section */}
      <Hero onGetStarted={handleGetStarted} />

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                1. Enter Details
              </h3>
              <p className="text-gray-600">
                Provide your budget, destination, duration, and interests
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                2. AI Processing
              </h3>
              <p className="text-gray-600">
                Our AI analyzes your preferences and generates optimal plans
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                3. Get Itinerary
              </h3>
              <p className="text-gray-600">
                Receive detailed day-by-day plans with activities and costs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✈️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                4. Start Your Journey
              </h3>
              <p className="text-gray-600">
                Follow your personalized plan and enjoy your adventure
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Students Love Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">💸</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Budget Optimization
              </h3>
              <p className="text-gray-600">
                Smart allocation of your budget across accommodation, food, activities, and transport to maximize value.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">⏱️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Save Time
              </h3>
              <p className="text-gray-600">
                Skip hours of research and planning. Get a complete itinerary in seconds with AI-powered recommendations.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Personalized Plans
              </h3>
              <p className="text-gray-600">
                Every itinerary is tailored to your specific interests, from adventure sports to cultural experiences.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Route Optimization
              </h3>
              <p className="text-gray-600">
                Efficient routes that minimize travel time and costs while maximizing experiences.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Mobile Friendly
              </h3>
              <p className="text-gray-600">
                Access your itinerary on any device. Perfect for planning on-the-go or during your trip.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Student-Focused
              </h3>
              <p className="text-gray-600">
                Designed specifically for students with recommendations for affordable hostels, free attractions, and student discounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of students who have discovered smarter travel planning
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started for Free →
          </button>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
