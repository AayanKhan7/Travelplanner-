/**
 * AI Service - Mock AI Logic for Travel Itinerary Generation
 * Simulates intelligent travel planning without external API calls
 */

/**
 * Activity database categorized by interests
 */
const activityDatabase = {
  adventure: [
    { name: 'Mountain Hiking', icon: '🏔️', avgCost: 30, duration: 'Full Day' },
    { name: 'Rock Climbing', icon: '🧗', avgCost: 45, duration: 'Half Day' },
    { name: 'Zip Lining', icon: '🪂', avgCost: 60, duration: 'Half Day' },
    { name: 'Kayaking', icon: '🚣', avgCost: 40, duration: 'Half Day' },
    { name: 'Paragliding', icon: '🪂', avgCost: 100, duration: 'Half Day' }
  ],
  culture: [
    { name: 'Museum Visit', icon: '🏛️', avgCost: 15, duration: 'Half Day' },
    { name: 'Historical Tour', icon: '🏰', avgCost: 25, duration: 'Full Day' },
    { name: 'Art Gallery', icon: '🎨', avgCost: 12, duration: 'Half Day' },
    { name: 'Cultural Show', icon: '🎭', avgCost: 30, duration: 'Evening' },
    { name: 'Heritage Walk', icon: '🚶', avgCost: 10, duration: 'Half Day' }
  ],
  food: [
    { name: 'Food Tour', icon: '🍜', avgCost: 50, duration: 'Half Day' },
    { name: 'Cooking Class', icon: '👨‍🍳', avgCost: 60, duration: 'Half Day' },
    { name: 'Street Food Walk', icon: '🌮', avgCost: 20, duration: 'Evening' },
    { name: 'Fine Dining', icon: '🍽️', avgCost: 80, duration: 'Evening' },
    { name: 'Market Visit', icon: '🛒', avgCost: 15, duration: 'Morning' }
  ],
  nature: [
    { name: 'Wildlife Safari', icon: '🦁', avgCost: 70, duration: 'Full Day' },
    { name: 'Botanical Garden', icon: '🌸', avgCost: 10, duration: 'Half Day' },
    { name: 'Beach Day', icon: '🏖️', avgCost: 20, duration: 'Full Day' },
    { name: 'National Park Visit', icon: '🏞️', avgCost: 25, duration: 'Full Day' },
    { name: 'Bird Watching', icon: '🦅', avgCost: 15, duration: 'Morning' }
  ],
  shopping: [
    { name: 'Local Market', icon: '🛍️', avgCost: 40, duration: 'Half Day' },
    { name: 'Shopping Mall', icon: '🏬', avgCost: 50, duration: 'Half Day' },
    { name: 'Souvenir Shopping', icon: '🎁', avgCost: 30, duration: 'Half Day' },
    { name: 'Artisan Market', icon: '🎨', avgCost: 35, duration: 'Half Day' }
  ],
  nightlife: [
    { name: 'Live Music Venue', icon: '🎵', avgCost: 35, duration: 'Evening' },
    { name: 'Theater Show', icon: '🎭', avgCost: 50, duration: 'Evening' },
    { name: 'Night Market', icon: '🌃', avgCost: 25, duration: 'Evening' },
    { name: 'Rooftop Bar', icon: '🍹', avgCost: 40, duration: 'Evening' }
  ],
  relaxation: [
    { name: 'Spa Day', icon: '💆', avgCost: 60, duration: 'Half Day' },
    { name: 'Yoga Session', icon: '🧘', avgCost: 20, duration: 'Morning' },
    { name: 'Beach Relaxation', icon: '🏖️', avgCost: 10, duration: 'Half Day' },
    { name: 'Meditation Retreat', icon: '🕉️', avgCost: 30, duration: 'Half Day' }
  ],
  photography: [
    { name: 'Photo Walk', icon: '📸', avgCost: 15, duration: 'Morning' },
    { name: 'Sunset Viewpoint', icon: '🌅', avgCost: 5, duration: 'Evening' },
    { name: 'Architecture Tour', icon: '🏛️', avgCost: 20, duration: 'Half Day' },
    { name: 'Landscape Photography', icon: '🌄', avgCost: 25, duration: 'Full Day' }
  ]
}

/**
 * Generate realistic budget breakdown
 */
function generateBudgetBreakdown(totalBudget, duration) {
  const accommodationPercent = 0.35
  const foodPercent = 0.30
  const activitiesPercent = 0.25
  const transportPercent = 0.10

  return {
    accommodation: Math.round(totalBudget * accommodationPercent),
    food: Math.round(totalBudget * foodPercent),
    activities: Math.round(totalBudget * activitiesPercent),
    transport: Math.round(totalBudget * transportPercent)
  }
}

/**
 * Select activities based on user interests and budget
 */
