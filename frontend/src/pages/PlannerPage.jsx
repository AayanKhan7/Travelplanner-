import React, { useState } from 'react'
import PlannerForm from '../components/PlannerForm'
import ItineraryDisplay from '../components/ItineraryDisplay'
import MapDisplay from '../components/MapDisplay'
import { generateItinerary } from '../services/api'

/**
 * Travel planner page component
 * Main page for trip planning with form and results
 */
function PlannerPage() {
  const [loading, setLoading] = useState(false)
  const [itinerary, setItinerary] = useState(null)
  const [error, setError] = useState(null)

  /**
   * Handle form submission
   * Calls API to generate itinerary
   */
  const handleSubmit = async (formData) => {
    setLoading(true)
    setError(null)
    setItinerary(null)

    try {
      // Call backend API to generate itinerary
      const result = await generateItinerary(formData)
      setItinerary(result)
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('results')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }, 100)
    } catch (err) {
      setError(err.message || 'Failed to generate itinerary. Please try again.')
      console.error('Error generating itinerary:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Plan Your Perfect Trip
          </h1>
          <p className="text-lg text-gray-600">
            Fill in the details below and let AI create your personalized itinerary
          </p>
        </div>

        {/* Planning Form */}
        <div className="max-w-3xl mx-auto mb-12">
          <PlannerForm onSubmit={handleSubmit} loading={loading} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
              <div className="flex items-start">
                <span className="text-red-500 text-xl mr-3">⚠️</span>
                <div>
                  <h3 className="text-red-800 font-semibold mb-1">Error</h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {itinerary && (
          <div id="results" className="space-y-8">
            {/* Map Display */}
            <MapDisplay 
              startLocation={itinerary.startLocation}
              destination={itinerary.destination}
            />

            {/* Itinerary Display */}
            <ItineraryDisplay itinerary={itinerary} />

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => window.print()}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                📄 Print Itinerary
              </button>
              <button
                onClick={() => {
                  setItinerary(null)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                🔄 Plan Another Trip
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-primary-600 border-t-transparent"></div>
            <p className="mt-4 text-lg text-gray-600 font-medium">
              Our AI is crafting your perfect itinerary...
            </p>
            <p className="text-sm text-gray-500 mt-2">
              This usually takes a few seconds
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default PlannerPage
