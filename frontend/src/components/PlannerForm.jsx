import React, { useState } from 'react'

/**
 * Travel planner form component
 * Collects user preferences for trip planning
 */
function PlannerForm({ onSubmit, loading }) {
  // Form state management
  const [formData, setFormData] = useState({
    budget: '',
    startLocation: '',
    destination: '',
    duration: '',
    interests: []
  })

  // Available interest options
  const interestOptions = [
    { id: 'adventure', label: 'Adventure & Outdoor', icon: '🏔️' },
    { id: 'culture', label: 'Culture & History', icon: '🏛️' },
    { id: 'food', label: 'Food & Cuisine', icon: '🍜' },
    { id: 'nature', label: 'Nature & Wildlife', icon: '🌿' },
    { id: 'shopping', label: 'Shopping', icon: '🛍️' },
    { id: 'nightlife', label: 'Nightlife & Entertainment', icon: '🎭' },
    { id: 'relaxation', label: 'Relaxation & Wellness', icon: '🧘' },
    { id: 'photography', label: 'Photography', icon: '📸' }
  ]

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle interest checkbox changes
  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Tell Us About Your Trip
      </h2>

      <div className="space-y-6">
        {/* Budget input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Budget (USD) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
            min="100"
            placeholder="e.g., 1000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          />
          <p className="text-sm text-gray-500 mt-1">Enter your total budget for the trip</p>
        </div>

        {/* Starting location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Starting Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="startLocation"
            value={formData.startLocation}
            onChange={handleChange}
            required
            placeholder="e.g., New York, USA"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Destination */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Destination <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
            placeholder="e.g., Paris, France"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        {/* Trip duration */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Trip Duration (days) <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            min="1"
            max="30"
            placeholder="e.g., 7"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          />
          <p className="text-sm text-gray-500 mt-1">Number of days for your trip (1-30)</p>
        </div>

        {/* Interests */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Interests <span className="text-gray-500 text-xs">(Select at least one)</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interestOptions.map(interest => (
              <label
                key={interest.id}
                className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-all ${
                  formData.interests.includes(interest.id)
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-gray-300 hover:border-primary-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest.id)}
                  onChange={() => handleInterestToggle(interest.id)}
                  className="w-4 h-4 text-primary-600 focus:ring-primary-500 rounded"
                />
                <span className="text-xl">{interest.icon}</span>
                <span className="text-sm font-medium text-gray-700">
                  {interest.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading || formData.interests.length === 0}
          className={`w-full py-4 rounded-lg font-semibold text-white transition-all ${
            loading || formData.interests.length === 0
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-[1.02]'
          }`}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generating Your Itinerary...
            </span>
          ) : (
            'Generate AI Itinerary ✨'
          )}
        </button>
      </div>
    </form>
  )
}

export default PlannerForm
