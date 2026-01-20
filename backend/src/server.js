import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import itineraryRoutes from './routes/itinerary.js'

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 5000

// --------------------
// ✅ CORS CONFIGURATION (FIXED)
// --------------------
const allowedOrigins = [
  process.env.ALLOWED_ORIGINS
]

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true)

      if (allowedOrigins.includes(origin)) {
        return callback(null, true)
      } else {
        return callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
)

// ✅ VERY IMPORTANT: handle preflight requests
app.options('*', cors())

// --------------------
// Middleware
// --------------------
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`)
  next()
})

// --------------------
// Health check endpoint
// --------------------
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'AI Travel Planner API is running',
    timestamp: new Date().toISOString()
  })
})

// --------------------
// API Routes
// --------------------
app.use('/api', itineraryRoutes)

// --------------------
// 404 handler
// --------------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

// --------------------
// Error handling middleware
// --------------------
app.use((err, req, res, next) => {
  console.error('Error:', err)
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  })
})

// --------------------
// Start server
// --------------------
app.listen(PORT, () => {
  console.log('='.repeat(50))
  console.log(`🚀 AI Travel Planner API Server`)
  console.log(`📡 Running on http://localhost:${PORT}`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log('='.repeat(50))
})

export default app
