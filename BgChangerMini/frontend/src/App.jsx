import React, { useState } from "react"
import Card from "./assets/Card"

function App() {
  const [selectedColor, setSelectedColor] = useState("#fbbf24")

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: selectedColor }}
    >
      <Card setSelectedColor={setSelectedColor} />
    </div>
  )
}

export default App
