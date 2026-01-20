import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import itineraryRoutes from './routes/itinerary.js'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// --------------------------------------------------
// ✅ SIMPLE & WORKING CORS CONFIG (RECOMMENDED)
// --------------------------------------------------
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
)

// ✅ Explicit preflight handling
app.options('*', cors())

// --------------------------------------------------
// Middleware
// --------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Logging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`)
  next()
})

// --------------------------------------------------
// Health check
// --------------------------------------------------
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'AI Travel Planner API is running',
  })
})

// --------------------------------------------------
// Routes
// --------------------------------------------------
app.use('/api', itineraryRoutes)

// --------------------------------------------------
// Error handling
// --------------------------------------------------
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  })
})

// --------------------------------------------------
// Start server
// --------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
