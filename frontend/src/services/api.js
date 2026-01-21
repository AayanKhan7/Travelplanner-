import axios from 'axios'

/**
 * API service for communicating with backend
 * Handles all HTTP requests to the Express server
 */

// ✅ Production backend URL (Render) – include /api prefix so routes resolve
const API_BASE_URL =
  'https://travelplanner-1-8ja7.onrender.com/api'

/**
 * Generate travel itinerary based on user preferences
 * @param {Object} preferences - User travel preferences
 * @returns {Promise<Object>} - Generated itinerary
 */
export const generateItinerary = async (preferences) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/generate-itinerary`,
      preferences
    )
    return response.data.data
  } catch (error) {
    // Handle different error scenarios
    if (error.response) {
      // Server responded with an error status
      throw new Error(
        error.response.data.message || 'Server error occurred'
      )
    } else if (error.request) {
      // Request made but no response received
      throw new Error(
        'Unable to reach server. Please check your connection.'
      )
    } else {
      // Something else went wrong
      throw new Error('An unexpected error occurred')
    }
  }
}

/**
 * Check if backend server is running
 * @returns {Promise<boolean>} - Server health status
 */
export const checkServerHealth = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/health`)
    return response.data.status === 'ok'
  } catch (error) {
    return false
  }
}

export default {
  generateItinerary,
  checkServerHealth
}
