import React from 'react'

const App = () => {
  return (
    <div className="p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center">NIFTY/BankNIFTY Dashboard</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
        <div className="p-4 border rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Live Option Chain</h2>
          <p className="text-sm">Real-time data goes here...</p>
        </div>
        <div className="p-4 border rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-2">Open Interest & Volume</h2>
          <p className="text-sm">Charts and data visualization</p>
        </div>
        <div className="p-4 border rounded-xl shadow-md col-span-2">
          <h2 className="text-xl font-semibold mb-2">AI-Based Reversal Zones</h2>
          <p className="text-sm">Buy/Sell zones and sentiment analysis</p>
        </div>
      </div>
    </div>
  )
}

export default App