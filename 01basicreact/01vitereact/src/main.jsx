import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FirstComponent from './FirstComponent.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <FirstComponent />
  </div>
)
