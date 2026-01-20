import express from 'express'
import { generateTravelItinerary } from '../services/aiService.js'

const router = express.Router()

/**
 * POST /api/generate-itinerary
 * Generate personalized travel itinerary based on user preferences
 */
router.post('/generate-itinerary', async (req, res) => {
  try {
    const { budget, startLocation, destination, duration, interests } = req.body

    // Validate required fields
    if (!budget || !startLocation || !destination || !duration || !interests) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields. Please provide budget, startLocation, destination, duration, and interests.'
      })
    }

    // Validate budget
    if (isNaN(budget) || budget <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Budget must be a positive number'
      })
    }

    // Validate duration
    if (isNaN(duration) || duration <= 0 || duration > 30) {
      return res.status(400).json({
        success: false,
        message: 'Duration must be between 1 and 30 days'
      })
    }

    // Validate interests
    if (!Array.isArray(interests) || interests.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Please select at least one interest'
      })
    }

    // Generate itinerary using AI service
    const itinerary = await generateTravelItinerary({
      budget: parseFloat(budget),
      startLocation,
      destination,
      duration: parseInt(duration),
      interests
    })

    // Return generated itinerary
    res.json({
      success: true,
      data: itinerary
    })

  } catch (error) {
    console.error('Error generating itinerary:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to generate itinerary. Please try again.'
    })
  }
})

export default router
