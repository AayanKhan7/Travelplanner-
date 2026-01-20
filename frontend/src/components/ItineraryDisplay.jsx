import React from 'react'

/**
 * Itinerary display component
 * Shows the generated travel itinerary with day-wise breakdown
 */
function ItineraryDisplay({ itinerary }) {
  if (!itinerary) return null

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-2">Your Personalized Itinerary</h2>
        <p className="text-primary-100">
          {itinerary.destination} • {itinerary.duration} Days • ${itinerary.totalBudget} Budget
        </p>
      </div>

      {/* Trip Summary */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">📋</span>
          Trip Summary
        </h3>
        <div className="space-y-2 text-gray-700">
          <p><strong>From:</strong> {itinerary.startLocation}</p>
          <p><strong>To:</strong> {itinerary.destination}</p>
          <p><strong>Duration:</strong> {itinerary.duration} days</p>
          <p><strong>Travel Style:</strong> {itinerary.interests.join(', ')}</p>
        </div>
      </div>

      {/* Budget Breakdown */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">💰</span>
          Budget Breakdown
        </h3>
        <div className="space-y-3">
          {Object.entries(itinerary.budgetBreakdown).map(([category, amount]) => (
            <div key={category} className="flex justify-between items-center">
              <span className="text-gray-700 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="font-semibold text-primary-600">${amount}</span>
            </div>
          ))}
          <div className="border-t pt-3 flex justify-between items-center text-lg font-bold">
            <span>Total Budget</span>
            <span className="text-primary-700">${itinerary.totalBudget}</span>
          </div>
        </div>
      </div>

      {/* Day-wise Itinerary */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="text-2xl mr-2">📅</span>
          Daily Itinerary
        </h3>
        <div className="space-y-6">
          {itinerary.dailyPlans.map((day, index) => (
            <div key={index} className="border-l-4 border-primary-500 pl-6 pb-6 last:pb-0">
              <div className="flex items-center mb-3">
                <div className="bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-800">{day.title}</h4>
              </div>
              
              <div className="space-y-3 ml-13">
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-xl mr-3">{activity.icon}</span>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h5 className="font-semibold text-gray-800">{activity.time}</h5>
                          <span className="text-sm text-primary-600 font-medium">${activity.cost}</span>
                        </div>
                        <p className="text-gray-700">{activity.description}</p>
                        {activity.location && (
                          <p className="text-sm text-gray-500 mt-1">📍 {activity.location}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Tips */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
          <span className="text-xl mr-2">💡</span>
          Travel Tips
        </h3>
        <ul className="space-y-2 text-gray-700">
          {itinerary.tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2">•</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ItineraryDisplay
