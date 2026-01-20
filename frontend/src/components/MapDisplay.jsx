import React from 'react'

/**
 * Map display component
 * Shows route visualization using Google Maps or placeholder
 */
function MapDisplay({ startLocation, destination }) {
  // Generate Google Maps embed URL
  const getMapUrl = () => {
    const origin = encodeURIComponent(startLocation)
    const dest = encodeURIComponent(destination)
    
    // Using Google Maps Embed API
    // In production, replace YOUR_API_KEY with actual Google Maps API key
    return `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${origin}&destination=${dest}&mode=driving`
  }

  // Fallback static map URL (works without API key)
  const getStaticMapUrl = () => {
    const origin = encodeURIComponent(startLocation)
    const dest = encodeURIComponent(destination)
    return `https://maps.googleapis.com/maps/api/staticmap?size=800x400&markers=color:green|label:A|${origin}&markers=color:red|label:B|${dest}&path=color:0x0000ff|weight:5|${origin}|${dest}&key=YOUR_API_KEY`
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <span className="text-2xl mr-2">🗺️</span>
        Route Map
      </h3>
      
      <div className="bg-gray-100 rounded-lg overflow-hidden border border-gray-300">
        {/* Map placeholder - shows route information */}
        <div className="relative w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">🗺️</div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Route Visualization</h4>
            <div className="space-y-2 text-gray-700">
              <p className="flex items-center justify-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">A</span>
                <span className="font-semibold">{startLocation}</span>
              </p>
              <div className="text-2xl">↓</div>
              <p className="flex items-center justify-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">B</span>
                <span className="font-semibold">{destination}</span>
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-4 max-w-md">
              To enable interactive map view, add your Google Maps API key to the backend .env file
            </p>
          </div>
        </div>

        {/* Uncomment below to use actual Google Maps when API key is available */}
        {/* 
        <iframe
          title="Route Map"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          src={getMapUrl()}
          allowFullScreen
        />
        */}
      </div>

      {/* Route information */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Starting Point</p>
          <p className="font-semibold text-gray-800">{startLocation}</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-gray-600 mb-1">Destination</p>
          <p className="font-semibold text-gray-800">{destination}</p>
        </div>
      </div>
    </div>
  )
}

export default MapDisplay
