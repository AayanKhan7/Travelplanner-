# AI Travel Planner for Students

A complete, production-ready web application that helps students plan budget-friendly trips using AI-powered itinerary generation.

## 🌟 Features

- **AI-Powered Planning**: Intelligent itinerary generation based on user preferences
- **Budget Optimization**: Smart allocation of budget across accommodation, food, activities, and transport
- **Personalized Itineraries**: Day-wise plans tailored to interests and constraints
- **Interactive Maps**: Route visualization with Google Maps integration
- **Student-Friendly**: Designed specifically for budget-conscious student travelers
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) with Vite
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Axios** for API calls

### Backend
- **Node.js** with Express
- **Mock AI Logic** (no paid API required)
- **CORS** enabled
- **Environment-based configuration**

## 📁 Project Structure

```
AI Travel Planner UI Design/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── PlannerForm.jsx
│   │   │   ├── ItineraryDisplay.jsx
│   │   │   └── MapDisplay.jsx
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   └── PlannerPage.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   └── itinerary.js
│   │   ├── services/
│   │   │   └── aiService.js
│   │   └── server.js
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd "AI Travel Planner UI Design"
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Configure Environment Variables**
   ```bash
   # In backend directory
   cp .env.example .env
   
   # Edit .env file with your settings (optional)
   # Google Maps API key is optional - app works with placeholder
   ```

### Running the Application

1. **Start Backend Server**
   ```bash
   cd backend
   npm start
   ```
   Server will run on http://localhost:5000

2. **Start Frontend Development Server** (in a new terminal)
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on http://localhost:3000

3. **Open in Browser**
   Navigate to http://localhost:3000

## 📖 Usage

1. **Landing Page**: Visit the home page to learn about features
2. **Click "Start Planning"**: Navigate to the planner page
3. **Fill the Form**:
   - Enter your budget (USD)
   - Specify starting location
   - Enter destination
   - Set trip duration (1-30 days)
   - Select your interests (Adventure, Culture, Food, etc.)
4. **Generate Itinerary**: Click the generate button
5. **View Results**: See your personalized day-wise itinerary with:
   - Budget breakdown
   - Daily activities with timings and costs
   - Route map visualization
   - Travel tips

## 🔧 Configuration

### Frontend Configuration

**Vite Config** (`frontend/vite.config.js`):
- Development server on port 3000
- Proxy to backend API

**Tailwind Config** (`frontend/tailwind.config.js`):
- Custom primary color scheme
- Responsive breakpoints

### Backend Configuration

**Environment Variables** (`.env`):
```env
PORT=5000
NODE_ENV=development
GOOGLE_MAPS_API_KEY=your_api_key_here (optional)
ALLOWED_ORIGINS=http://localhost:3000
```

## 🧪 API Endpoints

### Health Check
```
GET /api/health
Response: { status: 'ok', message: '...', timestamp: '...' }
```

### Generate Itinerary
```
POST /api/generate-itinerary
Body: {
  budget: number,
  startLocation: string,
  destination: string,
  duration: number,
  interests: string[]
}
Response: {
  success: boolean,
  data: {
    startLocation: string,
    destination: string,
    duration: number,
    totalBudget: number,
    budgetBreakdown: object,
    dailyPlans: array,
    tips: array
  }
}
```

## 🎨 Features Breakdown

### 1. Landing Page
- Hero section with compelling CTA
- "How It Works" section
- Benefits showcase
- Responsive design

### 2. Travel Planner
- Comprehensive form with validation
- Interest selection with icons
- Real-time validation
- Loading states

### 3. AI Itinerary Generator
- Mock AI logic (no API costs)
- Budget-aware planning
- Interest-based activity selection
- Realistic daily schedules

### 4. Map Integration
- Google Maps placeholder
- Route visualization
- Start/end location markers
- Easy API key integration

### 5. Itinerary Display
- Day-wise breakdown
- Activity timeline
- Cost per activity
- Budget summary
- Travel tips

## 🔒 Error Handling

- Form validation on client side
- API error handling with user-friendly messages
- Network error detection
- 404 and 500 error pages
- Request logging for debugging

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interactions
- Optimized layouts for all screen sizes

## 🚢 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway/Render)
```bash
cd backend
# Set environment variables in hosting platform
# Deploy with Node.js buildpack
```

## 🤝 Contributing

This is a complete, standalone project. Feel free to:
- Add new features
- Improve AI logic
- Enhance UI/UX
- Add more activity categories
- Integrate real APIs

## 📝 License

This project is open source and available for educational purposes.

## 🙋‍♂️ Support

For issues or questions:
1. Check the code comments
2. Review API documentation
3. Inspect browser console for errors
4. Check backend logs

## 🎓 Educational Notes

### Learning Points:
- React component architecture
- State management with hooks
- Form handling and validation
- API integration with Axios
- Express.js server setup
- RESTful API design
- Mock AI/ML logic implementation
- Responsive CSS with Tailwind
- Error handling patterns

### Best Practices Demonstrated:
- Component reusability
- Separation of concerns
- API service layer
- Environment configuration
- Error boundaries
- Loading states
- User feedback
- Clean code structure

## 🔮 Future Enhancements

Potential additions:
- User authentication
- Save/share itineraries
- Real AI integration (OpenAI, Google AI)
- Weather API integration
- Hotel booking integration
- Flight search integration
- Multi-destination support
- Collaborative trip planning
- Budget tracking during trip
- Reviews and ratings

---

**Built with ❤️ for students who love to travel**