function selectActivities(interests, dailyBudget) {
  const selectedActivities = []
  
  for (const interest of interests) {
    const activities = activityDatabase[interest] || []
    if (activities.length > 0) {
      // Select random activity from this interest category
      const randomActivity = activities[Math.floor(Math.random() * activities.length)]
      if (randomActivity.avgCost <= dailyBudget * 0.8) {
        selectedActivities.push(randomActivity)
      }
    }
  }

  return selectedActivities
}

/**
 * Generate day-wise itinerary
 */
function generateDailyPlans(duration, interests, budgetBreakdown) {
  const dailyPlans = []
  const dailyActivityBudget = Math.floor(budgetBreakdown.activities / duration)
  const dailyFoodBudget = Math.floor(budgetBreakdown.food / duration)

  for (let day = 1; day <= duration; day++) {
    const activities = []
    let dayTheme = ''

    // Select 2-3 activities per day based on interests
    const availableActivities = selectActivities(interests, dailyActivityBudget)
    const numActivities = Math.min(3, availableActivities.length)

    // Morning activity
    if (numActivities > 0 && availableActivities[0]) {
      activities.push({
        time: '9:00 AM - 12:00 PM',
        description: availableActivities[0].name,
        icon: availableActivities[0].icon,
        cost: availableActivities[0].avgCost,
        location: `Popular ${availableActivities[0].name} spot`
      })
      dayTheme = availableActivities[0].name
    }

    // Lunch
    activities.push({
      time: '12:30 PM - 1:30 PM',
      description: 'Local Cuisine Lunch',
      icon: '🍽️',
      cost: Math.round(dailyFoodBudget * 0.4),
      location: 'Recommended local restaurant'
    })

    // Afternoon activity
    if (numActivities > 1 && availableActivities[1]) {
      activities.push({
        time: '2:00 PM - 5:00 PM',
        description: availableActivities[1].name,
        icon: availableActivities[1].icon,
        cost: availableActivities[1].avgCost,
        location: `Top-rated ${availableActivities[1].name} location`
      })
    }

    // Dinner
    activities.push({
      time: '7:00 PM - 8:30 PM',
      description: 'Dinner at Local Favorite',
      icon: '🍴',
      cost: Math.round(dailyFoodBudget * 0.5),
      location: 'Popular dining area'
    })

    // Evening activity (sometimes)
    if (numActivities > 2 && availableActivities[2] && day % 2 === 0) {
      activities.push({
        time: '9:00 PM - 11:00 PM',
        description: availableActivities[2].name,
        icon: availableActivities[2].icon,
        cost: availableActivities[2].avgCost,
        location: `Evening ${availableActivities[2].name} venue`
      })
    }

    dailyPlans.push({
      title: `Day ${day}: ${dayTheme || 'Exploration Day'}`,
      activities
    })
  }

  return dailyPlans
}

/**
 * Generate travel tips based on destination and preferences
 */
function generateTravelTips(destination, interests, budget) {
  const tips = [
    `Book accommodations in advance for better rates in ${destination}`,
    'Use public transportation to save money and experience local life',
    'Download offline maps before traveling to avoid roaming charges',
    'Always carry a reusable water bottle to stay hydrated and save money'
  ]

  if (interests.includes('food')) {
    tips.push('Try street food - it\'s affordable and authentic')
  }

  if (interests.includes('adventure')) {
    tips.push('Book adventure activities in advance for better prices and availability')
  }

  if (budget < 1000) {
    tips.push('Look for free walking tours to explore the city on a budget')
    tips.push('Visit attractions during off-peak hours for discounts')
  }

  return tips
}

/**
 * Main function to generate complete travel itinerary
 */
export async function generateTravelItinerary(preferences) {
  const { budget, startLocation, destination, duration, interests } = preferences

  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Generate budget breakdown
  const budgetBreakdown = generateBudgetBreakdown(budget, duration)

  // Generate daily plans
  const dailyPlans = generateDailyPlans(duration, interests, budgetBreakdown)

  // Generate travel tips
  const tips = generateTravelTips(destination, interests, budget)

  // Construct complete itinerary
  const itinerary = {
    startLocation,
    destination,
    duration,
    totalBudget: budget,
    interests: interests.map(interest => 
      interest.charAt(0).toUpperCase() + interest.slice(1)
    ),
    budgetBreakdown,
    dailyPlans,
    tips,
    generatedAt: new Date().toISOString()
  }

  return itinerary
}

/**
 * Calculate estimated travel time between locations (mock)
 */
export function estimateTravelTime(origin, destination) {
  // Mock calculation - returns hours
  const baseTime = 2
  const randomFactor = Math.random() * 6
  return Math.round(baseTime + randomFactor)
}

export default {
  generateTravelItinerary,
  estimateTravelTime
}
